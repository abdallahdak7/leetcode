function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr);
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        console.log(rightSum + ' === ' + leftSum)
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

/**
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11                                    
                                    */
