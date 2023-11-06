// Implement a function memoise which memoises results for a set of arguments -

// logic is simple, basically store the computation in a hashmap

function memoiseFun(callback){
	let hashMap = {};
	return (...params) => {
		let key = params.join(",");
		if(!hashMap[key]){
			console.log("calculated this time !!");
			hashMap[key] = callback(...params);
		}
		console.log(hashMap,"haha");
		return hashMap[key];
	}
}

// Sample function fun which adds all params passed to it
let fun = (...params) => {
	let ans = 0;
	params.forEach(el => {
		ans += el;
	})
	return ans;
}

let ans = memoiseFun(fun);
ans(2,3,5,10)
ans(2,3,6,8)
ans(5,6,-1,56)
ans(2,3,5,10)
ans(2,3,6,8)