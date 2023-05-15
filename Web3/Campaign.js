import Campaign from "../artifacts/contracts/Campaign.sol/Campaign.json";
import web3 from "./Index";

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
export const fundCampaign = async (address, amount, account) => {
  const campaign = await new web3.eth.Contract(Campaign.abi, address);
  const gasPrice = await web3.eth.getGasPrice();
  const gasLimit = await campaign.methods.fund().estimateGas({ from: account });

  const response = await campaign.methods.fund().send({
    from: account,
    value: web3.utils.toWei(String(amount), "ether"),
    gas: gasLimit,
    gasPrice: gasPrice,
  });

  return response;
};
