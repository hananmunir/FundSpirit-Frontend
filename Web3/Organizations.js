//0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
import OrganizationFactory from "../artifacts/contracts/OrganizationFactory.sol/OrganizationFactory.json";
import Organization from "../artifacts/contracts/Organization.sol/Organization.json";
import web3 from "./index";

const organizationFactory = new web3.eth.Contract(
  OrganizationFactory.abi,
  "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"
);

//get all organizations
export const getOrganizations = async () => {
  const addresses = await organizationFactory.methods
    .getAllOrganizations()
    .call();
  return await addresses;
};

//get organization details
export const getOrganization = async (address) => {
  const organization = await new web3.eth.Contract(Organization.abi, address);
  const organizationDetails = await organization.methods.getDetails().call();
  return { ...organizationDetails, address: address };
};
