var containsDuplicate = function(nums) {
    if(nums.length !== new Set(nums).size){
        return true;
    }
    return false;
};