import React from "react";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DummyCampaigns } from "../../constants/DummyData/Campaigns";
import CampaignFactory from "../../artifacts/contracts/CampaignFactory.sol/CampaignFactory.json";
import Campain from "../../artifacts/contracts/Campaign.sol/Campaign.json";
import Web3 from "web3";
import useCampaignStore from "../../Redux/Campaigns";
const web3 = new Web3("http://localhost:8545");
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const myContract = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

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
    setCampaign(useCampaignStore.getState().find((c) => c._id === id[0]));
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
  }, [state]);

  console.log(campaign);

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
