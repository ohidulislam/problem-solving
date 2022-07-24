"""
 * ACCEPTED
"""

def mySqrt(x: int) -> int:
    num = x
    count = 0
    res = 1
    if x == 1:
        return x
    for i in range(1, x, 2):
        if res < i:
            break
        res = num - i
        num = res
        count += 1
    return count

print(mySqrt(4))
print(mySqrt(8))
print(mySqrt(16))
print(mySqrt(1))