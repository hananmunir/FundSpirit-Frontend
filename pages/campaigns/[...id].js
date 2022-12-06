import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicCampaign = dynamic(
  () => import("../../Components/Campaign/Campaign"),
  {
    suspense: true,
  }
);
export default function Campaign() {
  return (
    <div>
      <Suspense>
        <DynamicCampaign />
      </Suspense>
    </div>
  );
}
