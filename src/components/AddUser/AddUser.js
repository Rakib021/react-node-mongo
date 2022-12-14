import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const handleSubmit = event =>{
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
fetch('http://localhost:4000/user',{
    method :'POST',
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
            <h2>please add a user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder ="Name" id="" required/>
                <br/>
                <input type="email" name="email" placeholder="email" id="" required/>
                <br/>
                <input type="submit" value="Add user"/>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddUser;