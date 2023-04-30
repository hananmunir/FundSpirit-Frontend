import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Header from "../Components/Accounts/Header";
import UserSectionHeader from "../Components/Accounts/UserSections/UserSectionHeader";

export default function account() {
  const state = useSelector((state) => state.user);
  const [npo, setNpo] = useState(state.npo);
  const router = useRouter();
  useEffect(() => {
    console.log(npo);
    if (!npo.loggedIn) router.push("/");
  }, [npo]);
  return (
    <div>
      <Header />
      <UserSectionHeader />
    </div>
  );
}
