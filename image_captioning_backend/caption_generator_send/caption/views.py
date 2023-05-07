import keras
from keras import backend as K
import os
from io import BytesIO
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# pickle
import pickle

# keras
from keras.models import load_model, Model
from keras.utils import load_img, img_to_array

# utilities
from caption.utilities import (
    beam_image_preds,
    regular_captions,
)

# config
from django.conf import settings

from keras.applications import EfficientNetB4, EfficientNetB6

# load model and tokenizer from the file

def capt_gen(switcher):

    if (switcher=='Regular'):

        model = load_model(os.path.join(settings.BASE_DIR, "model/model_sub_26_Reg.h5"))

        with open(os.path.join(settings.BASE_DIR, "model/tokenizer.pkl"), "rb") as handle:
            tokenizer = pickle.load(handle)

        vocab_size = len(tokenizer.word_index) + 1
        en_model = EfficientNetB4(weights='imagenet', include_top=True)
        en_model = Model(inputs=en_model.inputs, outputs=en_model.layers[-2].output)
        targ = 380
        print("MODEL WITHOUT ATTENTION IS LOADED")
        return [model, en_model, tokenizer, vocab_size, targ]
    
    elif (switcher=='Attention'):

        model = load_model(os.path.join(settings.BASE_DIR, "model/model_sub_68_Att.h5"), custom_objects={
            "K": K,
        })
        # model = load_model(os.path.join(settings.BASE_DIR, "model/model_sub_8.h5"))

        with open(os.path.join(settings.BASE_DIR, "model/tokenizer.pkl"), "rb") as handle:
            tokenizer = pickle.load(handle)

        vocab_size = len(tokenizer.word_index) + 1
        en_model = EfficientNetB6(weights='imagenet', include_top=True)
        en_model = Model(inputs=en_model.inputs, outputs=en_model.layers[-2].output)
        targ = 528
        print("MODEL WITH ATTENTION IS LOADED")
        return [model, en_model, tokenizer, vocab_size, targ]
    
    elif (switcher=='Nepali'):
        model = load_model(os.path.join(settings.BASE_DIR, "model/model_sub_26_Nepali.h5"), custom_objects={
            "K": K,
        })

        with open(os.path.join(settings.BASE_DIR, "model/tokenizer_Nepali.pkl"), "rb") as handle:
            tokenizer = pickle.load(handle)

        vocab_size = len(tokenizer.word_index) + 1
        en_model = EfficientNetB6(weights='imagenet', include_top=True)
        en_model = Model(inputs=en_model.inputs, outputs=en_model.layers[-2].output)
        targ = 528
        print("NEPALESE MODEL IS LOADED")
        return [model, en_model, tokenizer, vocab_size, targ]


@api_view(["POST"])
def generate_caption(request):
    is_attention = request.query_params.get("switcher", 'Regular')

    show_beamed_caption = True

    print("Model Type: {0}".format(is_attention))

    process_list = capt_gen(is_attention)

    # if is_attention == 'Regular':
    #     process_list = capt_gen('Regular')
    # elif is_attention == 'Attention':
    #     process_list = capt_gen(False)

    # Convert the uploaded file to a BytesIO object
    img_file = request.FILES.get("image",None)

    if img_file is None:
        return Response(
            {
                "message":"Enter a valid image"
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    img_bytes = BytesIO(img_file.read())

    # Load the image and preprocess it
    loaded_image = load_img(img_bytes, target_size=(process_list[4], process_list[4]))
    resized_image = loaded_image.resize((process_list[4], process_list[4]))
    
    image = img_to_array(resized_image)
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
    feature = process_list[1].predict(image, verbose=0)

    max_length = 0

    if (is_attention == 'Nepali'):
        max_length = 58
    else:
        max_length = 74

    regular_caption = regular_captions(process_list[0], process_list[2], feature, max_length)

    beamed_caption = []

    if show_beamed_caption:
        beamed_caption = beam_image_preds(
            process_list[0], process_list[2], feature, max_length, val1=5, val2=15
        )

    return Response(
        {
            "regular_caption": regular_caption,
            "beamed_caption": beamed_caption,
        }
        if show_beamed_caption
        else {
            "regular_caption": regular_caption,
            "beamed_caption": beamed_caption,
        },
        status=status.HTTP_200_OK,
    )
