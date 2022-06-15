/************************
 * ACCEPTED
 ************************/

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/*
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

/* 
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	// let steps = 0;

	if (n === 1) {
		// console.log(n);
		return n;
	}
	// arr = [1, 2] = 3
	// arr.push 3 => [1, 2, 3]

	// add: arr[i + i-1]
	let arr = [1, 2];
	for (let i = 1; i <= n; i++) {
		if (arr.length === n) break;
		arr.push(arr[i] + arr[i - 1]);
	}

	// console.log(arr[arr.length - 1]);
	return arr[arr.length - 1];
};

climbStairs(5);
climbStairs(6);
climbStairs(7);
climbStairs(2);
climbStairs(1);
