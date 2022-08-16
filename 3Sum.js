const twoSum = (j, target, nums) => {
    // k traverses reverse
    let k = nums.length - 1;
    // subResult array that we'll be returning when conditions satisfy
    let result = [];
    // loop through until conditions don't satisfy
    while(j < k) {
        // instantiating the j and k variables
        let leftVal = nums[j];
        let rightVal = nums[k];
        // if the sum of j and k are bigger than the target then we decrement the k value
        if(leftVal + rightVal > target) {
            k--;
        // if the sum of j and k are less than the target then we increment the j value
        } else if (leftVal + rightVal < target) {
            j++;
        // if the sum of j and k equal to the target
        } else {
            // push the values into the result, but don't forget to switch the target back to its unmutated number
            result.push([(target * -1), leftVal, rightVal]);
            // check for duplicates on j and k 
            while (j < k && nums[j] === nums[j + 1]) j++;
            while (j < k && nums[k] === nums[k - 1]) k--;
            // increment and decrement k to check for other values
            j++;
            k--;
        }
    }
    // return the result
    return result;
}

var threeSum = function(nums) {
    // sort the array
    nums.sort((a,b) => a - b);
    // we need to push into the result array when conditions are satisfied and then return it
    const result = [];
    // traverse the array 
    for(let i = 0 ;i < nums.length; i++) {
        // checks for duplicates
        if(nums[i] === nums[i - 1]) continue;
        // target value to compare the j and k values to see if it equals i and if it does then return all of those values.
        let target = nums[i] * -1;
        // helper function to compare the j and k to target
        let subResult = twoSum(i + 1, target, nums);
        // push the subResult into the result array with the spread operator so we don't get empty arrays in our result.
        result.push(...subResult);
    }
    // return for the solution
    return result;
};