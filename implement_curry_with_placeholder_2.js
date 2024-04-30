// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function namedFunc(...args) {
    const allSet = args.slice(0,3).every(
      (element) => !Object.is(curry.placeholder, element)
    );
    if (args.length >= 3 && allSet) {
      return fn(...args);
    }
    return (...newArgs) => {
      const updatedArgs = [];
      for (let x of args) {
        if (Object.is(curry.placeholder, x) && newArgs.length) {
          updatedArgs.push(newArgs[0]);
          newArgs = newArgs.slice(1);
        } else {
          updatedArgs.push(x);
        }
      }
      return namedFunc(...[...updatedArgs, ...newArgs]);
    };
  };
}

curry.placeholder = Symbol();

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1));
