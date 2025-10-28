import { useState } from "react";

function App() {


const [total,setTotal] = useState(0);
const [done,setDone] = useState(0);
const [task,setTask] = useState([]);
const[inputValue,setInputValue] = useState("");

const handleAdd =() =>{
  setTotal(total + 1);
  setTask([...task,{text:inputValue,isDone:false}]);
  setInputValue("");
}

const handleDone = (index) => {
  const updatedTask = task.map((t, i) =>
    i === index ? { ...t, isDone: !t.isDone } : t
  );
  setTask(updatedTask);

  const completedCount = updatedTask.filter((t) => t.isDone).length;
  setDone(completedCount);
};


return (
    
    < div className="flex flex-col justify-center items-center gap-8">
      <div className="flex bg-red-300 gap-8 w-[700px] h-[100px] justify-center items-center mt-8 border-4 rounded-lg text-xl font-bold text-red-800 border-black">
        <p>Total No of Todos :{total} </p>
        <p>Completed Todos : {done}</p>
      </div>
      <div className="flex gap-8 ">
          <input type="text" placeholder="Enter Your Task " value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border-2 text-lg p-4 w-[500px] rounded-lg"/>
          <button className="bg-green-400 p-4 border-2 border-green-700 rounded-lg text-lg font-bold" onClick={handleAdd}>Add</button>
      </div>
      <div className="flex flex-col gap-4">
        {task.map((t, index) => (
          <div key={index} className="flex gap-8">
            <input  type="text" placeholder="task 1 " value={t.text} className={`border-2 text-lg p-4 w-[500px] rounded-lg ${t.isDone ? "line-through" : ""}`}/>
        <button className="bg-amber-500 p-4 border-2 border-amber-900 text-base font-bold rounded-lg" onClick={() => handleDone(index)}>Done</button>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default App
