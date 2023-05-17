import React from "react";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DummyCampaigns } from "../../constants/DummyData/Campaigns";
import useCampaignStore from "../../Redux/Campaigns";
import { fetchCampaign } from "../../Api/Campaigns";
import Loader from "../../Components/Loader/Loader";
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
  const [state, setState] = useState();

  useEffect(() => {
    if (id) {
      fetchCampaign(id)
        .then((res) => setCampaign(res.data))
        .catch((err) => console.log(err));
    }

    // const getCampaigns = async () => {
    //   const address = await myContract.methods.getAllCampaigns().call();

    //   //this code can be improved, contains technical debt
    //   if (!state) setState(new web3.eth.Contract(Campain.abi, address[0]));

    //   if (state)
    //     console.log(
    //       //convert to ether
    //       web3.utils.fromWei(
    //         (await state?.methods?.getBalance().call()) || 0,
    //         "ether"
    //       )
    //     );
    // };
    // getCampaigns();
  }, [id]);

  console.log(campaign);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <DyanmicHeader campaign={campaign} />
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ backgroundColor: "#EDECEC" }}
        >
          <div className='p-2 d-flex border w-50 flex-row justify-content-around align-items-center'>
            <span className='pointer'>Campaign Overview</span>
            <span className='pointer'>Enrolled NPO's</span>
            <span className='pointer'>Supporters</span>
          </div>
        </div>
        <DynamicOverview campaign={campaign} />
        <DynamicSupporters campaign={campaign} />
      </Suspense>
    </div>
  );
}
