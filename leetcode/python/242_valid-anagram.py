"""
 * ACCEPTED
"""


def isAnagram(s, t):
    set_s = sorted(s)
    set_t = sorted(t)
    
    print(set_s)
    print(set_t)
    
    if set_s == set_t and len(s) == len(t):
        return True
    else:
        return False

print(isAnagram("anagram", "nagaram"))
print(isAnagram("rat", "car"))
print(isAnagram("aa", "a"))
print(isAnagram("aacc", "ccac"))
