const db = require("./db");
const {campuses, students} = require("./db/models");

const CampusesSeed = [
    {
        name: 'CampusOne',
        imageUrl: 'https://i.ibb.co/zV3jKZT/Brooklyn-College-Library-1200x628.jpg',
        address: '123 Main St, City 1',
        description: 'Description for Campus 1'
      },
      {
        name: 'CampusTwo',
        imageUrl: 'https://i.ibb.co/kyy6R3Q/istockphoto-1323420737-612x612.jpg',
        address: '456 Elm St, City 2',
        description: 'Description for Campus 2'
      },
      {
        name: 'CampusThree',
        imageUrl: 'https://i.ibb.co/LZMdcJZ/photo-1562774053-701939374585.jpg',
        address: '789 Oak St, City 3',
        description: 'Description for Campus 3'
      },
      {
        name: 'CampusFour',
        imageUrl: 'https://i.ibb.co/MpWn8c8/photo-1607237138185-eedd9c632b0b.jpg',
        address: '987 Pine St, City 4',
        description: 'Description for Campus 4'
      }
];

const StudentsSeed = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      imageUrl: 'https://i.ibb.co/QDPq2rB/Unknown-2.jpg',
      gpa: 3.5
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      imageUrl: 'https://i.ibb.co/kGRqs9L/Unknown-3.jpg',
      gpa: 3.9
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
      imageUrl: '"https://i.ibb.co/tzxq3xX/Unknown-4.jpg',
      gpa: 3.2
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bobbrown@example.com',
      imageUrl: 'https://i.ibb.co/pL9m9NF/Unknown.jpg',
      gpa: 3.7
    }
];

const seed = async () => {
    await campuses.bulkCreate(CampusesSeed);
    await students.bulkCreate(StudentsSeed);
}
seed().then(() => process.exit());