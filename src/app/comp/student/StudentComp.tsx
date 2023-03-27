import {useState} from "react";

export function StudentComp() {

  const [state, setState] = useState({id: "", name: "", age: ""});

  const handleChange = (e: any) => {
    console.log(e.target)
    const {name, value} = e.target;
    setState(prevState => ({...prevState, [name]: value}));
  };

  const save = () => {
    console.log(state);
  }

  return (
    <>
      <h3>Student comp</h3>
      <div className="container">
        <div className="row" style={{background: '#dd00dd'}}>
          <div className="col-md-4" style={{background: 'green'}}>
            id: <input type="text" value={state.id} name="id" onChange={handleChange}/>
          </div>
          <div className="col-md-4" style={{background: 'blue'}}>
            name: <input type="text" value={state.name} name="name" onChange={handleChange}/>
          </div>
          <div className="col-md-4" style={{background: 'purple'}}>
            age: <input type="text" value={state.age}
                             onChange={(e) => setState(prev => ({...prev, age: e.target.value}))}/>
          </div>
          <div className="col-md-4" style={{background: 'yellow'}}>
            <button className="btn btn-primary" onClick={save}>save</button>
          </div>
        </div>
      </div>
    </>
  );
}
