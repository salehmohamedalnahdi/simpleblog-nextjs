//import { useEffect, useState } from 'react';
import FormCreateBlog from '../component/form'
import "../style/globals.css";


export default function CreateBlog() {

  return (
    <div className="content-form">
      <FormCreateBlog />
    </div>
  );
}
/*
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  useEffect(()=>{
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  },[])

       <form onSubmit={handleSubmit} className="form">
    <label>
      Title:
      <input className="input-title"
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ title: e.target.value })}
      />
    </label>
    <label>
      Content:
      <textarea className="textarea"
        value={formData.content}
        onChange={(e) => setFormData({content: e.target.value })}
      />
    </label>

        <button className="button" type="submit">Submit</button>

  </form>
  */