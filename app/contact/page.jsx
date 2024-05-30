// 'use client';
// import React, {useState} from 'react';
// import {db} from '../firebaseConfig'
// import { collection, addDoc } from 'firebase/firestore'

// async function addDataToFirestore(name, email, subject, message){
//   try{
//     const docRef = await addDoc(collection(db, "message"),{
//       name:name,
//       email:email,
//       subject:subject,
//       message:message,
//     });
//     console.log("Document written with the ID: ", docRef);
//     return true;
//   } catch(error){
//     console.error("error adding the document",error)
//     return false;
//   } 
// }

// const Contact = () => {
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [subject,setSubject] = useState("");
//   const [message,setMessage] = useState("");

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     const added = await addDataToFirestore(name,email,subject,message);
//     if(added){
//       setName("");
//       setEmail("");
//       setSubject("");
//       setMessage("");

//       alert("data added to the firestore db!!");
//     }
//   }
//   return (
//     <div className='max-w-[1240px] m-auto p-4 h-screen'>
        
//         <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
//         <form onSubmit={handleSubmit} className='max-w-[600px] m-auto'>
//             <div className='grid grid-cols-2 gap-2'>
//                 <input className='border shadow-lg p-3' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//                 <input className='border shadow-lg p-3' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
//             <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
//             <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Contact

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    alert("Your message has been sent!");
    router.push('/');
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-black'>
        <div className='bg-white/20 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-lg w-full'>
            <h1 className='text-2xl font-bold text-center text-white mb-6'>Let{"'"}s work together</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <input
                        className='bg-black/30 backdrop-blur-lg rounded-lg border border-blue-400 text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='bg-black/30 backdrop-blur-lg rounded-lg border border-blue-400 text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input
                    className='bg-black/30 backdrop-blur-lg rounded-lg border border-blue-400 text-black p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600'
                    type="text"
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    className='bg-black/30 backdrop-blur-lg rounded-lg border border-blue-400 text-black p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600'
                    cols="30"
                    rows="10"
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className='bg-blue-600 text-white rounded-lg p-3 w-full hover:bg-blue-700 transition'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;

