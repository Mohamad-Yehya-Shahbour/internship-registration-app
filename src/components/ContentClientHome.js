import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContentClientHome(props) {
    let navigate = useNavigate();

    return (
		<div id="content" class="app-content">
            <div class="container col-xxl-12
             px-2">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHwwfHx8MTYyMTQ0NjkyNg&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768" class="d-block mx-lg-auto img-fluid" alt="" loading="lazy"/>
                    </div>
                    <div class="col-lg-6">
                        <div class="lc-block mb-3">
                            <div editable="rich">
                                <h2 class="fw-bold display-5">IDS started "The Online Internship Program".</h2>
                            </div>
                        </div>

                        <div class="lc-block mb-3">
                            <div editable="rich">
                                <p class="lead">
                                    Through this program, students will apply for a three-month internship within many selected topics in the field of development. 
                                    Our first program topic is: <b>Web Programming</b>.
                                    Students must complete seven sessions of the topic through the IDS Learning Portal, 
                                    and then submit their assignments online. At the end of the internship, 
                                    interns will receive certificates 
                                    based on the evaluation of their final project.
                                    Internships are available for both undergraduate and graduate students.
                                </p>
                            </div>
                        </div>

                        <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                            <a onClick={()=>{navigate('client-join-program');}} class="btn btn-primary px-4 me-md-2" href="#" role="button">Join Program</a>
                        </div>

                    </div>
                </div>
            </div>
		</div>
    );
}

export default ContentClientHome;