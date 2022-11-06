import React, { useEffect, useState } from 'react';
import Services from './Services';

function ContentClientJoinProgram(props) {
    const [loaded, setLoaded] = useState(false)
    const [data, setData]=useState({
        name:"",
        email:"",
        major:"",
        university:"",
        mobileNumber:"",
        graduationDate:"",
        programId: 1
    })

    const [program, setProgram] = useState({
        title: "",
        startDate: "",
        endDate: "",
        maxCapacity: 0,
        currentCapacity: 0,
        classRoomCode: ""
      })

    const handleSubmit = () => {
        data.programId = program.id
        Services.AjaxCalls.Post("/Applicants/Join", data)
        //console.log(data)
    }

    useEffect(()=> {
        Services.AjaxCalls.Get("/Programs/1")
        .then((d)=>{setProgram(d); setLoaded(true)})
    }, [])


    

    return (
        <>
        {loaded && 
        <div id="content" class="app-content">
            <h1 class="page-header">Join Program <small>header small text goes here...</small></h1> 
            <div class="row mb-3">
				<div class="col-xl-6">
					<div class="panel panel-inverse" data-sortable-id="form-stuff-2">
						<div class="panel-heading">
							<h4 class="panel-title">Program Details</h4>
							<div class="panel-heading-btn">
								<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
							</div>
						</div>
						<div class="panel-body">
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">title* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.title} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">startDate* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.startDate.slice(0,10)} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">endDate* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.endDate.slice(0,10)} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">maxCapacity* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.maxCapacity} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">currentCapacity* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.currentCapacity} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label class="col-lg-4 col-form-label form-label">classRoomCode* :</label>
                                <div class="col-lg-8">
                                    <input defaultValue={program.classRoomCode} 
                                    class="form-control-plaintext" type="text"
                                    id="fullname" name="fullname" data-parsley-required="true" />
                                </div>
                            </div>
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="panel panel-inverse" data-sortable-id="form-stuff-4">
						<div class="panel-heading">
							<h4 class="panel-title">Required Form</h4>
							<div class="panel-heading-btn">
								<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
							</div>
						</div>
						<div class="panel-body">
                            <form onSubmit={(e)=>{e.preventDefault();handleSubmit()}} class="form-horizontal" data-parsley-validate="true" name="demo-form">
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label">Full Name* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, name: e.target.value})}}
                                        class="form-control disabled-item-f1" type="text"
                                        id="fullname" name="fullname" data-parsley-required="true" />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label">Gmail* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, email: e.target.value})}}
                                        class="form-control disabled-item-f1" type="email"
                                        id="gmail" name="gmail" data-parsley-required="true" />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label" for="fullname">Major* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, major: e.target.value})}}
                                        class="form-control disabled-item-f1" type="text"
                                        id="major" name="major" data-parsley-required="true" />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label" for="fullname">University* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, university: e.target.value})}}
                                        class="form-control disabled-item-f1" type="text"
                                        id="university" name="university" data-parsley-required="true" />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label" for="fullname">Phone Number* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, mobileNumber: e.target.value})}}
                                        class="form-control disabled-item-f1" type="text"
                                        id="phone" name="phone" data-parsley-required="true" />
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label" for="fullname">Graduation Date* :</label>
                                    <div class="col-lg-8">
                                        <input required onChange={(e)=>{setData({...data, graduationDate: e.target.value })}}
                                        type="date" class="form-control" id="graduationDate"
                                        data-parsley-required="true"/>
                                    </div>
                                </div>
                                {/* <div class="form-group row mb-3">
                                    <label class="col-lg-4 col-form-label form-label" for="fullname">CV :</label>
                                    <div class="col-lg-8">
                                        <input type="file" class="form-control" data-parsley-required="true" />
                                    </div>
                                </div> */}
                                <div class="form-group row">
									<label class="col-lg-4 col-form-label form-label"></label>
									<div class="col-lg-8">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</div>
                            </form>
						</div>
					</div>
				</div>
			</div>
        </div>
        }
        </>
        
    );
}

export default ContentClientJoinProgram;