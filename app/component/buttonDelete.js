"use client"

import { useRouter } from "next/navigation";

export default function ButtonDelete({id}) {
 
    const router = useRouter();
    const handleSubmit= async(e) => {;
        e.preventDefault();
        const clickconfirm=confirm("Are You Sure To Delete This blog ")
        if(!clickconfirm){
            return router.replace('/')
          }
        const response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        router.replace('/')
      };
   
  return (
    <div className="delete">
        <button className="delete-button" onClick={handleSubmit}>Delete</button>
    </div>

  );
}
