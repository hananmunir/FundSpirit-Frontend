import api from "./Index.js";

export const placeOrder = async (npoId, price, quantity) => {
    try {
      const response = await api.post("/estore/placeorder",{ npoId, price, quantity });
      
      console.log('success', response);
        return response;
    } catch (error) {
      console.error('Failed to place order:', error);
      throw error;
    }
  };
  
  