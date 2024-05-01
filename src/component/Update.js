import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";
import { Navigate } from "react-router-dom";

function Update() {
    const {id} = useParams();
    const user = useSelector((state)=> state.users);
    const existingUser = user.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] =useState('name')
    const [uemail, setEmail] =useState('email')
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleUpdate =(event)=> {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }
    return(
        <>
    
        <div className="d-flex w-100 vh-50 justify-content-center align-item-center">
            <div className="w-100 border bg-secondary text-white p-3">
                <h3>Update User</h3>
                <from onSubmit={handleUpdate} >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter name"
                        value={uname} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="enter email" 
                        value={uemail}  onChange={e => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-info">Submit</button>
                </from>
            </div>
        </div>
        </>
          
        )
    }
    
    export default Create;