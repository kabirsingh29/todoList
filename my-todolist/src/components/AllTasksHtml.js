import React from 'react'; 

function AllTasksHtml(props) {
    console.log(props);
    return (  
        <>
        {
            props.task.map(name => (  
                props.task.length > 0 ? <li className="allTasks_task" key={name}>{name}</li> : ''
            ))
        } 
        </>  
      );
}

export default AllTasksHtml;