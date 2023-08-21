"use strict";
function twoSum(nums, target) {
    let indexes = [];
    let tempVal = 0;
    for (let oi = 0; oi < nums.length / 2; oi++) {
        for (let ii = 0; ii < nums.length / 2; ii++) {
            tempVal = nums[oi] + nums[ii];
            if (tempVal == target) {
                indexes.push(oi, ii);
            }
        }
    }
    return indexes;
}
;
console.log(twoSum([2, 7, 11, 15], 9));
//# sourceMappingURL=TwoSumToTarget.js.map