import {useState} from "react";

export function StudentComp() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const save = () => {
    console.log(id, name);
  }

  return (
    <>
      <h3>Student comp</h3>
      <div className="container">
        <div className="row" style={{background: 'red'}}>
          <div className="col-md-4" style={{background: 'green'}}>
            id: <input type="text" value={id} onChange={(e) => {
            setId(e.target.value)
          }}/>
          </div>
          <div className="col-md-4" style={{background: 'blue'}}>
            name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="col-md-4" style={{background: 'yellow'}}>
            <button className="btn btn-primary" onClick={save}>save</button>
          </div>
        </div>
      </div>
    </>
  );
}
