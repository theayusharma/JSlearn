const fs = require('fs');
const filePath = "./tasks.json";



const loadtask = () => {
    try {
        const bufferdata = fs.readFileSync(filePath);
        const bufferJson = bufferdata.toString();
        return JSON.parse(bufferJson); 
    } catch (error) {
        return []
    }
}

const addTask = (task) =>{
    const tasks = loadtask();
    tasks.push({task});
    savetasks(tasks)
    console.log("the task is saved",task);
}

const list = () => {
    const tasks = loadtask();
    tasks.forEach((task,index) => console.log(`${index+1}, - ${task.task}`));
}

const savetasks= (tasks) =>{
    const dataJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJson);
}
// const list =+


const command = process.argv[2]
const arguement = process.argv[3]

if (command ==="add"){
    addTask(arguement);
} else if (command === "list"){
    list()
} else if (command === "remove"){
    removeTask(parseInt(arguement));
} else {
    console.log("command not found");
}