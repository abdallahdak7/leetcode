function runningSum(nums: number[]): number[] {
    const numbs = []
    let box = 0
    for (let i = 0; i < nums.length; i++) {
        box += nums[i]
        numbs.push(box)
    }

    return numbs;
};
