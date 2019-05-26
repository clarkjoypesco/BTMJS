let re;
re = /hello/;
re = /hello/i; // i = case insenstive
// re = /hello/g; //Global search

// console.log(re);
// console.log(re.source);

//exec() - Return result in an array or null
// const result = re.exec("cjpesco hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - return true or false
// const result = re.test("Hello");

// console.log(result);

//match() - Return result array or null
// const str = "CJPESCO Hello There";
// const result = str.match(re);

// console.log(result);

//search() - Returns index of the first match if not found returns -1
// const str = "What Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = "Hello There";
// const newStr = str.replace(re, "Hi");
// console.log(newStr);
