import React, { useState,} from "react";

import SideBar from "../comps/SideBar";
import QuestionDetail from "../comps/QuestionDetail";
import { questionsData, QUESTION_STATUS } from "../const";

const Home = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selOption, setSelOption] = useState(null);
  const [questionDataArr, setQuestionDataArr] = useState(questionsData);

  const button = {
    backgroundColor: "#0081B4",
    color: "white",
    paddingTop: "0.2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingBottom: "0.5em",
    alignText: "center",
    margin: "0.1em",
    marginTop: "0.4em",
    borderColor: "transparent",
  };
  return (
    <div>
      <div>
        <div>
          <div
            style={{
              backgroundColor: "#0081B4",
              textAlign: "center",
              color: "white",
              height: "3rem",
              paddingTop: "0.7em",
            }}
          >
            <h3>DEMO ONLINE TEST</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                flex: "4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    margin: "0.3em",
                  }}
                >
                  <button style={button}>All Section</button>
                  <button style={button}>PHYSICS</button>
                  <button style={button}>CHEMISTRY</button>
                  <button style={button}>MATHS</button>
                </div>
                <div
                  style={{
                    border: "1px solid #F0EEED",
                    bottom: "0px",
                  }}
                >
                  {questionDataArr?.map((item, index) => (
                    <QuestionDetail
                      keyValue={`question_detail${index}`}
                      description={item?.description}
                      options={item?.options}
                      question={item?.question}
                      questionNumber={item?.questionNumber}
                      index={index}
                      activeIndex={activeQuestion}
                      selOption={selOption}
                      onOptionPress={(ind) => {
                        if (selOption === ind) {
                          setSelOption(null);
                        } else {
                          setSelOption(ind);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              <div
                style={{
                  margin: "0.3em",
                }}
              >
                <button style={button}>CLEAR RESPONSE</button>
                <button
                  style={button}
                  onClick={() => {
                    const modifiedData = {
                      ...questionDataArr[activeQuestion],
                      isPreview: !questionDataArr[activeQuestion]?.isPreview
                    };
                    const tempData = [...questionDataArr];
                    tempData.splice(activeQuestion, 1, modifiedData);
                    setQuestionDataArr(tempData);
                  }}
                >
                  REVIEW
                </button>
                <button
                  style={button}
                  onClick={() => {
                    if (questionDataArr?.length) {
                      const modifiedData = {
                        ...questionDataArr[activeQuestion],
                        isDumped: !questionDataArr[activeQuestion]?.isDumped
                      };
                      const tempData = [...questionDataArr];
                      tempData.splice(activeQuestion, 1, modifiedData);
                      setQuestionDataArr(tempData);
                    }
                  }}
                >
                  DUMP
                </button>
                <button
                  onClick={() => {
                    if (activeQuestion > 0) {
                      setActiveQuestion(activeQuestion - 1);
                    }
                  }}
                  style={button}
                >
                  PREVIOUS
                </button>
                <button
                  onClick={() => {
                    if (activeQuestion < questionsData.length - 1) {
                      setActiveQuestion(activeQuestion + 1);
                    }

                    if (questionDataArr?.length) {
                      const modifiedData = {
                        ...questionDataArr[activeQuestion],
                        status: QUESTION_STATUS.ATTEMPTED,
                      };
                      const tempData = questionDataArr;
                      tempData.splice(activeQuestion, 1, modifiedData);
                      setQuestionDataArr(tempData);
                    }
                  }}
                  style={button}
                >
                  NEXT
                </button>
              </div>
            </div>
            {questionDataArr?.length ? (
              <div style={{ flex: "1" }}>
                <SideBar data={questionDataArr} activeIndex={activeQuestion} />
              </div>
            ) : null}
          </div>

          <div
            style={{
              backgroundColor: "#0081B4",
              textAlign: "center",
              color: "white",
              height: "3rem",
              paddingTop: "0.7em",
            }}
          >
            <h3>DEMO ONLINE TEST</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
