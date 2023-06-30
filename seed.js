const db = require("./db");
const {campuses, students} = require("./db/models");

const CampusesSeed = [
    {
        name: 'Campus 1',
        imageUrl: 'https://example.com/image1.jpg',
        address: '123 Main St, City 1',
        description: 'Description for Campus 1'
      },
      {
        name: 'Campus 2',
        imageUrl: 'https://example.com/image2.jpg',
        address: '456 Elm St, City 2',
        description: 'Description for Campus 2'
      },
      {
        name: 'Campus 3',
        imageUrl: 'https://example.com/image3.jpg',
        address: '789 Oak St, City 3',
        description: 'Description for Campus 3'
      },
      {
        name: 'Campus 4',
        imageUrl: 'https://example.com/image4.jpg',
        address: '987 Pine St, City 4',
        description: 'Description for Campus 4'
      }
];

const StudentsSeed = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      imageUrl: 'https://example.com/image1.jpg',
      gpa: 3.5
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      imageUrl: 'https://example.com/image2.jpg',
      gpa: 3.9
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
      imageUrl: 'https://example.com/image3.jpg',
      gpa: 3.2
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bobbrown@example.com',
      imageUrl: 'https://example.com/image4.jpg',
      gpa: 3.7
    }
];

const seed = async () => {
    await campuses.bulkCreate(CampusesSeed);
    await students.bulkCreate(StudentsSeed);
}
seed().then(() => process.exit());