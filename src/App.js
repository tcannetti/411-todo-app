import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"


function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doc Appt',
        day: "Feb 5th",
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: "Feb 12th",
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Appt',
        day: "Feb 20th",
        reminder: true,
      },
    ]
  )

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
          !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ('No Tasks to Show'
      )}    
    </div>
  );
}

export default App;
