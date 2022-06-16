/************************
 * ACCEPTED
 ************************/

/* 
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

*/

var transpose = function (matrix) {
	const result = [];

	for (let i = 0; i < matrix[0].length; i++) {
		let subArr = [];
		for (let j = 0; j < matrix.length; j++) {
			//
			subArr.push(matrix[j][i]);
			// result.push([matrix[i][j]]);
		}
		result.push(subArr);
	}

	// console.log(result);
	return result;
};

transpose([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
transpose([
	[1, 2, 3],
	[4, 5, 6],
]);
