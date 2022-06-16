/************************
 * UNFINISHED
 ************************/

var singleNumber = function (nums) {
	let found = nums[0];

	// assume the 1st element of the array is the number
	// then compare it with each number of the array
	// if found any match then set the next number as `the number`
	// loop from begining the array and find any macth

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			// if (nums[i] === nums[j]) continue;
			if (nums[i] === nums[j]) {
				found = nums[i];
			}
		}
	}
	console.log(found);
	// return found
};

singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
singleNumber([1]);
