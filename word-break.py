from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        self.dic = dict([(w, 1) for w in wordDict])
        self.cache = dict()
        self.success = False
        self.breakIt(s, 0)
        return self.success
        
    
    def breakIt(self, s: str, start: int):
        if (self.success):
            return
        
        # if the index is searched previously without success
        if (start in self.cache):
            return

        # found = False
        for i in range(start, len(s) + 1):
            if (s[start:i] in self.dic):
                # found = True
                if (i == len(s)):
                    self.success = True
                    break
                self.breakIt(s, i)
                
        print(start, s[start:])
        # print(start, found, s[start:])
        # if (not found):
        #     self.cache[start] = True
        self.cache[start] = True

s = "applepenapple"
wordDict = ["apple", "pen"]
solution = Solution()
result = solution.wordBreak(s, wordDict)
print(result)

s = "aaaaaaa"
wordDict = ["aaaa","aaa"]
result = solution.wordBreak(s, wordDict)
print(result)

s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
result = solution.wordBreak(s, wordDict)
print(result)