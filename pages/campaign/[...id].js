import React from "react";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DummyCampaigns } from "../../constants/DummyData/Campaigns";

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
const DynamicSupporters = dynamic(
  () => import("../../Components/Campaign/Details/Supporters"),
  {
    suspense: true,
  }
);
export default function Campaign() {
  const [campaign, setCampaign] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setCampaign(
      DummyCampaigns?.filter((campaign) => campaign.id === parseInt(id))[0]
    );
  });

  return (
    <div>
      <Suspense>
        <DyanmicHeader campaign={campaign} />
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
        <DynamicOverview campaign={campaign} />
        <DynamicSupporters campaign={campaign} />
      </Suspense>
    </div>
  );
}
