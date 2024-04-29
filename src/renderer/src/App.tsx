import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'

export default function App(): JSX.Element {
  const location = useLocation()

  console.log(location.pathname)
  return (
    <div className="flex h-dvh flex-col">
      <div className="h-full p-10 pb-4">
        <Outlet />
      </div>
      <Navbar className="mt-auto shrink-0" />
    </div>
  )
}
