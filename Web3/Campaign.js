import CampaignFactory from "../artifacts/contracts/CampaignFactory.sol/CampaignFactory.json";
import Campaign from "../artifacts/contracts/Campaign.sol/Campaign.json";
import web3 from "./index";
const campaignFactory = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

//get all campaigns
export const getCampaigns = async () => {
  const addresses = await campaignFactory.methods.getAllCampaigns().call();
  return await addresses;
};

//get campaign details
export const getCampaign = async (address) => {
  const campaign = await new web3.eth.Contract(Campaign.abi, address);
  const campaignDetails = await campaign.methods.getDetails().call();
  return campaignDetails;
};

export const getBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return balance;
};
