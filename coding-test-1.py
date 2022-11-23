import math
# print(math.pi) 원주율

x = 10
y = 20

if x == 10 and y == 20:     # x가 10이면서 y가 20일 때
    print('참')
else:
    print('거짓')


def result(r):
    if type(r) is int and 0 < r <= 100:
        return print('참입니다')


result(3)


def cone_volume(radius, height):
    if type(radius) is int and 0 < radius <= 100:
        if type(height) is int and 0 < height <= 100:
            return int((math.pi*math.pow(radius, 2)*height) / 3)
        else:
            print('height가 조건과 일치하지 않습니다.')
    else:
        print('radius가 조건과 일치하지 않습니다.')


print(cone_volume(3, 3))
