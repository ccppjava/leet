from typing import List

class Solution:
    def __init__(self):
        super().__init__()
        self.mapping = {'2': ('a', 'b', 'c'), '3': ('d', 'e', 'f'), '4': ('g', 'h', 'i'), '5': ('j', 'k', 'l'),
                        '6': ('m', 'n', 'o'), '7': ('p', 'q', 'r', 's'), '8': ('t', 'u', 'v'), '9': ('w', 'x', 'y', 'z')}
        self.result = set()


    def letterCombinations(self, digits: str) -> List[str]:
        self.digits = digits
        self.get_combination('', 0)
        print(self.result)
        return self.result

    def get_combination(self, str: str, index: int):
        if index >= len(self.digits):
            if len(str) > 0:
                self.result.add(str)
            return str

        choices = self.mapping[self.digits[index]]
        for char in choices:
            self.get_combination(str + char, index + 1)




Solution().letterCombinations("23")
Solution().letterCombinations("")
Solution().letterCombinations("2")