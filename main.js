//Allow the window to refresh and keep the inputs on the page
//Begin creating the element
/* addEventListener takes two arguments
* 1st is the TYPE of event being listened for
* 2nd is the Listener's callback arguement containing what will happen
    when an event occurs
    */


window.addEventListener('load', () => {
// everything we want to do when the page loads
// define document variables
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const task = document.querySelector('task');

    form.addEventListener('submit', (event) => {
// !!Prevent default page refresh
    event.preventDefault();

// define task variable
    const task = input.value;

    if (!task) {
        alert('No galaxies near, create a new galaxy?')
        return;
    }/* else {
        alert('Thanks for creating a new galaxy!')
    }*/

//Add local storage
    const newInput = document.querySelector('input');
    task = document.querySelector('task');
    
    input.addEventListener('reloadOutput', display);

    function display() {
        localStorage.setItem('taskInputSaved', input.value);
        
        task.innerHTML = localStorage.getItem('taskInputSaved');

}
//create task element node
    const task_el = document.createElement('div');
    task_el.classList.add('task'); 

//create task content element node
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

//append child nodes to its parent node
    task_el.appendChild(task_content_el);

//create task input element
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

//Buttons
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

//Edit button
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

//Delete Button
    const task_delete_el = document.createElement('delete');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

//Append buttons to action elements
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

// Append action elements to task element
    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

// reset original input value
    input.value = '';

//Add event listener to edit button to edit input
    task_edit_el.addEventListener('click', () => {
//foundational code
    task_input_el.removeAttribute('readonly');
    task_input_el.focus();
    task_edit_el.innerHTML = 'Save';

    if(task_edit_el.innerHTML.toUpperCase() == 'EDIT') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerHTML = 'Save';
     } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerHTML = 'Edit';
     };
    
    });

//Add delete event listener
    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el);

    });
});
})
