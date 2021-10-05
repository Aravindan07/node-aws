const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to the Homepage baby");
});

app.listen(3333, () => {
	console.log("Whatzappp!");
});
