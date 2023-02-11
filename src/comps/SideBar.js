import React from "react";

import SideLowerButton from "./SideLowerButtons";
import Questions from "./Questions";
import UserDetail from "./UserDetail";
import { userDetailData } from "../const";

const SideBar = ({ data, activeIndex }) => {
  return (
    <div style={{}}>
      <UserDetail data={userDetailData} />
      <Questions data={data} activeIndex={activeIndex} />
      <SideLowerButton />
    </div>
  );
};
export default SideBar;
