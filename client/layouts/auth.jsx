import { useRouteContext } from '/:core.jsx'
import { Suspense } from 'react'

export default function Auth({ children }) {
  const { actions, state, snapshot } = useRouteContext()
  const authenticate = () => actions.authenticate(state)
  return (
    <Suspense>
      {snapshot.user.authenticated ? (
        children
      ) : (
        <Login onClick={() => authenticate()} />
      )}
    </Suspense>
  )
}

function Login({ onClick }) {
  return (
    <>
      <p>This route needs authentication.</p>
      <button type="button" onClick={onClick}>
        Click this button to authenticate.
      </button>
    </>
  )
}
