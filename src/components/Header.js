import React from 'react';

function Header(props) {
    return (
        <div id="header" class="app-header">
            {/*<!-- BEGIN navbar-header -->*/}
            <div class="navbar-header">
                <a href="index.html" class="navbar-brand"><span class="navbar-logo"></span> <b>Internship</b> Registration</a>
                <button type="button" class="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            {/*<!-- END navbar-header -->*/}
        </div>
    );
}

export default Header;