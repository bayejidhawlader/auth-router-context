import React, { useContext } from "react";
import { AuthContext } from "../../context/UserConext";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h2>Home {user?.email}</h2>
    </div>
  );
};

export default Home;
