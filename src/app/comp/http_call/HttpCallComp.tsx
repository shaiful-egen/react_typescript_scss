import {getApi, postApi} from "../../util/ApiReqUtil";
import {useState} from "react";

export function HttpCallComp() {


  const [state, setState] = useState({});

  const get1 = (e: any) => {
    console.log(e)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer abcdefgh'
    }
    const params = {key1: 301, key2: "abcd"}
    getApi('http://localhost:7000/book', {headers, params})
      .subscribe(e => {
        setState(e);
      })
  }

  const post1 = (e: any) => {
    console.log(e)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer abcdefgh'
    }
    const params = {key1: 301, key2: "abcd"}
    const data = {
      "id": 1001,
      "name": "book 1001"
    }
    postApi('http://localhost:7000/book', data, {headers, params})
      .subscribe(e => {
        setState(e);
      })
  }

  return (
    <>
      <h5>HttpCallComp</h5>
      <hr/>
      <button onClick={post1}>http-post-1</button>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <hr/>
      <button onClick={get1}>http-get-1</button>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <hr/>
    </>
  );
}

