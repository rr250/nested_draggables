import Draggable from 'react-draggable';

function DraggableBox(props) {
  if (props.parentCount >= 0)
    return (
      <Draggable handle={"#div" + props.parentCount} bounds="parent" position={props.pos[props.parentCount]} onDrag={(e, position) => props.onControlledDrag(e, position, props.parentCount)} >
        <div className="box" style={{ height: (200 + 200 * props.parentCount) + "px", width: (200 + 200 * props.parentCount) + "px", position: 'relative', padding: '10px' }}>
          <strong className="cursor" id={"div" + props.parentCount}><div>Title</div></strong>
          <div style={{ height: (200 + 200 * props.parentCount) + "px", width: (200 + 200 * props.parentCount) + "px", padding: '10px' }}>
            <DraggableBox parentCount={props.parentCount - 1} pos={props.pos} onControlledDrag={props.onControlledDrag} />
          </div>
        </div>
      </Draggable>
    );
  else
    return (<></>)
}

export default DraggableBox;