/************************
 * ACCEPTED
 ************************/
/* 
example 1: 
input :[2,2,1]
output: 1

example 2: 
input: [4, 2, 1, 2, 1]
output: 4

example 3: 
input: [1]
output: 1
*/

var singleNumber = function (nums) {
	let found = nums[0];
	let was = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue;
			if (nums[i] === nums[j]) {
				was.push(nums[i]);
				continue;
			}
			// console.log(`${nums[i]} ==> ${nums[j]}`);
		}
		// console.log("-----------");
	}
	// console.log(was);

	found = nums.filter((item) => !was.includes(item));
	console.log(Number(found));
	// return found
};
singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
singleNumber([1]);
singleNumber([3, 2, 3, 2, 4, 4, 5]);
