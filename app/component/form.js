"use client"
//import "../style/globals.css";
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function FormCreateBlog() {
 
    const [formData, setFormData] = useState({
        title: '',
        content: '',
      });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
        e.preventDefault();
        if(!formData.title || !formData.content){
          return alert("Plese All Fields Are Requiered ")
        }
        const response= await fetch('https://jsonplaceholder.typicode.com/posts/', {
          method: 'POST',
          body: JSON.stringify({
            title:formData.title,
            body: formData.content,
            userId: 3,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);
      //console.log(formData);
      router.push('/')
      };
   
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
    <label>
      Title:
      <input className="input-title"
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({  ...formData,title: e.target.value })}
      />
    </label>
    <label>
      Content:
      <textarea className="textarea"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData,content: e.target.value })}
      />
    </label>
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
