import React from "react";

const QuestionDetail = ({
  keyValue,
  description,
  options,
  question,
  questionNumber,
  activeIndex,
  index,
  selOption,
  onOptionPress,
}) => {
  if (index !== activeIndex) {
    return null;
  }

  return (
    <div
      key={keyValue}
      style={{ height: "100%", border: " 1px solid #F0EEED", bottom: "0px" }}
    >
      <div style={{ width: "" }}>
        <div style={{ backgroundColor: "#0081B4", height: "2rem" , color:'white'}}>
          <h4>{`Qes No.  ${questionNumber}`}</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: "1" }}>
            <div style={{ border: " 1px solid #F0EEED", paddingLeft: "1em" }}>
              <h4>Description</h4>
            </div>
            <div
              style={{
                paddingRight: "2em",
                paddingLeft: "1em",
                fontSize: "1.1em",
                paddingTop: "0.7em",
              }}
            >
              {description}
            </div>
          </div>
          <div style={{ flex: "1", border: "1px solid #F0EEED" }}>
            <div style={{ border: " 1px solid #F0EEED", paddingLeft: "1em" }}>
              <h4>Question</h4>
            </div>
            <div
              style={{
                paddingRight: "2em",
                paddingLeft: "1em",
                fontSize: "1.1em",
                paddingTop: "0.7em",
              }}
            >
              {question}
            </div>
            <br></br>
            <form style={{}}>
              {options?.map((item, ind) => (
                <div
                  key={`option${ind}`}
                  style={{
                    paddingTop: "1.5em",
                    paddingBottom: "1.5em",
                    border: "1px solid #F0EEED",
                    paddingLeft: "1em",
                  }}
                >
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value={item}
                    checked={selOption === ind}
                    style={{ marginRight: 4 }}
                    onChange={() => onOptionPress(ind)}
                  />
                  <label style={{ alignSelf: "center" }} htmlFor="vehicle1">
                    {item}
                  </label>
                  <br></br>
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionDetail;
