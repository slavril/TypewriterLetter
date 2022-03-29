import React, { useState } from "react";
export const StoreContext = React.createContext(null);

export default ({ children }) => {

  const [sharing, setSharing] = useState();
  

  const sharingData = async (data) => {
    setSharing(data)
  }
  
  const store = { sharing, sharingData }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};