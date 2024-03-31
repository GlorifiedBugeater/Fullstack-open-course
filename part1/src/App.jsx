let total_count = 0

const Header = (props) => {
  return (
    <div>
      <p>
        {props.name} course:
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.name}: {props.exercises}
    </p>

  )   
}

const Content = (props) => {
  return(
    <div>
        <Part name = 'Fundamentals of React' exercises = {10}/>
        <Part name = 'Using props to pass data' exercises = {7}/>
        <Part name = 'State of a component' exercises = {14}/>
    </div>
    
  )

  
}  
const Total = (props) => {
  return(
  <div>
    <p>
      Total Number of exercises: {31}
    </p>
  </div>)
}
 

  


const App = () => {
  // const-definitions
  
  return (
    <div>
    
      <Header name='Half Stack application development' />
      <Content />
   

      <Total />
    </div>
  )
}
export default App

//time to make= ~30 minutes