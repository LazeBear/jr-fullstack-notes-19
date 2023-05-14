const jwt = require('jsonwebtoken');

const secret = 'hmmfjiwjfiwjeofijewifjoeiw';

const payload = {
  id: 1234,
  name: 'John Doe',
};

// // h -> hour, m -> minute, s -> second
// // d -> day
// // 1d, 30d -> refresh token, 15m -> access token
const token = jwt.sign(payload, secret, { expiresIn: '1d' });

// console.log(token);

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjg0MDYxNjExLCJleHAiOjE2ODQwNjE2MTJ9.9esat9QAPhjkqoQB4rvm4QZeS2s2GuMsgkedSYQisaA';

try {
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
} catch (e) {
  console.log(e);
}

// console.log(payload);

// jwt
// authorization header, local storgage (cookie)
// cross origin
// IoT

// cookie, session

// id, role
