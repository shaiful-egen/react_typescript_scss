export function StudentComp() {

  const go = () => {
    console.log("going ...");
  }

  return (
    <>
      <h3>Student comp</h3>
      <button className="btn btn-primary" onClick={go}>go</button>
      <div className="container">
        <div className="row" style={{background: 'red'}}>
          <div className="col-md-4" style={{background: 'green'}}>
            Column
          </div>
          <div className="col-md-4" style={{background: 'blue'}}>
            Column
          </div>
          <div className="col-md-4" style={{background: 'yellow'}}>
            Column
          </div>
        </div>
      </div>
    </>
  );
}

