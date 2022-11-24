let rootUl = document.querySelector('.todo');
let todoInput = document.querySelector('input');
const baaseURL = `https://basic-todo-api.vercel.app/api/`;

function handleDelete(id) {
    fetch(baaseURL + `todo/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(() => {
        dispalyTodos();
      });
}

function handleToggle(id, status) {
    let data = {
        todo: {
            isCompleted: !status
        }
    }
    fetch(baaseURL + `todo/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(() => {
        dispalyTodos();
      });
}

function handleEdit(event, id, title) {
    // console.log(event.target.parentElement);



      let input = document.createElement('input');
    //   input.type = 'text';
      input.value = title;
      input.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 && event.target.value) {
        let data = {
        todo: {
            title: event.target.value,
        }
    }
    fetch(baaseURL + `todo/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(() => {
        dispalyTodos();
      });
        }
      })
      let p = event.target;
      let parent = event.target.parentElement;
      console.log(input, p, parent);
      parent.replaceChlid(input, p);
      
      
      
}

function createUi(data) {
    rootUl.innerHTML = '';
        data.forEach((todo) => {
            let li = document.createElement('li');
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = todo.isCompleted;
            input.setAttribute('data-id', todo._id);
           
            let p = document.createElement('p');
            p.innerText = todo.title;
            p.addEventListener('dblclick', (event) => handleEdit(event, todo._id, todo.title));
            let span = document.createElement('span');
            span.innerText = '❎';
            span.setAttribute('data-id', todo._id);
            li.append(input, p, span);

            rootUl.append(li);
        })
}

function dispalyTodos() {
    fetch(baaseURL + 'todo')
    .then((res) => res.json())
    .then((allTodos) => {
        createUi(allTodos.todos);
    })
}

function addTodo(event) {
    if(event.keyCode === 13 && event.target.value.trim()) {
        let data = {
            todo: {
                title: event.target.value,
                isCompleted: false,
            },
        };
        fetch(baaseURL + "todo", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(() => {
            event.target.value = '';
            dispalyTodos();
          })
    }

}

todoInput.addEventListener('keyup', addTodo)

dispalyTodos();