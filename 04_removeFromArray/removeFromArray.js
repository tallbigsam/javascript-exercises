const removeFromArray = function(arrayNumbers, ...args) {
    
    args.forEach((arg) => {
        const indexOf = arrayNumbers.indexOf(arg)
        if (indexOf > -1) {
            arrayNumbers.splice(indexOf, 1)
        }    
    })
    return arrayNumbers;
};

// Do not edit below this line
module.exports = removeFromArray;
