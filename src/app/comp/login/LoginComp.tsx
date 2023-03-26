import {useState} from "react";

export function LoginComp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log(username, password);
  }

  return (
    <>
      <h3>Login comp</h3>
      <div className="container">
        <div className="row" style={{background: 'red'}}>
          <div className="col-md-4" style={{background: 'green'}}>
            username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="col-md-4" style={{background: 'blue'}}>
            password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="col-md-4" style={{background: 'yellow'}}>
            <button className="btn btn-primary" onClick={login}>login</button>
          </div>
        </div>
      </div>
    </>
  );
}
