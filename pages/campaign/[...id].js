import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DyanmicHeader = dynamic(
  () => import("../../Components/Campaign/Details/Header"),
  {
    suspense: true,
  }
);
const DynamicOverview = dynamic(
  () => import("../../Components/Campaign/Details/Overview"),
  {
    suspense: true,
  }
);
export default function Campaign() {
  return (
    <div>
      <Suspense>
        <DyanmicHeader />
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ backgroundColor: "#EDECEC" }}
        >
          <div className='p-2 d-flex border w-50 flex-row justify-content-around align-items-center'>
            <span className='pointer'>Campaign Overview</span>
            <span className='pointer'>Milestones</span>
            <span className='pointer'>Supporters</span>
          </div>
        </div>
        <DynamicOverview />
      </Suspense>
    </div>
  );
}
