/************************
 * ACCEPTED
 ************************/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function sorter(a, b) {
	if (a < b) return -1; // any negative number works
	if (a > b) return 1; // any positive number works
	return 0; // equal values MUST yield zero
}

var merge = function (nums1, m, nums2, n) {
	// if (m && n) {
	nums1.splice(m, n, ...nums2);
	// }

	console.log(nums1.sort(sorter));
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
