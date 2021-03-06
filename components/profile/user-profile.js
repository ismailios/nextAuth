import { getSession, session } from "next-auth/client";
import { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <div className={classes.profile}>Loading ... !! </div>;
  // }

  const handleSumbit = async (data) => {

   const response = await fetch("/api/user/change-password",{
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    })

    const result = await response.json()
    console.log(result)

 
  



  }


  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onAddForm={handleSumbit} />
    </section>
  );
}

export default UserProfile;
