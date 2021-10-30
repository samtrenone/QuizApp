function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function mixAndShuffleArrays(...arrays) {
    let result = arrays.reduce((acc, el) => {
        return acc.concat(el);
    }, []);
    return result;
}

function clearElementChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}