/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
    let n = init
    return{
        increment: () => {
            n +=1;
            return n;
            },
        decrement: () => {
            n -=1
            return n;
            },
        reset: () => {
            n = init
            return n;
            }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */