import React from 'react';
import crossFunctionality from '../components/crossFunctionality'

function LiItemHtml(name, props) {
    return (
        <>
            <span className="allTasks_name">{name}</span> <span className="allTasks_cross" onClick = {(event) => crossFunctionality(event, props.task, props.setTask)}>+</span>
        </>
    )
}
function AllTasksHtml(props) {
    return (  
        <>
        {
            props.task.map(name => (  
            props.task.length > 0 ? <li className="allTasks_task" key={name}>{LiItemHtml(name, props)}</li> : ''
            ))
        } 
        </>  
      );
}

export default AllTasksHtml;