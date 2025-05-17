import React,{useState} from 'react'

export default function Ejemplo() {
    const [username,setUsername]= useState('');
    const [adress,setAdress]= useState('');
    
    const nameOnchange = (e)=>{
        setUsername(e.target.value)
    }

     console.log(username,'USERNAME')
  return (
    <div>
      <h1>Hola esto en un ejemplo</h1>

      <form action="#">
        <label htmlFor="username">Username</label>
        <input type="text" onChange={(e)=>{nameOnchange(e)}}/>
      </form>
    </div>
  )
}


// export default function Ejemplo() {

//EJEMPLO DE CONTADOR
//     const [count, setCount] = useState(0)
 
//     return (
//         <div>
//             <p>El contador actual es: {count}</p>
            
//             <button onClick={() => setCount(count + 1)}>+ 1</button>
 
//             <button onClick={() => setCount(count - 1)}>- 1</button>
 
//             <button onClick={() => setCount(0)}>Reset</button>
//        </div>
//   )
// }