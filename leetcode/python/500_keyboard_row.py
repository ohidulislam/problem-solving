"""
    SOLVED
"""

def findWords(words):
    row1 = set("qwertyuiop")
    row2 = set("asdfghjkl")
    row3 = set("zxcvbnm")
    
    return [word for word in words if set(word.lower()).issubset(row1) or set(word.lower()).issubset(row2) or set(word.lower()).issubset(row3)]
    
    # print(row1)
    # print(row2)
    # print(row3)

print(findWords(["Hello","Alaska","Dad","Peace"]))

