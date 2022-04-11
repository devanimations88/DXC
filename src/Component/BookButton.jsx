import React from "react";

function BookButton(props) {
  let propsData = props.data;

  return (
    <div className="button-row">
      {
        (propsData.previous != null) && <button onClick={(e) => props.update(propsData.previous)}>Prev</button>
      }
      {
        (propsData.next != null) && <button onClick={(e) => props.update(propsData.next)}>Next</button>
      }
    </div>
  )
}

export default BookButton;
