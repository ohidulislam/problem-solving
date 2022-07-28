"""
 * ACCEPTED
"""

def missingNumber(nums):
    acc = 0
    for i in range(len(nums) + 1):
        acc += i
        # print(i)
    print(acc - sum(nums))
    # return acc - sum(nums)

missingNumber([0,1])
missingNumber([9,6,4,2,3,5,7,0,1])