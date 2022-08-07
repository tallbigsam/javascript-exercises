const repeatString = function(phrase, numTimes) {
    let phraseCollection = [];

    if(numTimes < 0){
     return 'ERROR';
    } 
    
    for(i=0; i < numTimes; i++ ) {
        phraseCollection.push(phrase)
    }
    return phraseCollection.join('')
};

// Do not edit below this line
module.exports = repeatString;
