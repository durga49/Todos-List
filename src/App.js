import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todo } from './MyComponents/Todo';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    /*this will not delete item jus return the deleted ones
    console.log("I m ondelete",todo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    */
    setTodo(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title,desc)=>{
     console.log("adding todo",title,desc);
     let sno;
     if(todos.length===0){
       sno=0;

     }
     else{
       sno=todos[todos.length-1].sno+1;
     }
     const myTodo={
      sno:sno,
      title:title,
      desc:desc
     }
     setTodo([...todos,myTodo]);
     console.log(myTodo);
  }
  const [todos,setTodo]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  return (
    <>
    <Router>
    <Header title="TODO" searchBar={false}/>
      <Switch>
          <Route exact path="/" render = {()=>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todo todos={todos} onDelete={onDelete}/>
              </>)
            }}>
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>

  );
}

export default App;
