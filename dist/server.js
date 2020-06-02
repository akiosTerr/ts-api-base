import express from 'express';
var app = express();
var port = 3333;
app.use(express.json());
app.get('/', function (req, res) {
    res.json({
        SYNC: 'life',
    });
});
app.listen(port, function () {
    console.log('====================================');
    console.log("Server Running on port " + port);
    console.log('====================================');
});
