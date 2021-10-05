const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Deployed Successfully");
});

const port = process.env.port || 3333;

app.listen(port, () => {
	console.log("Whatzappp!");
});
