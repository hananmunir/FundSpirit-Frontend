import React, { useEffect } from "react";
import Header from "../../Components/Accounts/Header";
import UserSectionHeader from "../../Components/Accounts/UserSections/UserSectionHeader";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function User() {
  const loggedIn = useSelector((state) => state.user.user.loggedIn);
  const router = useRouter();

  if (!loggedIn) {
    router.push("/");
  }

  return (
    <div>
      {loggedIn && (
        <>
          <Header />
          <UserSectionHeader />
        </>
      )}
    </div>
  );
}
