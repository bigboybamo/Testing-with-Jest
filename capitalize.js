const capt = (word) => {
    if(word === undefined ){
        return ''
    } else if (!isNaN(word) ){
        return word
    }
    else{
const newWord = word.replace(/^\w/, c => c.toUpperCase());
return newWord;
    }
}

module.exports = capt;