# numpy
import numpy as np

# keras
from keras.utils import pad_sequences

def idx_to_word(integer, tokenizer):
    for word, index in tokenizer.word_index.items():
        if index == integer:
            return word
    return None


def beam_search_pred(model, image, tokenizer, max_length, K_beams=3, log=False):
    start = tokenizer.texts_to_sequences(["startseq"])[0]
    start_word = [[start, 0.0]]

    while len(start_word[0][0]) < max_length:
        temp = []
        for s in start_word:
            sequence = pad_sequences([s[0]], maxlen=max_length).reshape(
                (1, max_length)
            )  # sequence of most probable words
            # based on the previous steps
            preds = model.predict([image.reshape(1, -1), sequence])
            word_preds = np.argsort(preds[0])[
                -K_beams:
            ]  # sort predictions based on the probability, then take the last
            # K_beams items. words with the most probs

            # Getting the top <K_beams>(n) predictions and creating a
            # new list so as to put them via the model again
            for w in word_preds:
                next_cap, prob = s[0][:], s[1]
                next_cap.append(w)
                if log:
                    prob += np.log(preds[0][w])  # assign a probability to each K words
                else:
                    prob += preds[0][w]
                temp.append([next_cap, prob])
        start_word = temp
        # Sorting according to the probabilities
        start_word = sorted(start_word, reverse=False, key=lambda l: l[1])

        # Getting the top words
        start_word = start_word[-K_beams:]

    start_word = start_word[-1][0]
    captions_ = [tokenizer.index_word[i] for i in start_word]

    final_caption = []

    for i in captions_:
        if i != "endseq":
            final_caption.append(i)
        else:
            break

    final_caption = " ".join(final_caption)
    return final_caption


def predict_caption(model, image, tokenizer, max_length):
    in_text = "startseq"
    for i in range(max_length):
        sequence = tokenizer.texts_to_sequences([in_text])[0]
        sequence = pad_sequences([sequence], max_length)
        yhat = model.predict([image, sequence], verbose=0)
        yhat = np.argmax(yhat)
        word = idx_to_word(yhat, tokenizer)
        if word is None:
            break
        in_text += " " + word
        if word == "endseq":
            break

    return in_text


def beam_image_preds(model, tokenizer, feature, max_length, val1, val2):
    beam_log = []

    beam_X = beam_search_pred(
        model, feature, tokenizer, max_length, K_beams=val1, log=False
    )
    beam_Y = beam_search_pred(
        model, feature, tokenizer, max_length, K_beams=val2, log=False
    )
    beam_log_X = beam_search_pred(
        model, feature, tokenizer, max_length, K_beams=val1, log=True
    )
    beam_log_Y = beam_search_pred(
        model, feature, tokenizer, max_length, K_beams=val2, log=True
    )
    beam_log = [beam_X, beam_Y, beam_log_X, beam_log_Y]

    for i in range(len(beam_log)):
        beam_log[i] = beam_log[i].replace("startseq ", "")

    return beam_log


def regular_captions(model, tokenizer, feature, max_length):
    pred_caption = predict_caption(model, feature, tokenizer, max_length)
    final_caption = (pred_caption.replace("startseq", "")).replace("endseq", "")
    return final_caption
