import Button from '@renderer/components/button'
import { Search } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home(): JSX.Element {
  return (
    <div className="flex h-full flex-col gap-8">
      <HomeHeader />
      <Tabs />
      <Outlet />
    </div>
  )
}

function HomeHeader(): JSX.Element {
  return (
    <header className="flex justify-between">
      <Logo />
      <Button>
        <Search size={32} />
      </Button>
    </header>
  )
}

function Logo(): JSX.Element {
  return (
    <h1 className="relative font-sans text-4xl font-bold">
      Music Box <span className="relative -top-6 right-10 text-lg text-yellow-500">Pro</span>
    </h1>
  )
}

function Tabs(): JSX.Element {
  const tabs = [
    { name: 'Populares', path: '/home/populares' },
    { name: 'Artists', path: '/home/artistas' },
    { name: 'Albums', path: '/home/albumes' },
    { name: 'Songs', path: '/home/canciones' }
  ]

  const activeLinkStyle =
    'text-black after:absolute text-gray-800 after:-bottom-[10px] after:left-0 after:h-[3px] after:w-full after:bg-[#ffce00] after:content-[""]'

  return (
    <nav className="flex items-center justify-between text-gray-400">
      {tabs.map(({ name, path }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            'relative font-sans text-lg font-semibold  hover:text-gray-800'.concat(
              isActive ? activeLinkStyle : ''
            )
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}
