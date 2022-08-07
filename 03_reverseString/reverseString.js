const reverseString = function(stringForwards) {
    let stringForwardsArray = stringForwards.split("");
    
    let stringReverse = []
    for(let i = 0; i < stringForwards.length; i++ ) {
        stringReverse.push(stringForwardsArray.pop())
    }
    return stringReverse.join('')
};

// Do not edit below this line
module.exports = reverseString;
