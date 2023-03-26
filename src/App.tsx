import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import {StudentComp} from "./app/comp/student/StudentComp";
import {LoginComp} from "./app/comp/login/LoginComp";
import {DataPassFromToComp} from "./app/comp/data_pass_from_to/DataPassFromTo";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1>Route Example</h1>
          <Routes>
            <Route path="/" element={<NavComp/>}>
              <Route index element={<LoginComp/>}/>
              <Route path="student" element={<StudentComp/>}/>
              <Route path="data-pass-from-to" element={<DataPassFromToComp/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

function NavComp() {
  return (
    <div>
      <Link to="/">Home</Link> | &nbsp;
      <Link to="/data-pass-from-to">data-pass-from-to</Link> | &nbsp;
      <Link to="/student">student</Link> | &nbsp;
      <hr/>
      <Outlet/>
    </div>
  );
}

