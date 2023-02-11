import React from "react";
import { QUESTION_STATUS } from "../const";

const Questions = ({ data, onClick, activeIndex }) => {
  const renderList = () => {
    return data?.map((item, index) => {
      return (
        <div
          key={`question${index}`}
          className=""
          onClick={() => onClick(index)}
          style={{
            width: "55px",
            height: "30px",
            border: "1px solid wheat",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignText: "center",
            backgroundColor:
              activeIndex === index
                ? "blue"
                : item?.isPreview
                ? "purple"
                : item?.isDumped
                ? "red"
                : item?.status === QUESTION_STATUS.ATTEMPTED
                ? "green"
                : "white",
          }}
        >
          <h3>{index + 1}</h3>
        </div>
      );
    });
  };

  return (
    <div
      className=""
      style={{
        backgroundColor: "#AAE3E2",
        width: "20rem",
        height: "250px",
        borderRadius: "10px",
        marginTop: "0.3em",
        marginBottom: "0.3em",
        border: "1px solid grey",
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "#0081B4",
          borderRadius: "5px",
        }}
      >
        <h3>Question Pallet</h3>
      </div>

      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {renderList()}
      </div>
    </div>
  );
};
export default Questions;
