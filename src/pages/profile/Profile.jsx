import React, { useContext } from "react";
import { MyContext } from "../../context/AuthContext";

const Profile = () => {
  const { userInfo } = useContext(MyContext);
  return <div>{userInfo.user.email}</div>;
};

export default Profile;
