import { useEffect, useState } from 'react';
import './App.css';
import DraggableBox from './DraggableBox';


function App() {
  const [parentCount, setParentCount] = useState(0)
  const [pos, setPos] = useState([{ x: 0, y: 0 }])

  function addParent(e) {
    e.preventDefault();
    setParentCount((parentCount) => parentCount + 1)
  }

  useEffect(() => {
    if (parentCount > 0) {
      let last = pos[pos.length - 1]
      let { x, y } = last
      x = ((x + 200 * (parentCount + 1)) >= window.innerWidth) ? (window.innerWidth - (200 * (parentCount + 1))) : x
      y = ((y + 200 * (parentCount + 1)) >= window.innerHeight) ? (window.innerHeight - (200 * (parentCount + 1))) : y
      setPos([...pos.slice(0, pos.length - 1), { x: -10, y: -36 }, { x: x, y: y }])
    }
  }, [parentCount])

  function onControlledDrag(e, position, i) {
    const { x, y } = position;
    setPos([...pos.slice(0, i), { x: x, y: y }, ...pos.slice(i + 1, pos.length)])
  };

  console.log(pos)
  return (
    <div style={{ height: window.innerHeight + "px", width: window.innerWidth + "px" }}>
      <button onClick={e => addParent(e)} style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 100 }}>Add Parent</button>
      <DraggableBox parentCount={parentCount} pos={pos} onControlledDrag={onControlledDrag} />
    </div >
  );
}

export default App;
