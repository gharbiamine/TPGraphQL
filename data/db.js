export const db = {
  students: [
    {
      id: 1,
      name: "Fatma Laribi",
      age: 22,
      gender: "FEMALE",
      classroom: 1,
    },
    {
      id: 2,
      name: "Ahmed Mahfoudhi",
      age: 22,
      gender: "MALE",
      classroom: 2,
    },
    {
      id: 3,
      name: "Nadine Boukadida",
      age: 22,
      gender: "FEMALE",
      classroom: 3,
    },
    {
      id: 4,
      name: "Mohamed Aziz Khayati",
      age: 22,
      gender: "MALE",
      classroom: 1,
    },
  ],
  classroom: [
    {
      id: 1,
      designation: "GL3",
    },
    {
      id: 2,
      designation: "GL2",
    },
    {
      id: 3,
      designation: "GL4",
    },
  ],
  todos: [
    {
      id: "1",
      name: "name1",
      content: "content1",
      status: "DONE",
      user: "1",
    },
    {
      id: "2",
      name: "name2",
      content: "content2",
      status: "WAITING",
      user: "1",
    },
    {
      id: "3",
      name: "name3",
      content: "content3",
      status: "IN_PROGRESS",
      user: "1",
    },
    {
      id: "4",
      name: "name4",
      content: "content4",
      status: "CANCELED",
      user: "2",
    },
  ],
  users: [
    {
      id: "1",
      name: "Fatma Laribi",
      email: "a.a@g.c",
      todos: ["1", "2", "3"],
    },
    {
      id: "2",
      name: "Ahmed Mahfoudhi",
      email: "b.b@g.c",
      todos: ["4"],
    },
  ],
};
