shape_array = ["spade", "heart", "diamond", "club", "joker"]


def trump_deck(shapeArray):
    card_num = []
    for i in range(13):
        card_num.append(i+1)

    # print(card_num)

    shape = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
    ]
    result = {name: value for name, value in zip(shape, card_num)}

    joker = ["RED", "BLACK"]
    joker_num = [1, 2]

    result_joker = {name: value for name, value in zip(joker, joker_num)}

    # print(result)

    card = {}
    for i in range(len(shape_array)):
        if shape_array[i] != 'joker':
            card[shape_array[i]] = result
        else:
            card[shape_array[i]] = result_joker

    return card


trump_deck(shape_array)
print(trump_deck(shape_array))
