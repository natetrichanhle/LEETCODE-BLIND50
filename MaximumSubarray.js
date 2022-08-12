var maxSubArray = function (nums) {
    //     instantiate a current and global variable to nums[0] so that you don't need to iterate over the first variable and just compare.
    let current = nums[0];
    let global = nums[0];
    //     iterate through nums starting at 1 because the current variable starts at 0;
    for (let i = 1; i < nums.length; i++) {
        //         the current is updated to the max of the nums[i] (iterated number) or the current + nums[i] (current basically the previous value + the iterated number)
        current = Math.max(nums[i], current + nums[i]);
        //         the global variable is the max of the biggest subarray so it's equal to the max of itself or current.
        global = Math.max(global, current);
    }
    return global;
};