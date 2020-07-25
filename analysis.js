

const change = (thisArray) => {
   
    let length = thisArray.length;
    let sum = thisArray.reduce(function(a, b) { return a + b; }, 0);
    let averagee = sum/length ;
    let max = Math.max(...thisArray)
    let min = Math.min(...thisArray)
    
    let resultObj ={
        length,
        averagee,
        max,
        min
    }

    return resultObj

}

module.exports = change;