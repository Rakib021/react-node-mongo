import React from 'react';

const AddUser = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user =(name,email);

        //send data to the server
fetch('http://localhost:4000/user',{
    method :'POST',
    headers : {
        'content-type' : 'application/json'

    },
    body :JSON.stringify(user),
})
.then(res =>res.json())
.then(data =>{
    console.log('success',data);
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
        </div>
    );
};

export default AddUser;