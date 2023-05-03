import NavbarComponent from "@/components/Navbar";
import { useSession } from "next-auth/react";
import React from "react";

function Profile() {
    const {session,status}=useSession()
  return (
    <>
    {/* <NavbarComponent/> */}
    {
        (status==='authenticated')?<div className="text-6xl flex justify-center my-52">This is profile page</div>:<div className="text-6xl flex justify-center my-52">User not authenticated <br/>Login to view this page</div>
    }
    </>
  );
}

export default Profile;
