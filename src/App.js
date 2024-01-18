import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login"
import Registration from "./Pages/User_registration/User_registration"
import Companyhierarchy from './Pages/Company_hierarchy/Company_hierarchy';
import Targetset from "./Pages/Target_setup/Target_setup";
import Creategoal from "./Pages/Create_goal/Create_goal";
import Editgoal from "./Pages/Edit_goal/Edit_goal";
import Adddepartment from "./Pages/Add_department/Add_department";
import Click01 from "./Pages/Add_levelClick/Add_levelClick";
import Click02 from "./Pages/Add_typeClick/Add_typeClick";
import OrganizationLevel from "./Pages/Organization_levels/Organization_levels";
import Createorganization from "./Pages/Create_organization/Create_organization";
import Createsector from "./Pages/Create_sector/Create_sector";
import Createcompany from "./Pages/Create_company/Create_company";
import Createdepartment from "./Pages/Create_department/Create_department";
import Createsubdepartment from "./Pages/Create_subdepartment/Create_subdepartment";
import Createperspective from "./Pages/Create_perspective/Create_perspective";
import Createkpi from "./Pages/Create_KPI/Create_KPI";
import Createstrategy from "./Pages/Create_strategy/Create_strategy"; 
import Createactionplan from "./Pages/Create_actionplan/Create_actionplan"; 
import Topright from "./Components/Top_right/Top_right";
import Companysummary from "./Pages/Company_summary/Company_summary";
import Departmentsummary from "./Pages/Department_summary/Department_summary";
import Subdepartmentsummary from "./Pages/Subdepartment_summary/Subdepartment_summary";
import Editcompany from "./Pages/Edit_company/Edit_company";
import Editdepartment from "./Pages/Edit_department/Edit_department";
import Editsubdepartment from "./Pages/Edit_subdepartment/Edit_subdepartment";
import Organizationchart from "./Pages/Organization_chart/Organization_chart";
import Companyconfiguration from "./Pages/Company_configuration/Company_configuration";
import Editemplyeedetails from "./Pages/Edit_empdetails/Edit_empdetails";
import Externallogin from "./Pages/External_login/External_login";

import Sidebar from './Components/Side_bar/Sidebar'
import Dashboard from './Pages/Dashboard/Dashboard';
import Analytics from './Pages/Analytics/Analytics';
import Customers from './Pages/Customers/Customers';
import Order from './Pages/Order/Order';
import Products from './Pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/user_registration" element={<Registration/>}></Route>
        <Route path="/company_hierarchy" element={<Companyhierarchy/>}></Route>
        <Route path="/target_setup" element={<Targetset/>}></Route>
        <Route path="/create_goal" element={<Creategoal/>}></Route>
        <Route path="/edit_goal" element={<Editgoal/>}></Route>
        <Route path="/add_department" element={<Adddepartment/>}></Route>
        <Route path="/add_level" element={<Click01/>}></Route>
        <Route path="/add_type" element={<Click02/>}></Route>
        <Route path="/organization_level" element={<OrganizationLevel/>}></Route>
        <Route path="/create_organization" element={<Createorganization/>}></Route>
        <Route path="/create_sector" element={<Createsector/>}></Route>
        <Route path="/create_company" element={<Createcompany/>}></Route>
        <Route path="/create_department" element={<Createdepartment/>}></Route>
        <Route path="/create_subdepartment" element={<Createsubdepartment/>}></Route>
        <Route path="/create_perspective" element={<Createperspective/>}></Route>
        <Route path="/create_kpi" element={<Createkpi/>}></Route>
        <Route path="/create_strategy" element={<Createstrategy/>}></Route>
        <Route path="/create_actionplan" element={<Createactionplan/>}></Route>
        <Route path="/top_right" element={<Topright/>}></Route>
        <Route path="/company_summary" element={<Companysummary/>}></Route>
        <Route path="/department_summary" element={<Departmentsummary/>}></Route>
        <Route path="/subdepartment_summary" element={<Subdepartmentsummary/>}></Route>
        <Route path="/edit_company" element={<Editcompany/>}></Route>
        <Route path="/edit_department" element={<Editdepartment/>}></Route>
        <Route path="/edit_subdepartment" element={<Editsubdepartment/>}></Route>
        <Route path="/organization_chart" element={<Organizationchart/>}></Route>
        <Route path="/company_configuration" element={<Companyconfiguration/>}></Route>
        <Route path="/edit_employeedetails" element={<Editemplyeedetails/>}></Route>
        <Route path="/external_login" element={<Externallogin/>}></Route>
      </Routes>

      <Routes>
        <Route
          path="/Dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path="/MyProfile"
          element={
            <Sidebar>
              <Analytics />
            </Sidebar>
          }
        />
        <Route
          path="/OrganizatonDetails"
          element={
            <Sidebar>
              <Customers />
            </Sidebar>
          }
        />
        <Route
          path="/OrganizationChart"
          element={
            <Sidebar>
              <Order />
            </Sidebar>
          }
        />
        <Route
          path="/GraphConfiguration"
          element={
            <Sidebar>
              <Products />
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
