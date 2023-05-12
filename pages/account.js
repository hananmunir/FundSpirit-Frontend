import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Header from "../Components/Accounts/Header";
import UserSectionHeader from "../Components/Accounts/UserSections/UserSectionHeader";

export default function account() {
  const loggedIn = useSelector((state) => state.user.npo.loggedIn);

  const router = useRouter();

  if (!loggedIn) {
    if (window) window.location.href = "/";
    else {
      router.push("/");
    }
  }

  return (
    <div>
      {loggedIn && (
        <>
          {" "}
          <Header />
          <UserSectionHeader />
        </>
      )}
    </div>
  );
}
