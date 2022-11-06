import React, { useEffect, useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import Services from './Services';

function ProgramsModal(props) {
    const [modal, setModal] = useState("")
    const [program, setProgram] = useState({
        title: "",
        startDate: "",
        endDate: "",
        maxCapacity: 0,
        currentCapacity: 0,
        classRoomCode: ""
      })

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

    const handleAdd = () => {
        props.modalShow(false)
        modal.hide()
        window.$(".modal-backdrop").remove();
        Services.AjaxCalls.Post("/Programs", program).then((d)=>{})
    }
    return (
        <>
        <div className="modal fade" id="modal-dialog">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Add Program</h4>
            </div>
            <div className="modal-body">
            <form>
                <div className="form-group">
                    <label>title</label>
                    <input required onChange={(e)=>{setProgram({...program, title: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>startDate</label>
                    <input required onChange={(e)=>{setProgram({...program, startDate: e.target.value})}}
                    type="date" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>endDate</label>
                    <input required onChange={(e)=>{setProgram({...program, endDate: e.target.value})}}
                    type="date" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>maxCapacity</label>
                    <input required onChange={(e)=>{setProgram({...program, maxCapacity: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>currentCapacity</label>
                    <input required onChange={(e)=>{setProgram({...program, currentCapacity: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
                <div className="form-group">
                    <label>classRoomCode</label>
                    <input required onChange={(e)=>{setProgram({...program, classRoomCode: e.target.value})}}
                    type="text" className="form-control" id="exampleInputUsername1" />
                </div>
            </form>
            </div>
            <div className="modal-footer">
                <a  onClick={()=>{handleClose()}}  className="btn btn-white">Close</a>
                <a  onClick={()=>{handleAdd()}} className="btn btn-success">{props.modaltype}</a>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default ProgramsModal;