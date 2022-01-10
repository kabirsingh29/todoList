function Mainpage(props) {
    return (
        <>
            <div className="main_todo_app_wrapper">
                <div className="main_todo_app_heading">
                <span className="main_todo_app_headingtext">your daily list...</span>
                <props.RemoveAll task={props.task} setTask={props.setTask}/>
            </div>
          <div className="main_todo_app_inputWrapper">
            <label className="main_todo_app_label">
              Enter your next task
            </label>
            <form className="main_todo_task_form" onSubmit = {(e) => props.taskFormSubmit(e, props.task, props.setTask)}>
              <input type="text" className="main_todo_app_input" name="task"/>
              <button type="submit" className="main_todo_app_submit">Add your task</button>
            </form>
            <div className="main_todo_allTasks_wrapper">
              <ul className="main_todo_allTasks">
                <props.AllTasksHtml task={props.task} setTask={props.setTask}/>
              </ul>
            </div>
          </div>
        </div>
        </>
    );
}
export default Mainpage;
