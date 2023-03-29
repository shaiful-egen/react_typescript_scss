import React from "react";
import {FieldControl, FieldGroup, FormBuilder, Validators,} from "react-reactive-form";


/*const TextInput = ({handler, touched, hasError, meta}) => (
  <div>
    <input  placeholder={(`Enter ${meta.label}`)} {...handler()}/>
    <span>
        {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
)*/

export function ReactiveFormComp() {

  const loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: false
  });

  const handleReset = () => {
    loginForm.reset();
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form values", loginForm.value);
  }

  return (
    <FieldGroup control={loginForm} render={({get, invalid}) => (
      <form onSubmit={handleSubmit}>

        <FieldControl name="username" render={({handler, touched, hasError, meta}) => (
          <div>
            <input placeholder={(`Enter ${meta.label}`)} {...handler()}/>
            <span>{touched && hasError("required") && `${meta.label} is required`}</span>
          </div>
        )} meta={{label: "Username"}}/>

        <FieldControl name="password" render={({handler, touched, hasError, meta}) => (
          <div>
            <input placeholder={(`Enter ${meta.label}`)} {...handler()}/>
            <span>{touched && hasError("required") && `${meta.label} is required`}</span>
          </div>
        )} meta={{label: "Password"}}/>

        <FieldControl name="rememberMe" render={({handler}) => (
          <div><input {...handler("checkbox")}/></div>
        )}/>

        <button type="button" onClick={handleReset}>Reset</button>
        <button type="submit" disabled={invalid}>Submit</button>
      </form>
    )}
    />
  );

}


