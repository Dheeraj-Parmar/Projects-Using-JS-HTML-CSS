const todoList = [] ;


function add() { 

    // for task list
    
    const input = document.querySelector('.input') ;
    const name = input.value ;

    input.value = '';
    
    // for date list

    const todoDate = document.querySelector('.date') ;
    const dueDate = todoDate.value ;
    
    todoList.push({
            // name: name,
            // dueDate: dueDate
            name,
            dueDate
    });

    console.log(todoList);

    listOutput() ;

}

function listOutput() {

    let outputList = '' ;

    for ( let i = 0 ; i < todoList.length ; i++ ) {
        const task = todoList[i];
        
        const { name, dueDate } = task ;  // const name = task.name ;  // const dueDate = task.dueDate ;
        const html = `<div>${name}</div> <div>${dueDate}</div> <button class="remove" onclick="todoList.splice(${i},1); listOutput();">REMOVE</button>`
        outputList += html ;
       
    }

    document.querySelector('.output').innerHTML = outputList ;
}