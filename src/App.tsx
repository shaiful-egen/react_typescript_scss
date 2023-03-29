import React from 'react';
import './App.scss';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import {StudentComp} from "./app/comp/student/StudentComp";
import {LoginComp} from "./app/comp/login/LoginComp";
import {DataPassFromToComp} from "./app/comp/data_pass_from_to/DataPassFromTo";
import {HttpCallComp} from "./app/comp/http_call/HttpCallComp";
import {ReactiveFormComp} from "./app/comp/reactive_form/ReactiveFormComp";
import ReactHookFormComp from "./app/comp/react_hook_form/ReactHookFormComp";
import {ReactiveFormWithArrayComp} from "./app/comp/reactive_form/ReactiveFormWithArrayComp";

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
              <Route path="http-call" element={<HttpCallComp/>}/>
              <Route path="reactive-form" element={<ReactiveFormComp/>}/>
              <Route path="react-hook-form" element={<ReactHookFormComp/>}/>
              <Route path="reactive-form-with-array" element={<ReactiveFormWithArrayComp/>}/>
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
      <Link to="/http-call">http-call</Link> | &nbsp;
      <Link to="/reactive-form">reactive-form</Link> | &nbsp;
      <Link to="/react-hook-form">react-hook-form</Link> | &nbsp;
      <Link to="/reactive-form-with-array">reactive-form-with-array</Link> | &nbsp;
      <hr/>
      <Outlet/>
    </div>
  );
}

