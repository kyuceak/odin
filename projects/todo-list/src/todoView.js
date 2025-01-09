


// section switch betweem buttons

import { projectModel, todoModel } from "./todoModel";




const todoView = (() => {

    const views = document.querySelectorAll(".view")
    const buttons = document.querySelectorAll(".form-headers button");
    const toggleButtonSelection = () => {

        
        buttons.forEach( (button) => {
        button.addEventListener("click", () => {
    
            buttons.forEach(btn => btn.classList.remove("selected"));
            
            button.classList.add("selected");


             let viewId = "";


            switch(button.id){
                case "project-btn":
                    viewId = "project-view";
                    break;
                case "todo-btn":
                    viewId = "todo-view";
                    break;
                case "list-btn":
                    viewId = "list-view";
                  
                    break;
                default:
                    viewId= "todo-view";
            }

            views.forEach(view => view.classList.add("hidden"));
            document.getElementById(viewId).classList.remove("hidden");
            if(viewId == "list-view"){
                renderProjectList();
            }

        });
    });

    }

    const toggleTodos = (projectid) => {
        const todosContainer = document.getElementById(`todos-${projectid}`);    
        todosContainer.classList.toggle("hidden");
    }


    const renderProjectList = () => {

        const projectList = document.getElementById("project-list");
        console.log(projectList);
        projectList.textContent = "";

        const projects = projectModel.getProjects();
        const todos = todoModel.getTodos();

        projects.forEach( (project,index) => {
            const dropdown = document.createElement("button");
            dropdown.type = "button"
            dropdown.className= "project-dropdown";
            dropdown.textContent = project.projectName;
            dropdown.addEventListener("click", () => toggleTodos(index));

            const todosContainer = document.createElement("div");
            todosContainer.className = "todos hidden";
            todosContainer.id = `todos-${index}`;

            const projectTodos = todos.filter((todo) =>{
                console.log("deneme1: ", todo);
                console.log("deneme2", index);

                return todo.project == index
            }
                 );
            console.log("deneme:",projectTodos);

            projectTodos.forEach( (todo) => {
                const todoItem = document.createElement("div");
                todoItem.className = "todo-item";
                const h1 = document.createElement("h1");
                const p2 = document.createElement("p");
                const date = document.createElement("p");
                const prio = document.createElement("p");
                const notes = document.createElement("p");

                const topdiv = document.createElement("div");
                topdiv.classList="todotop";

                const botdiv = document.createElement("div");
                botdiv.classList="todobot";

                botdiv.appendChild(p2);
                botdiv.appendChild(notes);



                topdiv.appendChild(date);
                topdiv.appendChild(prio);

                h1.textContent = todo.title;
                p2.textContent = `Description: ${todo.description}`;
                date.textContent = `Due date: ${todo.dueDate}`;
                prio.textContent = `Priorty: ${todo.priority}`;
                notes.textContent = `Notes: ${todo.notes}`;


                todoItem.appendChild(topdiv);
                todoItem.appendChild(h1);
                todoItem.appendChild(botdiv);
              


                todosContainer.appendChild(todoItem);
        });

        projectList.appendChild(dropdown);
        projectList.appendChild(todosContainer);



    });
    }
  




    const init = () => {
        toggleButtonSelection();
        
        document.getElementById("todo-btn").click();


    };


    return {init};
})();



export {todoView};