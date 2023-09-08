// export default function Todo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }
// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return(
//         <li>Finished: {task}</li>
//     )
       
//     }else{
//         return (
//             <li>Work in Progress: {task}</li>
//         )
//     }
    
// }

// export default function Todo({task,isDone}){
//     return(
//         <li> {isDone ? 'Finised': 'Work in Progress'} : {task}</li>
//     )
// }

export default function Todo({task,isDone}){
    return(
        <li>{task}  {isDone && ':Done'}</li>
    )
}