// Given two binary strings a and b, return their sum as a binary string.

/**
 * Input: a = "11", b = "1"
 * Output: "100"
 */

/**
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/* var addBinary = function (a, b) {
	const num1 = a.split(""); //[1, 1]
	const num2 = b.split(""); // [1]
	let sum = [];
	let carry = 0;

	for (let i = num1.length - 1; i >= 0; i--) {
		const b_digit = +num1[i] + +num2[i] + carry;
		if (b_digit > 1) {
			sum[i] = 0;
			carry = 1;
		} else {
			sum[i] = b_digit;
			carry = 0;
		}
	}
	// console.log(carry);
	if (carry) sum.unshift(carry);
	sum.forEach((digit, index) => {
		if (!digit) sum[index] = 0;
	});
	console.log(sum);
	// return sum.join("");
}; */

var addBinary = function (a, b) {
	let num1 = a.split(""); // [1, 1, 1]
	let num2 = b.split(""); // [1, 0, 1, 0]

	let bigger, smaller, insertLen;
	if (num1.length !== num2.length) {
		bigger = num1.length > num2.length ? num1 : num2;
		smaller = num1.length < num2.length ? num1 : num2;
		insertLen = bigger.length - smaller.length;
	} else {
		bigger = num1 > num2 ? num1 : num2;
		smaller = num1 < num2 ? num1 : num2;
		insertLen = bigger.length - smaller.length;
	}

	// console.log("big", bigger);
	// console.log("small", smaller);
	// console.log(insertLen);

	if (insertLen) {
		for (let i = 0; i < insertLen; i++) {
			smaller.unshift("0");
		}
	}

	// console.log(smaller);

	let sum = [];
	let carry = 0;
	let allZero = 0;
	for (let i = bigger.length - 1; i >= 0; i--) {
		const b_digit = +bigger[i] + +smaller[i] + carry;
		if (b_digit > 1) {
			sum[i] = b_digit % 2;
			carry = 1;
		} else {
			sum[i] = b_digit;
			carry = 0;
		}
	}
	// console.log(carry);
	if (carry) sum.unshift(carry);
	sum.forEach((digit) => {
		if (digit == 0) allZero++;
	});
	if (allZero === sum.length) sum.splice(0, sum.length, 0);
	console.log(sum);

	// return sum.join("");
};

addBinary("1010", "1011");
addBinary("11", "1");
// addBinary("1", "111");
// addBinary("0", "0");
// addBinary("00", "00");
// addBinary("01", "01");
// addBinary("1111", "1111");
// addBinary("100", "110010");
addBinary("111", "1010");
