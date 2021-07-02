import { useEffect, useState } from 'react';
import './App.css';
import Draggable from 'react-draggable';


function App() {
  const [renderComponent, setRenderComponent] = useState(
    <Draggable bounds="parent" handle="#div0">
      <div className="box">
        <strong className="cursor" id="div0"><div>Title</div></strong>
      </div>
    </Draggable>
  );

  const [parentCount, setParentCount] = useState(0)

  function addParent(e) {
    e.preventDefault();
    setParentCount((parentCount) => parentCount + 1)

  }

  useEffect(() => {
    if (parentCount > 0)
      setRenderComponent((renderComponent) =>
        <Draggable handle={"#div" + parentCount} bounds="parent">
          <div className="box" style={{ height: (100 + 200 * parentCount) + "px", width: (100 + 200 * parentCount) + "px", position: 'relative', padding: '10px' }}>
            <strong className="cursor" id={"div" + parentCount}><div>Title</div></strong>
            <div style={{ height: (100 + 200 * parentCount) + "px", width: (100 + 200 * parentCount) + "px", padding: '10px' }}>
              {renderComponent}
            </div>
          </div>
        </Draggable>
      )
  }, [parentCount]);

  return (
    <div style={{ height: window.innerHeight + "px", width: window.innerWidth + "px" }}>
      <button onClick={e => addParent(e)} style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 100 }}>Add Parent</button>
      <Draggable onStart={() => false} bounds="body">
        {renderComponent}
      </Draggable>

    </div >
  );
}

export default App;
