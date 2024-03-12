import { useRouteContext } from '/:core.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function getMeta() {
  return { title: 'Todo List — Using Store' }
}

export default function Index(props) {
  const { actions, state, snapshot } = useRouteContext()
  const [input, setInput] = useState(null)
  const addItem = async (value) => {
    await actions.todoList.add(state, value)
    input.value = ''
  }
  return (
    <>
      <h2>Todo List — Using Store</h2>
      <ul>
        {snapshot.todoList.map((item, i) => {
          return (
            <li
              key={`item-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
            >
              {item}
            </li>
          )
        })}
      </ul>
      <div>
        <input ref={setInput} />
        <button type="button" onClick={() => addItem(input.value)}>
          Add
        </button>
      </div>
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
      <p>⁂</p>
      <p>
        When you navigate away from this route, any additions to the to-do list
        are not lost, because they're bound to the global application state.
      </p>
    </>
  )
}
