import random

class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic = {}
        self.arr = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if (val in self.dic):
            return False
        else:
            count = len(self.arr)
            self.arr.append(val)
            self.dic[val] = count
            return True
        

    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if (val not in self.dic):
            return False
        else:
            index = self.dic.pop(val)
            last = self.arr.pop()
            # print(val, index, self.arr)
            if (last != val):
                self.arr[index] = last
                self.dic[last] = index

            return True


    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        index = random.randint(0, len(self.arr) - 1)
        return self.arr[index]


# Your RandomizedSet object will be instantiated and called as such:
obj = RandomizedSet()
param_1 = obj.insert(0)
param_1 = obj.insert(1)
param_2 = obj.remove(0)
param_1 = obj.insert(2)
param_2 = obj.remove(1)
param_3 = obj.getRandom()
print(param_3)