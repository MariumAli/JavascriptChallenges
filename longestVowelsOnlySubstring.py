


# You are given with a string . Your task is to remove atmost two substrings of any length from the given string such that the 
# remaining string contains vowels('a','e','i','o','u') only. Your aim is the maximise the length of the remaining string. 
# Output the length of remaining string after removal of atmost two substrings.
# NOTE: The answer may be 0, i.e. removing the entire string.

# Sample Input
# 2
# earthproblem
# letsgosomewhere
# Sample Output
# 3
# 2
# 


# Just compute length of each vowel substring.
# If the first letter is not vowel, prepend an "empty vowel substring" on left
# If the last letter is not vowel, append an "empty vowel substring" on right
# Then you can cut two substrings in the middle and the answer should be "left + right + max of middle"


def longestVowelsOnlySubstring(S):
    temp, aux, vowels = 0, [], set('aeiou')
    # Count the length of each vowel substring
    for c in S + 'z':
        if c in vowels:
            temp += 1
        elif temp:
            aux.append(temp)
            temp = 0
    # If the first letter is not vowel, you must cut the head
    if S[0] not in vowels: aux = [0] + aux
    # If the last letter is not vowel, you must cut the tail
    if S[-1] not in vowels: aux += [0]
    # Max length = max head + max tail + max middle
    return aux[0] + aux[-1] + max(aux[1:-1]) if len(aux) >= 3 else sum(aux)