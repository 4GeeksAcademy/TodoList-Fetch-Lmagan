import React, {useState, useEffect} from "react";





const Home = () => {

    const [Task, setTasks] = useState([])
    const [NewTask , setNewTask] = useState("")

    const crearLMagan = async () => {
        await fetch("https://playground.4geeks.com/todo/users/LMagan",{method: "POST"})

    }
    const PostNewTask = async () => {
         await fetch("https://playground.4geeks.com/todo/todos/LMagan", {
            method: "POST",
            body: JSON.stringify(
                {
                    "label": NewTask,
                    "is_done": false
                }
            ),
            headers:{
                "Content-Type": "application/json"
            }
        })
        getTasks()
        setNewTask("")
    }

const getTasks = async () => {
        const resp = await fetch("https://playground.4geeks.com/todo/users/LMagan")

        if (!resp.ok){
            crearLMagan()
        }
        else {
            const data = await resp.json()
            setTasks(data.todos)
        }
    }
    useEffect(() =>{
        getTasks()
    },[])

const deleteTask = async (id) => {
    await fetch('https://playground.4geeks.com/todo/todos/'+ id , 
        {method: "DELETE"}
    )
    setTasks(Task.filter((item) => item.id != id))

}
   


	return (
		<div className="text-center" >
		<h1 className="text-center mt-3">Todo List</h1>
        <input
        type="text"
        value={NewTask}
        onChange={
            (event)=> {setNewTask(event.target.value)}
        }
        onKeyUp={
            (event)=>{
                if (event.key == "Enter" && NewTask !=""){
                    PostNewTask()
                }

            }
        }
        />
          <ul className="notebook-list">
          {Task.map((item, index) => (
            <li key={index} className={`notebook-item`}>
              {item.label}
            
              <button onClick={() => deleteTask(item.id)} className="delete-button"><i class="fa-solid fa-x"></i></button> 
            </li>
          ))}
        </ul>

	</div>
	);
};



export default Home;

/*const [task,setTasks]= useState([]);

const ListTasks = task.map(t => <li>{ t.label }</li>)


    fetch('https://playground.4geeks.com/todo/users/LMagan', {
        method: "GET"
    })
    .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    
     })
     .then(data => {
        let todos = data["todos"];
        setTasks (todos)
     } )
     .catch(err => console.error(err));
}*/
      