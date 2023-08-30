import { useEffect, useState } from "react"

import "./App.css"

const todos = []

function App() {
  const [list, setList] = useState(todos)
  const [task, setTask] = useState({ name: "", completed: false })
  const [isNull, setIsNull] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.name.trim() !== "") {
      setList([...list, task])
      setTask({ name: "", completed: false })
      // localStorage.setItem("todos", JSON.stringify(list))
    } else {
      console.log("Cannot be null")
    }
  }

  useEffect(() => {
    if (task.name.trim() === "") {
      setIsNull(true)
    } else {
      setIsNull(false)
    }
  }, [task.name])

  return (
    <div className="p-8 w-full flex flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-3"
      >
        <input
          onChange={(e) => {
            setTask({ ...task, name: e.target.value, id: list.length + 1 })
          }}
          value={task.name}
          className={
            isNull
              ? "border-2 p-2 border-red-500 rounded-xl focus:outline-none"
              : "border-2 p-2 border-green-500 rounded-xl focus:outline-none"
          }
          type="text"
          placeholder="Enter Todo"
        />
        <input
          className="cursor-pointer px-4 py-2 bg-slate-800 hover:opacity-80 rounded text-white"
          type="submit"
          value="Add Todo"
        />
      </form>
      <div className="mt-10">
        <span className="font-bold text-3xl">Todos</span>
        <div className="flex flex-wrap gap-3">
          {list.map((todo) => (
            <div
              className="p-2 border-2 w-52 rounded-xl flex flex-col items-center space-y-4"
              key={todo.id}
            >
              <span
                className={
                  todo.completed
                    ? "text-xl font-bold duration-300 transition ease-in-out line-through"
                    : "text-xl font-bold"
                }
              >
                Todo: {todo.name}
              </span>
              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={() => {
                    setList(
                      list.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                    // localStorage.setItem("todos", JSON.stringify(list))
                  }}
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Completed
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
