import axios from "axios";

const EthRate = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  return response.data.ethereum.usd;
};

export default EthRate;
