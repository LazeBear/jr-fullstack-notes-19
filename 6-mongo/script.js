const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');
const dayjs = require('dayjs');

const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'school';
const COLLECTION_NAME = 'students';

/**
 * {
 *   _id: ObjectId
 *   name: String,
 *   dob: Date,
 *   assignmentResults: [number],
 *   finalGpa: number,
 * }
 */

const NUM_OF_STUDENTS = 100 * 10000;

// MongoClient.connect(DB_URL).then((client) => {
//   const db = client.db(DB_NAME);
//   const collection = db.collection(COLLECTION_NAME);
//   let students = [];
//   const updateQueries = []; // [Promise, Promise, Promise]

//   for (let i = 0; i < NUM_OF_STUDENTS; i++) {
//     const student = {
//       name: faker.name.firstName(),
//       dob: faker.date.past(),
//       assignmentResults: Array.from({ length: 10 }).map(() =>
//         faker.datatype.number({ min: 0, max: 100 })
//       ),
//       finalGpa: faker.datatype.number({ min: 0, max: 7 }),
//     };
//     students.push(student);

//     if (students.length === 1000) {
//       updateQueries.push(collection.insertMany(students));
//       students = [];
//     }
//   }

//   Promise.all(updateQueries).then(() => {
//     console.log('done');
//     client.close();
//   });
// });

async function main() {
  try {
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    let students = [];
    const updateQueries = []; // [Promise, Promise, Promise]

    for (let i = 0; i < NUM_OF_STUDENTS; i++) {
      const student = {
        name: faker.name.firstName(),
        dob: faker.date.past(),
        assignmentResults: Array.from({ length: 10 }).map(() =>
          faker.datatype.number({ min: 0, max: 100 })
        ),
        finalGpa: faker.datatype.number({ min: 0, max: 7 }),
      };
      students.push(student);

      if (students.length === 1000) {
        updateQueries.push(collection.insertMany(students));
        students = [];
      }
    }

    await Promise.all(updateQueries);
    console.log('done');
    await client.close();
  } catch (e) {
    console.log(e);
  }
}

main();
