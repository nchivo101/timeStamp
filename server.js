var convert = require('./convert');
var express = require('express');
var app = express();

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/home.html");
})

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

app.set ("port", process.env.PORT || 5000 );
app.listen(app.get("port"), function() {
    console.log("Running ...")
})
