import React from "react";

const SideLowerButton = () => {
  const button = {
    width: "9.1rem",
    borderColor: "transparent",
    color:'black',
    height:'1.5em',
    paddingTop:'0.2em',
    alignText:'center',
    
  };
  const buttonD = {
    width: "8rem",
    paddingTop:'0.4em',
    height:'2em',
    backgroundColor:'#0081B4',
    color:'white',
    margin: "1px",
  };
  return (
    <div
      style={{
        backgroundColor: "#AAE3E2",
        width: "20rem",
        height: "190px",
        borderRadius: "10px",
        border: "1px solid grey",
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "#0081B4",
          borderRadius: "5px",
          paddingLeft: "1rem",
        }}
      >
        <h4>Legend (Click to View)</h4>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:'center'
        }}
      >
        <div style={{ border:'1px solid white',backgroundColor:'green'}}>
          <button style={button} className="ui green  button">
            Answer
          </button>
        </div>
        <div style={{ border:'1px solid white'}}>
          <button style={button} className="ui red button">
            No Answer
          </button>
        </div>
        <div style={{ border:'1px solid white'}} >
          <button style={button} className="ui primary button">
            Review + Ans
          </button>
        </div>
        <div style={{ border:'1px solid white'}}>
          <button style={button} className="ui yellow button">
            Review - Ans
          </button>
        </div>
        <div style={{ border:'1px solid white'}}>
          <button style={button} className="ui grey button">
            Dump
          </button>
        </div>
        <div style={{ border:'1px solid white'}}>
          <button style={button} className="ui button">
            No visit
          </button>
        </div>
      </div>
      <div
        style={{
          color: "black",
          backgroundColor: "#0081B4",
            borderTopRadius: "5px",
          paddingLeft: "1rem",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <h4 style={{ alignText: "center" }}>10 All Question</h4>
      </div>
      <div
        style={{
          height: "1px",
          backgroundColor: "white",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:'space-evenly'
        }}
      >
        <div  >
          <button style={buttonD} className="ui button">
            Profile
          </button>
        </div>
        <div>
          <button style={buttonD} className="ui button">
            Instr
          </button>
        </div>
        <div>
          <button style={buttonD} className="ui button">
            Question
          </button>
        </div>
        <div>
          <button style={buttonD} className="ui button">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideLowerButton;
