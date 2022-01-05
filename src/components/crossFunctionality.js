function removingItemFromArray(array, itemRemove) {
    const index = array.indexOf(itemRemove);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log(array);
    return array;
}

function crossFunctionality(event, task, setTask) {
    const currentValue = event.target.closest('li.allTasks_task').querySelector('span.allTasks_name').textContent.trim();
    const updateTasks = removingItemFromArray(task, currentValue);
    setTask([...updateTasks]);
    // console.log(task);
}
export default crossFunctionality;