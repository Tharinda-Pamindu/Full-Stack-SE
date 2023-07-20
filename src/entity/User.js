import { useEffect, useState } from "react";
import { getAllUsers } from "../service/UserService";

const User = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const res = getAllUsers();
    setUsers(res);
  });

  return (
    <div>
      <h1>This is User Page</h1>
    </div>
  );
};
export default User;
