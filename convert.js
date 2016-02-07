var change = function(time) {
    console.log("from convert fun: " + time);
    if (time/1) {
    var date = new Date(time * 1000);
    var naturalDate = date.toString().slice(4,15);
    return [ time, naturalDate ];
    }
    else if (Date(time)) { 
    //var date = Date.parse(time);
    var date = Date.parse(time) / 1000;
    if (date) {
    return [date , time];
    }
    }
    else {return; }
};

module.exports.change = change;
