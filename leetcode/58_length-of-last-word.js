/************************
 * ACCEPTED
 ************************/

var lengthOfLastWord = function (s) {
	const newStr = s.trim().split(" ");
	// console.log(s)
	return newStr[newStr.length - 1].length;
};

// console.log(lengthOfLastWord("Hello world"))
// console.log(lengthOfLastWord("   fly me   to   the moon  "))
