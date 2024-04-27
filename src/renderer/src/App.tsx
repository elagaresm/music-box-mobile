import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
export default function App(): JSX.Element {
  return (
    <div className="relative h-dvh p-10 pb-[100px]">
      <div className="">
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}
