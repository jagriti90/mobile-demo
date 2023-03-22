import { useEffect, useState } from "react"

const Stories = () => {

    // let API = 'http://hn.algolia.com/api/v1/search?query=html';
//     const [data, setData] = useState([])
//     useEffect(() => {
//         const fetchData = async() => {
//     const response = await fetch('http://hn.algolia.com/api/v1/search?query=html');
//     const data = await response.jsn();
//     setData(data)
//     console.log(data);
// }
// fetchData()
// } , [] )
// get meethod- show krwana ho 
// post- data base ke ke under store krna ho 
// Put- update krna ho to 
// delete- deletekrna ho toh 
const [data, setData] = useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/users').then((result)=>{
result.json().then(( resp)=>{
    // console.warm('result',resp)
    setData(resp)
})
})
},[])
console.warn(data)
return (
    <>
        <div >
         <h1>Get api method</h1>
         <table border='1'>
            <tr>
                <td>id</td>
                <td>email</td>
                <td>username</td>
                <td>passward</td>
                <td>description</td>
                <td>image</td>
            </tr>
            {data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.passward}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
            </tr>
             )}
         </table>
        
        </div>
    </>
)
}

export default Stories