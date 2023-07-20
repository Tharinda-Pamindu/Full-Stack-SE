import { useEffect, useState } from "react";
import { getAllUsers } from "../service/UserService";

const User = () => {
  const [users, setUsers] = useState(null);

  const userRequest = async () => {
    const res = await getAllUsers();
    await setUsers(res);
  };

  useEffect(() => {
    userRequest();
  }, []);

  return (
    <div>
      <h1>This is User Page</h1>
      {users&&users.map((user)=>{
        return(<h5>{user.username}</h5>);
        
      })}
    </div>
  );
};
export default User;
