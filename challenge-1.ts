function runningSum(nums: number[]): number[] {
    const numbs = []
    let box = 0
    for (let i = 0; i < nums.length; i++) {
        box += nums[i]
        numbs.push(box)
    }

    return numbs;
};

/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
