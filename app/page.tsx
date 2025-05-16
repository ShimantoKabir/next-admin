import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex justify-content-center align-items-center min-h-screen min-w-screen flex-column">
      <h3>
        Welcome to PyAdmin. A user, role, and menu management system, to explore
        please!
      </h3>
      <Link className="font-bold" href="/login">
        Login
      </Link>
    </div>
  );
};

export default Home;
