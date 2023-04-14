import Campaign from "../artifacts/contracts/Campaign.sol/Campaign.json";
import web3 from "./index";

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

//fund campaign
export const fundCampaign = async (address, amount) => {
  const campaign = await new web3.eth.Contract(Campaign.abi, address);
  const accounts = await web3.eth.getAccounts();

  console.log("accounts", accounts, "amount", amount);
  const response = await campaign.methods.fund().send({
    from: accounts[0],
    value: web3.utils.toWei(String(amount), "ether"),
  });

  return response;
};
