from typing import List
import heapq

class Solution:

    def maximalSquare(self, matrix: List[List[str]]) -> int:
        xlen = len(matrix)
        ylen = len(matrix[0])
        heap = []

        for i in range(xlen):
            for j in range(ylen):
                # print(i, j, matrix[i][j], matrix[i][j] == "1")
                if (matrix[i][j] == "1"):
                    max = 1
                    while (i + max < xlen and j + max < ylen and matrix[i + max][j + max] == "1"):
                        max = max + 1
                    heap.append((-max, i, j))
                    # print(max, i, j, matrix[i][j])
        
        heapq.heapify(heap)

        result = 0
        # for i in range(len(heap)):
        while(heap):
            origMax, x, y = heapq.heappop(heap)
            maxDis = -origMax
            
            for i in range(x, x + maxDis):
                for j in range(y, y + maxDis):
                    if (matrix[i][j] == "0"):
                        dis = i - x if i - x > j - y else j -y 
                        if dis > 1:
                            heapq.heappush(heap, (-dis, x, y))
                        maxDis = dis
                        break
                else:
                    continue
                break

            if (maxDis == -origMax):
                result = maxDis
                # print('***', maxDis, x, y)
                break
        
        result = result * result
        # print('result', result)
        return result


solution = Solution()
solution.maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])

# 16
solution.maximalSquare([
    ["1","1","1","1","0"],
    ["1","1","1","1","0"],
    ["1","1","1","1","1"],
    ["1","1","1","1","1"],
    ["0","0","1","1","1"]])