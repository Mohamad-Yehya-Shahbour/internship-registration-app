import React, { useEffect, useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import Services from './Services';

function UsersModal(props) {
    const [modal, setModal] = useState("")
    const [data, setData] = useState()
    const [user, setUser] = useState(props.user)

    useEffect(()=>{
        const modalInstance = new window.bootstrap.Modal(document.getElementById('modal-dialog'), {keyboard: true});
        setModal(modalInstance)
        modalInstance.show();
        
    },[])

    const handleClose = () => {
        props.modalShow(false)
        modal.hide()
        window.$(".modal-backdrop").remove();
        
    }

    const handleEdit = () => {
        if(user.id == 0){
            Services.AjaxCalls.Post("/Users", user)
        }else{
            Services.AjaxCalls.Put("/Users", user)
        }
        props.modalShow(false)
        modal.hide()
        window.$(".modal-backdrop").remove();
    }

    

    return (
        <>
        <div className="modal fade" id="modal-dialog">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">{props.modaltype}</h4>
            </div>
            <div className="modal-body">
            <form>
                <div className="form-group">
                    <label>name</label>
                    <input defaultValue={user.name} onChange={(e)=>{setUser({...user, name: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input defaultValue={user.email} onChange={(e)=>{setUser({...user, email: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
            </form>
            </div>
            <div className="modal-footer">
                <a  onClick={()=>{handleClose()}}  className="btn btn-white">Close</a>
                <a  onClick={()=>{handleEdit()}} className="btn btn-success">{props.modaltype}</a>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default UsersModal;