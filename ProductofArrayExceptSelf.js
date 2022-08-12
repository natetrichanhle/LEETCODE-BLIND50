var productExceptSelf = function (nums) {
    //     instantiate the left side of the array (going to be filled with nums[i] multiplied by its left side)    
    // EX - [1,2,3,4] -> [1,1,2,6] <- starts with 1 because nothings on the left of the first index at the start and then 1*1, 2 * 1, 3 * 2
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    //     instantiate the right side of the array (going to be filled with nums[i] multiplied by its left side: EX - [1,2,3,4] -> [])
    // EX - [1,2,3,4] -> [24,12,4,1] <- starts with 1 because nothings to the right of the first index at the end and then 4 * 1, 3 * 4, 2 * 12
    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;

    //     fills left side with appropriate numbers
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    //     fills right side with appropriate numbers
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    //     mutate nums by combining the product of the left and right arrays.
    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }
    return nums;
};