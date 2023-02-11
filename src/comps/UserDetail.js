import React from "react";

const UserDetail = ({ data }) => {
  return (
    <div
      style={{borderRadius:'10px' ,display: "flex", flexDirection: "row", backgroundColor: "#AAE3E2",width:"20rem",justifyContent:"" }}
    >
      <div style={{margin:'0.3em'}}>
        <img src={data?.image} alt="" height="75" style={{border: "1px solid #F0EEED"}} />
      </div>
      <div style={{paddingTop:'0.2em'}}>
        <p>
          Time Left : <br></br>
          <b>{data?.timeLeft}</b>
          <p><b> {data?.name}</b></p>
        </p>
      </div>
    </div>
  );
};
export default UserDetail;
