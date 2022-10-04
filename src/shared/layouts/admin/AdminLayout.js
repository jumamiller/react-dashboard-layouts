import React from 'react';
import "./sidebar/Header.css";
import SideBar from "./sidebar/SideBar";
class AdminLayout extends React.Component {
    render() {
        return (
           <div className="App">
               <SideBar layout='admin'/>
           </div>
        );
    }
}
export default AdminLayout
