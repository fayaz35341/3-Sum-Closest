class Solution:
    def closest3Sum(self, arr, target):
        # code here
        arr.sort()
        n=len(arr)
        closestS=arr[0]+arr[1]+arr[2]
        for i in range(n-2):
            if i>0 and arr[i]==arr[i-1]:
                continue
            low,high=i+1,n-1
            while low<high:
                curS=arr[i]+arr[low]+arr[high]
                if curS==target:
                    return curS
                if abs(curS - target) < abs(closestS - target) or (abs(curS - target) == abs(closestS - target) and curS > closestS):
                    closestS = curS
                
                if curS<target:
                    low+=1
                else:
                    high-=1
        return closestS
