/************************
 * ACCEPTED
 ************************/
var longestCommonPrefix = function (strs) {
	let prefix = strs[0].split("");

	if (strs.length >= 1 && strs.length <= 200) {
		for (let i = 0; i < strs.length; i++) {
			let count = 0;
			for (let j = 0; j < strs[i].length; j++) {
				if (strs[i][j] === prefix[j]) {
					count += 1;
				} else {
					break;
				}
			}
			prefix = prefix.splice(0, count);
		}
	}
	console.log(prefix.join(""));
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix(["a"]);
