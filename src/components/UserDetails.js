import React from "react";
import { useParams } from "react-router-dom";
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "www.johndoe.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "janesmith@example.com",
    phone: "234-567-8901",
    website: "www.janesmith.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    username: "alicej",
    email: "alicej@example.com",
    phone: "345-678-9012",
    website: "www.alicejohnson.com",
  },
  {
    id: 4,
    name: "Bob Brown",
    username: "bobbrown",
    email: "bobbrown@example.com",
    phone: "456-789-0123",
    website: "www.bobbrown.com",
  },
  {
    id: 5,
    name: "Charlie Lee",
    username: "charlielee",
    email: "charlielee@example.com",
    phone: "567-890-1234",
    website: "www.charlielee.com",
  },
  {
    id: 6,
    name: "Diana King",
    username: "dianaking",
    email: "dianaking@example.com",
    phone: "678-901-2345",
    website: "www.dianaking.com",
  },
  {
    id: 7,
    name: "Ethan Walker",
    username: "ethanwalker",
    email: "ethanwalker@example.com",
    phone: "789-012-3456",
    website: "www.ethanwalker.com",
  },
  {
    id: 8,
    name: "Fiona Martinez",
    username: "fionam",
    email: "fionam@example.com",
    phone: "890-123-4567",
    website: "www.fionamartinez.com",
  },
  {
    id: 9,
    name: "George Harris",
    username: "georgeh",
    email: "georgeh@example.com",
    phone: "901-234-5678",
    website: "www.georgeharris.com",
  },
];

const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id)); // Find the user by ID

  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      Loading...
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetails;
