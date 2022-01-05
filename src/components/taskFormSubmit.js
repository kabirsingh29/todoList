function taskFormSubmit(event, task, setTask) {
    event.preventDefault();
    const currentValue = event.target.querySelector('input.main_todo_app_input').value;
    if ( currentValue !== '') {
      setTask(currentTasks => [...currentTasks, currentValue]);
      event.target.querySelector('input.main_todo_app_input').value = '';
    }
}

export default taskFormSubmit;
