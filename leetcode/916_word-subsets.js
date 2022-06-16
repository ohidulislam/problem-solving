var wordSubsets = function (words1, words2) {
	let output = [];

	let filterArr = words1;
	for (let i = 0; i < words2.length; i++) {
		const matched = filterArr.filter((word) => word.includes(words2[i]));
		console.log("matched => ", matched);

		if (matched.length) {
			filterArr = matched;
			// output.push(matched.filter((word) => word.includes(words2[i + i])));
		}
		output = matched;
	}
	// console.log(output);
	return output;
};

// wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]);
// wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]);
wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]);
