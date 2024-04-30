function curry(fn) {
  // your code here
  const func = (...args) => {
    if (args.length >= 3) {
      return fn(...args);
    }
    return (...newArgs) => func(...[...args, ...newArgs]);
  };
  return func;
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'

