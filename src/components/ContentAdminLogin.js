import React, { useEffect, useState } from 'react';
import Services from './Services';
import { useNavigate } from 'react-router-dom';


function ContentAdminLogin(props) {
	const [isauth, setIsauth] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

	let navigate = useNavigate();


    const handleSubmit = () =>{
        //console.log(data)
		Services.AjaxCalls.Post("/Auth/Login", data)
		.then((d)=>{console.log(d);
			localStorage.setItem("token", d.access_token);
			navigate('/admin-interns', { replace: true })
		})
    }

    return (
		<div id="content" class="app-content">
			<h1 class="page-header">Login <small>header small text goes here...</small></h1>
            <div class="row mb-3">
				<div class="col-xl-12">
					<div class="panel panel-inverse" data-sortable-id="form-stuff-11">
						<div class="panel-heading">
							<h4 class="panel-title">Login Form</h4>
							<div class="panel-heading-btn">
								<a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
								<a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
							</div>
						</div>
						<div class="panel-body">
							<form data-parsley-validate="true"
                            onSubmit={(e)=>{e.preventDefault();handleSubmit()}} >
								<fieldset>
									<legend class="mb-3">IDS</legend>
									<div class="row mb-3">
										<label class="form-label col-form-label col-md-3">Email address</label>
										<div class="col-md-9">
											<input required onChange={(e)=>{setData({...data, email: e.target.value})}}
                                            type="email" class="form-control" placeholder="Enter email"
                                            data-parsley-required="true" id='email' />
										</div>
									</div>
									<div class="row mb-3">
										<label class="form-label col-form-label col-md-3">Password</label>
										<div class="col-md-9">
											<input required onChange={(e)=>{setData({...data, password: e.target.value})}}
                                            type="password" class="form-control" placeholder="Password" 
                                            data-parsley-required="true" id='password' />
										</div>
									</div>
									<div class="row">
										<div class="col-md-7 offset-md-3">
											<button type="submit" class="btn btn-primary w-100px me-5px">Login</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			
		</div>
    );
}

export default ContentAdminLogin;