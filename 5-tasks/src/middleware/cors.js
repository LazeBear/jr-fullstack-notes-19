module.exports = (req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, content-type, Accept'
  );
  res.setHeader('Access-Control-Allow-Origin', '*'); //wildcard
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
};
