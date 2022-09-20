import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:4000/user/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>setUser(data))
    },[])

    const handleUpdateSubmit = event =>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        const data ={
            email: email,
            name : name
        }
        console.log(data);
        event.preventDefault();
        
        // const user =(name,email);

        //send data to the server
        const url = `http://localhost:4000/user/${id}`;
fetch(url,{
    method :'PUT',
    body :JSON.stringify(data),
    headers : {
        'content-type' : 'application/json'

    },
   
})
.then(res =>res.json())
.then(data =>{
    console.log('success',data);
    toast("user added successfully");
    event.target.reset();

})
    }
    return (
        <div>
            <h2>updating : {user.name}</h2>
            <form onSubmit={handleUpdateSubmit}>
                <input type="text" name="name" placeholder ="Name" id="" required/>
                <br/>
                <input type="email" name="email" placeholder="email" id="" required/>
                <br/>
                <input type="submit" value="Update user"/>
            </form>
            <ToastContainer/>
            
        </div>
    );
};

export default Update;