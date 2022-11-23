inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
print(inputData[0])


def sortArray(arr):
    step = 0
    i = 0
    j = 0
    for i in arr:
        minIndex = i

        for j in arr:
            if arr[minIndex] > arr[j]:
                minIndex = j
                step += 1
                print(step)
                print(arr)

    if minIndex != i:
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    return arr


print(sortArray(inputData))
