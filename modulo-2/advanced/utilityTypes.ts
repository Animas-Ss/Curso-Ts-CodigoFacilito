// TypeScript tiene tipos ya creados o utilidades que podemos usar la documentacion los aclara a todos
//ejemplos
interface Task{
    id: number;
    title: string;
    description: string;
};

//Partial<T>
// permite que nuestros claves del objeto que le pasemos sean opcionales
function updateTask(id: string, task: Partial<Task>){
    // cuando actualizamos una tarea no necesitamos enviar todos los datos sino el campo a actualizar
    //por lo cual no podemos decir que la tarea que amndamos sea como nuestra interface
    // aca es cuando usamos el Partial que es una utilidad de TS nos peormite hacer una copia con todos los campos opcionales de nuestra interface
    // y asi actualizar el campo que queremos
    console.log("Actualizando tarea")
}

const newTask = { title: "Ricardo"};

updateTask('3', newTask)