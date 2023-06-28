const authGuard = require('../../middleware/authGuard');
const { validateToken } = require('../../utils/jwt');
jest.mock('../../utils/jwt');
// validateToken = jest.fn();

describe('authentication guard middleware', () => {
  it('should return 401 if authroization header is not defined', () => {
    // setup
    const req = {
      header: jest.fn(),
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    res.status.mockReturnValue(res);
    const next = jest.fn(); // () => {}

    // execute
    authGuard(req, res, next);
    // compare
    // expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'missing authorization header',
    });
  });

  it('should call next function when token is valid', () => {
    // setup
    const token = 'any_token';
    const payload = { id: 'xxxx' };
    const req = {
      header: jest.fn(),
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    req.header.mockReturnValue(`Bearer ${token}`);
    res.status.mockReturnValue(res);
    const next = jest.fn(); // () => {}
    validateToken.mockImplementation((token) => {
      return payload;
    });

    authGuard(req, res, next);

    expect(validateToken).toHaveBeenCalledWith(token);
    expect(req.user).toEqual(payload);
    expect(next).toHaveBeenCalled();
  });
});
