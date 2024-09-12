import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import { userMenu } from './Menu/userMenu';

const Sidebar = () => {
   //get user state
   const { user } = useSelector(state => state.auth);

   const location = useLocation();

   return (
      <div>
         <div className="sidebar">
            <div className="menu">
               {user?.user.role === "organization" && (
                  <>
                     <div className={`menu-item ${location.pathname === "/" && 'active'} mb-3`}>
                        <i className={"fa-solid fa-warehouse"}></i>
                        <Link to={"/"}>Inventory</Link>
                     </div>

                     <div className={`menu-item ${location.pathname === "/donar" && 'active'} mb-3`}>
                        <i className={"fa-solid fa-hand-holding-medical"}></i>
                        <Link to={"/donar"}>Donar</Link>
                     </div>

                     <div className={`menu-item ${location.pathname === "/hospital" && 'active'} mb-3`}>
                        <i className={"fa-solid fa-hospital"}></i>
                        <Link to={"/hospital"}>Hospital</Link>
                     </div>
                  </>
               )}

               {(user?.user.role === "donar" || user?.user.role === "hospital") && (
                  <>
                     <div className={`menu-item ${location.pathname === "/organization" && 'active'} mb-3`}>
                        <i className={"fa-sharp fa-solid fa-building-ngo"}></i>
                        <Link to={"/organization"}>Organization</Link>
                     </div>
                  </>
               )}

               {user?.user.role === "hospital" && (
                  <>
                     <div className={`menu-item ${location.pathname === "/consumer" && 'active'} mb-3`}>
                        <i className={"fa-sharp fa-solid fa-building-ngo"}></i>
                        <Link to={"/consumer"}>Consumer</Link>
                     </div>
                  </>
               )}

               {user?.user.role === "donar" && (
                  <>
                     <div className={`menu-item ${location.pathname === "/donation" && 'active'} mb-3`}>
                        <i className={"fa-sharp fa-solid fa-building-ngo"}></i>
                        <Link to={"/donation"}>Donation</Link>
                     </div>
                  </>
               )}


               {/* {userMenu.map((menu, index) => {
                  const isActive = location.pathname === menu.path;

                  return (
                     <div key={index} className={`menu-item ${isActive && 'active'}`}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                     </div>
                  );
               })} */}
            </div>
         </div>
      </div>
   );
}

export default Sidebar;
