import React from 'react';
import { useNavigate } from 'react-router-dom';

function SidebarItem(props) {
    let navigate = useNavigate();

    return (
        <div id="sidebar" class="app-sidebar">
            <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
                <div class="menu">
                    <div class="menu-header">Navigation</div>
					<div class="menu-item has-sub">
						<a onClick={()=>{navigate('');}} href="#" class="menu-link">
							<div class="menu-icon">
								<i class="fa fa-sitemap"></i>
							</div>
							<div class="menu-text">Client Home Page</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu">
							<div class="menu-item">
								<a onClick={()=>{navigate('client-about-us');}} href="#" class="menu-link"><div class="menu-text">About Us</div></a>
							</div>
							<div class="menu-item">
								<a onClick={()=>{navigate('client-join-program');}} href="#" class="menu-link"><div class="menu-text">Join Program</div></a>
							</div>
							{/* <div class="menu-item">
								<a href="contact-us.html" class="menu-link"><div class="menu-text">Contact Us</div></a>
							</div> */}
						</div>
					</div>
                    <div class="menu-item has-sub">
						<a onClick={()=>{navigate('admin-login');}} href="#" class="menu-link">
							<div class="menu-icon">
								<i class="fa fa-lock"></i>
							</div>
							<div class="menu-text">Admin Home Page</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu">
							<div class="menu-item">
								<a onClick={()=>{navigate('admin-interns');}} href="#" class="menu-link"><div class="menu-text">Interns Management</div></a>
							</div>
							<div class="menu-item">
								<a onClick={()=>{navigate('admin-users');}} href="#" class="menu-link"><div class="menu-text">Users Management</div></a>
							</div>
							<div class="menu-item">
								<a onClick={()=>{navigate('admin-programs');}} href="#" class="menu-link"><div class="menu-text">Programs Management</div></a>
							</div>
						</div>
					</div>
                    <div class="menu-item d-flex">
					    <a href="#" class="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i class="fa fa-angle-double-left"></i></a>
				    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarItem;