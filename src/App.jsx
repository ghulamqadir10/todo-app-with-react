// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import `bootstrap/dist/css/bootstrap.min.css`
// import {react} from "react"
// import { useRef, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   const [todo, setTodo] = useState([]);  //useState is used to manage state in React components, not just to update values in the browser.
//   let todoVal = useRef(); //use to get value ;
//   function addtodo(e) {
//     e.preventDefault();
//     if (!todoVal.current.value || todoVal.current.value === "") {
//       return alert("please Add todo");
//     } else {
//       todo.push(todoVal.current.value);
//       setTodo([...todo]);
//       todoVal.current.value=""

//       console.log(todo);
//     }
//   }
//   const deleteTodo = (index) => {
//     todo.splice(index, 1);
//     setTodo([...todo]);
//     console.log(todo);
//   };
//   const editTodo = (index) => {
//     let editValue = prompt("Enter you want to replace");
//     if (editValue) {
//       todo[index] = editValue;
//       setTodo([...todo]);
//     }
//   };
//   return (

//       <div id="container">
//         <h1>
//           <i>
//             <strong>Todo App</strong>
//           </i>
//         </h1>
//         <form >
//           <div className="input-group mb-3">
//             <input
//             ref={todoVal}
//               type="text"
//               className="form-control"
//               placeholder="Add todo"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//             <div className="input-group-append">
//               <button  onClick={addtodo} type="submit" className="btn btn-outline-primary">
//                 <i>Add todo</i>
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="input-group">

//             <ul>
//               {todo.map((value,index) => {
//                 return <>
//                <li key={value.id}>{value}

//               <button
//                 onClick={()=>editTodo(index)}
//                 className="btn btn-outline-primary"
//                 type="button"
//                 >
//                 Edit
//               </button>
//               <button
//                 onClick={()=>deleteTodo(index)}
//                 className="btn btn-outline-primary"
//                 type="button"
//                 >
//                 Delete
//               </button>
//                 </li>
//                 </>
//               })}
//             </ul>
//         </div>
//       </div>

//     // spare for use
//   );
// }

// export default App;

// 2nd time making todo app for practicing
// issue in getting value

import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let [todo, setTodo] = useState([]); //declare variable
  let todoValue = useRef(); //for getting current value;

  function addTodo(e) {
    e.preventDefault();
    if (!todoValue.current.value || todoValue.current.value==="") {
      alert("please input an todo");
    } else {
      todo.push(todoValue.current.value);
      setTodo([...todo]);
      todoValue.current.value=""
      // console.log(todo);
    }
  }
  const deleteTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
    // console.log();
  };
  const editTodo = (index) => {
    let editValue = prompt("please input an edit value");
    if (editValue) {
      todo[index] = editValue;
      setTodo([...todo]);
    }
  };
  return (
    <div id="container">
      <h1>
        <i>
          <strong>Todo App</strong>
        </i>
      </h1>
      <form>
        <div className="input-group mb-3">
          <input
            ref={todoValue}
            type="text"
            className="form-control"
            placeholder="Add todo"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              onClick={addTodo}
              type="submit"
              className="btn btn-outline-primary"
            >
              <i>Add todo</i>
            </button>
          </div>
        </div>
      </form>
      {/* map function */}
      <div id="list-container" className="">

      <ul>
        {todo.map((value, index) => {
          return (
            <>
              <div  key={index}>
                <li><p>{value}</p></li>
              <div>

                <button className="btn btn-outline-primary input-group-append" onClick={()=>{
                  editTodo(index)
                }}><i>Edit</i></button>
                <button  className="btn btn-outline-primary" onClick={()=>{
                  deleteTodo()
                }}><i>Delete</i></button>
                </div>
              </div>
            </>
          );
        })}
      </ul>
        </div>
    </div>
  );
}
export default App;
