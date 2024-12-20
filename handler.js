const querystring = require("querystring");

exports.registerUser = async (event) => {
  const { name, email, address, city } = querystring.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: name + " " + email + " " + address + " " + city,
    }),
  };
};

exports.getUser = async (event) => {
  let msg;

  if (event.queryStringParameters.email == "giuseppe.distefano88@gmail.com") {
    msg = "User matched";
  } else {
    msg = "User not matched";
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: msg,
    })
  };
}