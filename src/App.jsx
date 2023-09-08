import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {//componenent
  
  return ( //Using Componenet
    <>
     
      <h1>Vite + React</h1>
      <Todo task="learn react " isDone={true} ></Todo>
      <Todo task="Explore more " isDone={false}></Todo>
      <Todo task="Explore more " isDone={true}></Todo>
      <Todo task="Explore more " isDone={false}></Todo>
      {/* <Per></Per>
      <Div></Div>
      <Developer></Developer>
      <Student name='Naeem Hossen' grade='1' score='99'></Student>
      <Student name='Nur Islam' grade='2' score='88'></Student>
      <Student name='Sana Ullah' grade='3' score='77'></Student>
      <Student name='Riya'></Student> */}
     
    
      
    </>
  )
}

function Per(){//This is component
  const age=25;
  const favtColor={
    color:'yellow'
  }
  return (
  <h3 className='heading'>Hello I am Naeem with Age:{age},his favtColor {favtColor.color}</h3>
 
  ) 
}
function Div(){//This is component
  const age=25;
  const favtColor={
    color:'yellow'
  }
  return (
    <div>
      <h3>Hello I am Naeem with Age:{age},his favtColor {favtColor.color}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nesciunt similique doloremque iure incidunt dolorem, mollitia sunt cupiditate! Delectus, aperiam?</p>
    </div>
    
  ) 
}
function Developer(){

  const developerStyle={
    margin:'20px',
    border:'2px solid blue'
  }

  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}

//const {name,grade,score} = {name:'Naeem Hossen', grade:'1', score:'99'}
function Student({name,grade='N/A',score=0}){
  //console.log(props)
  return (//Stucture
    <div>
      <h3>This is Student Information</h3>
      <p>Name : {name}</p>
      <p>Grade : {grade}</p>
      <p>Score : {score}</p>
    </div>
  )
}

export default App
