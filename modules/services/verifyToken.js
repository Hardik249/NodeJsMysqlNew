const jwt = require('jsonwebtoken');
let user;
let decoded;
// let created_by;
let verifiedToken;
jwtKey = 'jwt';

exports.verifyToken = async(req, res, next) => {
  const token = req.header('Authorization');
  // console.log(token);
  if (token) {
    try {
      jwt.verify(token, jwtKey, function(err, decoded) {
        // console.log(decoded);
        if (err) {
          console.log(err);
          return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        } else {
          // created_by = decoded.user.created_by
          // updated_by = decoded.user.updated_by
          req.user = decoded.user
          next();
        }
      })
    } 
    catch (error) {
      console.log(error);
      return res.status(400).send({
        message: "UnAuthorized Person!"
      });
    } 
  } 
  else {
    return res.status(401).send({
      message: "Please Provide a Valid JWT Token!"
    });
  }
  // next();
}

// app.use(verifyToken);
