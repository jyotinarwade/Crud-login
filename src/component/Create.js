import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function Create(){
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
const users = useSelector((state)=> state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id+1 , name, email}))
        navigate('/')
    }
    return(
        <div className="d-flex w-100 vh-50 justify-content-center align-item-center">
            <div className="w-100 border bg-secondary text-white p-3">
                <h3>Add New User</h3>
                <from onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter name"
                        onChange={e =>setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="enter email" 
                         onChange={e =>setEmail(e.target.value)}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-info">Submit</button>
                </from>
            </div>
        </div>
    )
}

export default Create;