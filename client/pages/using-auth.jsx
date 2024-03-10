import { useRouteContext } from '/:core.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const layout = 'auth'

export function getMeta() {
  return { title: 'Using Custom Layout' }
}

export default function Index(props) {
  const { snapshot, state, actions } = useRouteContext()
  const [input, setInput] = useState(null)
  const addItem = async (value) => {
    await actions.todoList.add(state, value)
    input.value = ''
  }
  return (
    <>
      <h2>Todo List — Using Custom Layout</h2>
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
        This example is exactly the same as{' '}
        <Link to="/using-store">/using-store</Link>, except it's wrapped in a
        custom layout which blocks it until
        <code>user.authenticated</code> is <code>true</code> in the global
        state.
      </p>
    </>
  )
}
