
const todoModel = ( () => {

    let todo = [];


    const addTodo = (formData) => {
        const newTodo = {
            title: formData.title,
            description: formData.desc,
            dueDate: formData.dueDate,
            priority: formData.priority,
            notes: formData.notes,
            project: formData.project,
            checkList:[]
        }
 
        todo.push(newTodo);
     
    };


    const deleteTodo = (index) => {

        todos.splice(index,1);
    }




    const getTodos = () => {
        return todo;
    }



    return {addTodo,deleteTodo,getTodos}
})();


const projectModel = ( () => {

    let projects = [];


    const addToProject = (todo) => {
        projects.push(todo);
        console.log(projects);
    };



    const getProjects = () =>  projects;
    


    return {addToProject,getProjects}
})();


export {todoModel,projectModel};