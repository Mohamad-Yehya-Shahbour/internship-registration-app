import React, { useEffect, useState } from 'react';
import Services from './Services';
import Modal from './UsersModal';

function ContentAdminInterns(props) {
    const [interns, setInterns] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [,setCount]=useState(0)


    const handleSearch = (input) => {
        var data = {
            name: input
        }
        Services.AjaxCalls.Post("/Applicants/Search", data).then((d)=>{setInterns(d);setCount(c=>c+1)})
    }
    useEffect(()=>{
        Services.AjaxCalls.Get("/Applicants").then((d)=>{setInterns(d);setLoaded(true)})
    },[])
    return (
        <>{loaded && 
		<div id="content" class="app-content">
			<h1 class="page-header">Interns <small>header small text goes here...</small></h1>
            <div className='row mb-4'>
                <div className='col-12'>
                    <div class="input-group input-group-lg mb-3">
						<input onChange={(e)=>{handleSearch(e.target.value)}} type="text" class="form-control input-white" placeholder="Enter keywords here..." />
						<button type="button" class="btn btn-primary"><i class="fa fa-search fa-fw"></i> Search</button>
					</div>
                </div>
            </div>
            <div className='row mb-4'>
                {interns.map((intern)=>(
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">{intern.name}</h5>
                                <p class="card-text">{intern.email}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">mobileNumber: {intern.mobileNumber}</li>
                                <li class="list-group-item">university: {intern.university}</li>
                                <li class="list-group-item">major: {intern.major}</li>
                                <li class="list-group-item">creationDate: {intern.creationDate.slice(0,10)}</li>
                                <li class="list-group-item">graduationDate: {intern.graduationDate.slice(0,10)}</li>
                                <li class="list-group-item">programName: {intern.programName}</li>
                                <li class="list-group-item">isValidated: {intern.isValidated?"Yes":"No"}</li>
                            </ul>
                        </div>
                    </div>
                ))}  
            </div>
		</div>
}
        </>
    );
}

export default ContentAdminInterns;