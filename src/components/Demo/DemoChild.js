import { useReducer, useState } from "react";
import UseCallBackDemo from "./UseCallBackDemo";

const initialState = [];

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_NUM": {
      let newNum = (Math.random() * 1000).toFixed(0);
     return [...state, newNum];
    }
    case "DELETE_NUM": {
      let index = action.payload;
      let newData = [...state];
      newData.splice(index, 1);
      return newData;
    }
    default: {
      console.log("Invalid action type");
      return state;
    }
  }
}


export default function DemoChild(props) {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, initialState);

  function addNum() {
    dispatch({type: "ADD_NUM"})
  }

  function handleDelete(index) {
    dispatch({type: "DELETE_NUM", payload: index})
  }


  return (
    <div className="m-4 border">
      <UseCallBackDemo />

      {/* <h1>Child Component ({data.length})</h1>
      <button className="btn btn-success" onClick={addNum}>Add num</button>

      {
        data.map((num, index) => {
          return <div className="p-2 border" key={index}>{num}
            <button className="ms-2 btn btn-outline-danger" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        })
      } */}
    </div>
  )
}
