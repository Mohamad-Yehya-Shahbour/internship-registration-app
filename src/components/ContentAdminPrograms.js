import React, { useEffect, useState } from 'react';
import ProgramsModal from './ProgramsModal';
import Services from './Services';

function ContentAdminPrograms(props) {
    const [programs, setPrograms]=useState([])
    const [loaded, setLoaded]=useState(false)

    const [isModal,setIsModal] = useState(false)
    const [modaltype, setModalType] = useState("")
    const [entity, setEntity] = useState("Interns")
    const [id , setId] = useState(0)

    const [,setCount] = useState(0)

    const modalShow = (bool, id) => {
        setId(id)
        setIsModal(bool)
        //console.log(bool,"close")
        setCount(c => c + 1)
    }

    useEffect(()=>{
        Services.AjaxCalls.Get("/Programs/GetAll").then((d)=>{setPrograms(d);setLoaded(true)})
    },[])

    return (
        <>
        {isModal && <ProgramsModal modalShow={modalShow} id={id} modaltype={modaltype} entity={entity}/>}
        {loaded && 
		<div id="content" class="app-content">
            
			<h1 class="page-header">Programs <small>header small text goes here...</small></h1>

            <div class="panel panel-inverse" data-sortable-id="table-basic-7">
                <div class="panel-heading">
                    <h4 class="panel-title"></h4>
                    <div class="panel-heading-btn">
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
                        <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
                    </div>
                </div>
                <div class="panel-body">
                <a onClick={()=>{setModalType("Add"); setIsModal(true, 0)}} href="#" class="btn btn-sm btn-primary w-60px me-1">Add</a>
                    <div class="table-responsive">
                        <table class="table table-striped mb-0 align-middle">
                            <thead>
                                <tr>
                                    <th>#id</th>
                                    <th>title</th>
                                    <th>startDate</th>
                                    <th>endDate</th>
                                    <th>classRoomCode</th>
                                    <th>maxCapacity</th>
                                    <th>currentCapacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program)=>(
                                    <tr>
                                        <td>{program.id}</td>
                                        <td>{program.title}</td>
                                        <td>{program.startDate.slice(0,10)}</td>
                                        <td>{program.endDate.slice(0,10)}</td>
                                        <td>{program.classRoomCode}</td>
                                        <td>{program.maxCapacity}</td>
                                        <td>{program.currentCapacity}</td>
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

export default ContentAdminPrograms;