const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to the Homepage baby");
});

const port = process.env.port || 3333;

app.listen(port, () => {
	console.log("Whatzappp!");
});
