import {useState} from "react";

export function DataPassFromToComp() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h5>DataPassFromTo comp</h5>
      <hr/>

      <PanelComp title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Dhaka is the capital of BD.
      </PanelComp>
      <PanelComp title="Population" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        Dhaka has a population of 30 millions
      </PanelComp>

    </>
  );
}

function PanelComp(o: any) {
  return (
    <section className="panel">
      <p>{o.title} : </p>
      {o.isActive ? (<p>{o.children}</p>) : (<button onClick={o.onShow}> Show more ... </button>)}
    </section>
  );
}
