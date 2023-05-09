const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB);

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database");
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
