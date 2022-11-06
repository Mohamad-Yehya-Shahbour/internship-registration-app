import React, { useEffect, useState } from 'react';
import Services from './Services';
import UsersModal from './UsersModal';

function ContentAdminUsers(props) {
    const [,setCount] = useState(0)
    const[users, setUsers] = useState([])
    const[user, setUser] = useState({
        id: 0,
        name: "",
        email: "",
      })
    const[loaded, setLoaded] = useState(false)

    const [isModal,setIsModal] = useState(false)
    const [modaltype, setModalType] = useState("")
    const [entity, setEntity] = useState("Interns")

    const modalShow = (bool, user) => {
        setIsModal(bool)
        setUser(user)
        //console.log(bool,"close")
    }

    useEffect(()=>{
        Services.AjaxCalls.Get("/Users").then((d)=>{setUsers(d);setLoaded(true)})
    },[])

    return (
        <>
        {isModal && <UsersModal modalShow={modalShow} user={user} modaltype={modaltype} entity={entity}/>}
        {loaded && 
		<div id="content" class="app-content">
            
			<h1 class="page-header">Users <small>header small text goes here...</small></h1>

            <div class="panel panel-inverse" data-sortable-id="table-basic-7">
                <div class="panel-heading">
                    <h4 class="panel-title"></h4>
                    <div class="panel-heading-btn">
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
                    </div>
                </div>
                <div class="panel-body">
                <a onClick={()=>{setModalType("Add"); modalShow(true, user)}} href="#" class="btn btn-sm btn-primary w-60px me-1">Add</a>
                    <div class="table-responsive">
                        <table class="table table-striped mb-0 align-middle">
                            <thead>
                                <tr>
                                    <th>#id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>isInstructor</th>
                                    <th width="20%"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user)=>(
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isInstructor?"Yes":"No"}</td>
                                        <td>
                                            <a onClick={()=>{setModalType("Edit"); modalShow(true, user)}} href="#" class="btn btn-sm btn-warning w-60px me-1">Edit</a>
                                            <a onClick={()=>{Services.AjaxCalls.Delete("/Users/"+user.id).then((d)=>{setCount(c => c + 1)});}}  href="#" class="btn btn-sm btn-danger w-60px">Delete</a>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

		</div>
        }
        </>
    );
}

export default ContentAdminUsers;