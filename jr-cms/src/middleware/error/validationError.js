module.exports = (error, req, res, next) => {
  // check if this error is a validation error
  if (error.name === 'ValidationError') {
    res.status(400).json({ error: error.message });
    return;
  }
  next(error);
};

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     // this.name = 'ValidationError';
//   }
// }

// if (error instanceof ValidationError) {
//   res.status(400).json({ error: error.message });
//   return;
// }
