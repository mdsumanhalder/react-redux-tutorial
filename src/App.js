import React from "react";
import IceCreamContainer from "./redux/components/IceCreamContainer";
// import CakeContainer from "./redux/components/CakeContainer";
import HooksCakeContainer from "./redux/components/HooksCakeContainer";
import NewCakeContainer from "./redux/components/NewCakeContainer";
import ItemContainer from "./redux/components/ItemContainer";
import UserContainer from "./redux/components/UserContainer";
const App = () => {
  return (
    <div>
      {/* <CakeContainer /> */}
      <UserContainer />
      <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
    </div>
  );
};

export default App;
