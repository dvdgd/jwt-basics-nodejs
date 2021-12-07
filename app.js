const express = require("express");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const mainRouter = require("./routes/main");
require("dotenv").config();
require("express-async-errors");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		app.listen(
			port,
			console.log(`Server is running on http://localhost:${port}`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
