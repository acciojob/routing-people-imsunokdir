import React from "react";
import { Link } from "react-router-dom";
// 1
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    website: "www.johndoe.com",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Bret",
    email: "janesmith@example.com",
    phone: "234-567-8901",
    website: "www.janesmith.com",
  },
  {
    id: 3,
    name: "Clemintine Bauch",
    username: "alicej",
    email: "alicej@example.com",
    phone: "345-678-9012",
    website: "www.alicejohnson.com",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "bobbrown",
    email: "bobbrown@example.com",
    phone: "456-789-0123",
    website: "www.bobbrown.com",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "charlielee",
    email: "charlielee@example.com",
    phone: "567-890-1234",
    website: "www.charlielee.com",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "dianaking",
    email: "dianaking@example.com",
    phone: "678-901-2345",
    website: "www.dianaking.com",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "ethanwalker",
    email: "ethanwalker@example.com",
    phone: "789-012-3456",
    website: "www.ethanwalker.com",
  },
  {
    id: 8,
    name: "Nicholas Runolfs",
    username: "fionam",
    email: "fionam@example.com",
    phone: "890-123-4567",
    website: "www.fionamartinez.com",
  },
  {
    id: 9,
    name: "Gienna Reichert",
    username: "georgeh",
    email: "georgeh@example.com",
    phone: "901-234-5678",
    website: "www.georgeharris.com",
  },
  {
    id: 10,
    name: "Clementina Dubuque",
    username: "georgeh",
    email: "georgeh@example.com",
    phone: "901-234-5678",
    website: "www.georgeharris.com",
  },
];
const Userlists = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userlists;
