var inp = document.getElementById('inp');
var todoList = document.getElementById('todoList');
var todoData = [];


function addTodo(){
    todoData.push(inp.value);
    inp.value = ""
    // console.log(todoData);
    render();
    
}

function render(){
    todoList.innerHTML = '';
    for (var i = 0; i < todoData.length; i++){
        todoList.innerHTML += `<li> ${todoData[i]} <button class="li-btn" onclick="editTodo(${i})"> Edit </button> <button class="li-btn" onclick="deleteTodo(${i})"> Delete </button> </li>`;
    }
}

function editTodo(indexNumber){
    // console.log(indexNumber);
    todoData[indexNumber] = prompt("Enter your value");
    render();
    console.log(todoData);
    // console.log(todoData);
}
function deleteTodo(indexNumber){
    // console.log(indexNumber);
    todoData.splice(indexNumber,1)
    render();
    console.log(todoData);
}

function deleteAll(){
    todoData = [];
    todoList.innerHTML = "";
}