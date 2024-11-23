import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h3>Hello! I'm child</h3>
        {props.setFun("My name is React")}
    </div>
  );
}
