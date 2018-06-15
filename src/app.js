import express from 'express';
import { json, urlencoded } from 'body-parser';

var app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

var routes = require("./routes/routes.js").default(app);

var server = app.listen(3000, function() {
    console.log("Listening on port %s...", server.address().port);
})
