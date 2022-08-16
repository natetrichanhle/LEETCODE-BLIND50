var merge = function (intervals) {
    // sort the intervals by the 0th value
    intervals.sort((a, b) => a[0] - b[0]);
    // instantiate the result with the first interval
    const result = [intervals[0]];

    // loop through all the intervals
    for (let interval of intervals) {
        // e1 is the last index of the last interval in the result array
        let e1 = result[result.length - 1][1];
        // s2 is equal to the first index at the interval we are currently on 
        let s2 = interval[0];
        // e2 is equal to the last index at the interval we are currently on
        let e2 = interval[1];

        // if e1 is greater than s2 then we merge
        if (e1 >= s2) {
            // result[result.length-1][1] <- basically e1 is equal to the maximum of e1 or e2 because e1 can still be larger than e2
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            // if e1 isnt greater than s2 then just push the interval into the array
            result.push(interval);
        }
    }
    // return the result
    return result;
};