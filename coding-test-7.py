import re


def text_listup(data):
    # 1. 특수문자 및 공백을 제외한 문자만 남게 해준다.
    setData = re.sub(r"[^\uAC00-\uD7A30-9a-zA-Z\s]", "", data).replace(" ", "")
    # print(setData)

    # 대소문자 변환 때문에, 알파벳만 있는지 확인을 한다.
    # 2. 알파벳이 있다면, 모두 소문자로 변환하고 datalist로 담아주고,
    # 알파벳이 없다면 그대로 datalist에 담아준다.
    if setData.isalpha():
        datalist = list(setData.lower())
    else:
        datalist = setData
    # print(datalist)

    textNumber = {}
    for chr in datalist:
        if chr in textNumber:
            textNumber[chr] += 1
        else:
            textNumber[chr] = 1
    # print(textNumber)

    wordArr = [setData[i:i+5] for i in range(0, len(setData), 5)]

    # print(wordArr)
    # 조건 3은 해결하지 못하여 처음 문장의 음절을 5개씩 묶어서 한 문장으로 출력했다.
    return (textNumber, wordArr)


fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

print(text_listup(fromInput))
