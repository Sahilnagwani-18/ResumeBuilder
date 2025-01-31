// import React from "react";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";
// import { UserButton, useUser } from "@clerk/clerk-react";

// function Header() {
//   const { user, isSignedIn } = useUser();
//   return (
//     <div className="p-3 px-5 flex justify-between shadow-md">
//       <img src="/logo.svg" width={55} height={75} />
//       {isSignedIn ? (
//         <div className="flex gap-2 items-">
//         <Link to={'/dashboard'}>
//           <Button variant="outline">DashBoard</Button>
//           </Link>
//           <UserButton />
//         </div>
//       ) : (
//         <Link to={"/auth/sign-in"}>
//           <Button>Get Started</Button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default Header;


import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-4 px-6 flex justify-between items-center bg-white shadow-lg rounded-lg">
      <img src="/logo.svg" width={55} height={75} alt="Logo" className="w-auto h-auto" />
      
      {isSignedIn ? (
        <div className="flex gap-4 items-center">
          <Link to="/dashboard">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-700 transition duration-200">
              DashBoard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:bg-gradient-to-l transition duration-200">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;

