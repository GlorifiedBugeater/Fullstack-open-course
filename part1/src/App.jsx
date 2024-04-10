// let total_count = 0

// const Header = (props) => {
//   return (
//     <div>
//       <p>
//         {props.name} course:
//       </p>
//     </div>
//   )
// }

// const Part = (props) => {
//   return(
//     <p>
//       {props.name}: {props.exercises}
//     </p>

//   )   
// }

// const Content = (props) => {
//   return(
//     <div>
//         <Part name = 'Fundamentals of React' exercises = {10}/>
//         <Part name = 'Using props to pass data' exercises = {7}/>
//         <Part name = 'State of a component' exercises = {14}/>
//     </div>
    
//   )

  
// }  
// const Total = (props) => {
//   return(
//   <div>
//     <p>
//       Total Number of exercises: {31}
//     </p>
//   </div>)
// }
 

  


// const App = () => {
//   // const-definitions
  
//   return (
//     <div>
    
//       <Header name='Half Stack application development' />
//       <Content />
   

//       <Total />
//     </div>
//   )
// }


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <p>
      {course.name}
     </p> 

     <p>
      {course.parts[0].name}: {course.parts[0].exercises}
     </p>
     <p>
      {course.parts[1].name}: {course.parts[1].exercises}
     </p>
     <p>
      {course.parts[2].name}: {course.parts[2].exercises}
     </p>
     <p>
      Total Number of exercises: {31}
    </p>
    </div>
  )
}

  



export default App

//time to make= ~10 minutes