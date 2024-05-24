"use client"
import { useState,useEffect } from "react";
import ButtonDelete from "./buttonDelete";


export default function FetchBlog (){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    const response= await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {revalidate: 60}
  });
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
    return (
      <div>
        {data.map(item=>
           <><div  className="container-title-delete">
            <h3   className="title-blog">Title:{item.title}</h3>
            <ButtonDelete   id={item.id} />
          </div><div   className="content-createdAt">
              <article   className="artcle">content: {item.body}</article>
              <div   className="createdAt"><span>createdAt:</span></div>
            </div></>
        )}
    </div>
    )

}

/*        const response= await fetch(url,{
        next: {revalidate: 60}
    });
    const result= await response.json();
    
    
    return result*/

/*  const [data,setData]= useState({});
    const get=async()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users',{
        next: {revalidate:1}
    });
    const result= await response.json();
    setData(result);
    }
    useEffect( () =>{
        get()
    },[]); */
/*
    return(
      <div className="md:w-2/4">
    <h4>Name: </h4>
      <h4 >Age: </h4>
      <h4 >Email: </h4>
      <div>
        <h4 className="border-2 rounded-lg bg-red-200 ">Personal And Profiessinoal Achievements:</h4>
        {result.map(i=>
          <><li className="font-semibold ">title: {i.name}</li>
          <li>Discription: {i.name}</li></>
        )}
      </div>
  </div>
  );*/