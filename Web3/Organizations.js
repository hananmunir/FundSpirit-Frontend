//0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
import Organization from "../artifacts/contracts/Organization.sol/Organization.json";
import web3 from "./Index";

//get organization details
export const getOrganization = async (address) => {
  const organization = await new web3.eth.Contract(Organization.abi, address);
  const organizationDetails = await organization.methods.getDetails().call();
  return { ...organizationDetails, address: address };
};

export const getBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);

  //convert from 
  return balance;
};
