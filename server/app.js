const express = require("express");
const connection = require("./db");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connection();
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler)

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
