const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
	//getting the required data from the request
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

	if (language === "python") {
		language = "python3"
	}

	let data = ({
		code: code,
		language: language,
		version: 'latest',
		input: input
	});
	let config = {
		method: 'POST',
		url: 'https://online-code-compiler.p.rapidapi.com/v1/',
		headers: {
		  'content-type': 'application/json',
		  'X-RapidAPI-Key':process.env.KEY,
		  'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'},
		data: data
	};
	//calling the code compilation API
	Axios(config)
		.then((response) => {
			res.send(response.data)
		    console.log(response.data)
		}).catch((error) => {
			console.log("\n\nThe error in the code is\n\n",error);
		});
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
