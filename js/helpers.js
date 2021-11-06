/* Mutates a given array changing the order of its elements */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* Returns an array the unifies any number of arrays passed as parameters */
/* This method is supposed to be more statistically efficient than simpler methods */
function mergeArrays(...arrays) {
    let result = arrays.reduce((acc, el) => {
        return acc.concat(el);
    }, []);
    return result;
}

/* DOM function to clear all the children of a given element */
function clearElementChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}