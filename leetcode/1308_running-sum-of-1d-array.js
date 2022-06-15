/************************
 * ACCEPTED
 ************************/

/* 
Input: nums = [1,2,3,4]

Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/

var runningSum = function (nums) {
	const result = [];

	// loop through all numbers
	for (let i = 0; i < nums.length; i++) {
		if (!result.length && i === 0) {
			result.push(nums[i]);
		} else {
			result.push(result[i - 1] + nums[i]);
		}
	}

	console.log(result);
	// return result;
};

runningSum([1, 2, 3, 4]);
runningSum([5, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
