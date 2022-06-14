/************************
 * ACCEPTED
 ************************/

var isValid = function (s) {
	if (s.length % 2 !== 0) return false;

	// "()[]{}"
	// ([)]
	// {[]}

	let stack = [];
	for (let c of s) {
		if (c === ")" && stack[stack.length - 1] === "(") {
			stack.pop();
		} else if (c === "}" && stack[stack.length - 1] === "{") {
			stack.pop();
		} else if (c === "]" && stack[stack.length - 1] === "[") {
			stack.pop();
		} else {
			stack.push(c);
		}
	}
	console.log(!stack.length);
};
isValid("()[]{}");
isValid("([)]");
isValid("{[]}");
