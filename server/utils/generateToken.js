const jwt = require("jsonwebtoken");

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "30d",
	});
};

module.exports = generateToken;
 