// require('dotenv').config();
const supertest = require('supertest');
const app = require('../../app');
const StudentModel = require('../../models/Student');
const mongoose = require('mongoose');
const { generateToken } = require('../../utils/jwt');

const request = supertest(app);
// fetch, axios

const token = generateToken({ username: 'test' });

// lifecycle hook
beforeAll(async () => {
  await mongoose.connect(global.__MONGO_URI__);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('/v1/students', () => {
  beforeEach(async () => {
    await StudentModel.deleteMany({});
  });

  describe('POST', () => {
    const validStudent = {
      firstName: 'john',
      lastName: 'doe',
      email: 'email@email.com',
    };
    it('should save the student if request is valid', async () => {
      // send POST /v1/students + auth header + token + student payload
      const res = await request
        .post('/v1/students')
        .set('Authorization', `Bearer ${token}`)
        .send(validStudent);

      // compare
      expect(res.statusCode).toBe(201);
      const student = await StudentModel.findOne(validStudent).exec();
      expect(student).not.toBeNull();
    });

    it.each`
      property       | value
      ${'firstName'} | ${'a'}
      ${'email'}     | ${'invalidEmail'}
      ${'email'}     | ${'invalidEmail@'}
      ${'email'}     | ${'invalidEmail@@'}
      ${'email'}     | ${'invalidEmail@a.c'}
      ${'email'}     | ${'invalidEmail@a.c'}
      ${'lastName'}  | ${undefined}
    `(
      'should return 400 if $property is $value',
      async ({ property, value }) => {
        const invalidStudent = {
          ...validStudent,
          [property]: value,
        };
        // {
        //  firstName: 'a',
        //  lastName: 'doe',
        //  email: 'email@email.com',
        // };
        // send POST /v1/students + auth header + token + student payload
        const res = await request
          .post('/v1/students')
          .set('Authorization', `Bearer ${token}`)
          .send(invalidStudent);

        // compare
        expect(res.statusCode).toBe(400);
        const student = await StudentModel.findOne(invalidStudent).exec();
        expect(student).toBeNull();
      }
    );
  });

  // describe('GET', () => {

  // })
});
