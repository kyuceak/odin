import { todoModel, projectModel } from "./todoModel";
import { todoView } from "./todoView";

const todoController = (() => {
    const handleFormSubmit = (formData) => {
        // Add to todo model
       
        todoModel.addTodo(formData);

      

        // Refresh view or notify user (not implemented yet)
        console.log("Form submitted and added to projects!");
    };

    const init = () => {

        projectModel.addToProject({projectName: "Default"})

        todoView.init();

        // Example binding - replace with real form handling
        const form = document.querySelector("#todo-view");
        form.addEventListener("submit", (event) => {
          
            event.preventDefault();
            
            console.log(form.querySelector("[name='priority']"));
            const formData = {
                title: form.querySelector("[name='title']").value, // Use querySelector for nested elements
                desc: form.querySelector("[name='desc']").value,
                dueDate: form.querySelector("[name='dueDate']").value,
                priority: form.querySelector("[name='priority']").value,
                notes: form.querySelector("[name='notes']").value,
                project: Number(form.querySelector("[name='selectedProject']").value)
            };
           
            handleFormSubmit(formData);
            form.reset(); 
        });

        const form2 = document.querySelector(".project-form");
        form2.addEventListener("submit" , (event) => {

            event.preventDefault();

            const projectData = {
                projectName: event.target.projectName.value,
            }

            projectModel.addToProject(projectData);
            RenderProjectOpts();
            form2.reset();
            
        });

        const RenderProjectOpts = () => {
            const selectProject = document.getElementById("selectedProject");
            selectProject.textContent = "";
        projectModel.getProjects().forEach( (project,index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = project.projectName;
            selectProject.appendChild(option);
        });

        }

        RenderProjectOpts();
        


    };

    return { init };
})();

export { todoController };
