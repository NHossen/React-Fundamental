export default function Myinfo(){
    const styles={
        color:'green',
        border:'2px solid red',
        padding:'20px'
    }
    const h1Styles={
        color:"tomato",
        marginTop:'100px'
    }
    const names=['riyad','naeem','nur','sakib','sana'];
    
         names.map(name =>{
        console.log(name)
    })
    return(

         <div style={styles}>
   {names.map((name, index) => (
        <div key={index}>
          <h2>ID: {index}</h2>
          <h1>This is: {name}</h1>
          <p style={h1Styles}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            inventore in? Deleniti explicabo quod pariatur dolorem ipsam
            repudiandae aliquam harum.
          </p>
          <button>Explore More</button>
        </div>
      ))}
         </div>
    )
}