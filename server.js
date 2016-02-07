var convert = require('./convert');
var express = require('express');
var app = express();

app.get("/:time", function(req,res) {
    var obj = {"unix": null, "natural": null};
    var time = req.params.time;
    var result = convert.change(time);

    if (result !== undefined ) {
    obj["unix"] = result[0];
    obj["natural"] = result[1];
    }

    res.send(obj);
})
app.listen(4000, function() {
    console.log("Running on port 4000...")
})
