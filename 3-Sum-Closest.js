/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    closest3Sum(nums, target) {
        // code here
        nums.sort(((a, b) => a - b))
        let n=nums.length
        let closestS= nums[0]+nums[1]+nums[2]
        for (let i=0; i<n-1;i++){
            if (i>0 & nums[i]===nums[i-1]){
                continue
            }
            let low=i+1
            let high=n-1
            
            while (low < high){
                let curS=nums[i]+nums[low]+nums[high]
                if (curS===target){
                    return curS
                }
                if (Math.abs(target- curS ) < Math.abs(target-closestS )||(Math.abs(curS - target) == Math.abs(closestS - target) & curS > closestS) ){
                    closestS = curS
                }
                if (curS<target){
                    low++
                }
                else{
                    high--
                }
            }
        }
        return closestS
        
    }
}
