import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ContentAdminInterns from './components/ContentAdminInterns';
import ContentAdminLogin from './components/ContentAdminLogin';
import ContentAdminPrograms from './components/ContentAdminPrograms';
import ContentAdminUsers from './components/ContentAdminUsers';
import ContentClientAboutUs from './components/ContentClientAboutUs';

import ContentClientHome from './components/ContentClientHome';
import ContentClientJoinProgram from './components/ContentClientJoinProgram';
import Header from './components/Header';
import SidebarItem from './components/SidebarItem';

function App() {
  return (
    <div id="app" className="app app-header-fixed app-sidebar-fixed">
        <Header/>
        <SidebarItem/>
        <div class="app-sidebar-bg"></div>
		    <div class="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" class="stretched-link"></a></div>
        <Routes>
          <Route path="/" element={<ContentClientHome/>} />
          <Route path="/client-about-us" element={<ContentClientAboutUs />} />
          <Route path="/client-join-program" element={<ContentClientJoinProgram />} />
          <Route path="/admin-login" element={<ContentAdminLogin />} />
          <Route path="/admin-interns" element={<ContentAdminInterns />} />
          <Route path="/admin-users" element={<ContentAdminUsers />} />
          <Route path="/admin-programs" element={<ContentAdminPrograms />} />
        </Routes>
        
        <div class="app-sidebar-bg"></div>
		    <div class="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" class="stretched-link"></a></div>
        <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
      </div>
  );
}

export default App;
