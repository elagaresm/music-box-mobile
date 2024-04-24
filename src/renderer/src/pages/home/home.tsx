import Button from '@renderer/components/button'
import { Search } from 'lucide-react'

export default function Home(): JSX.Element {
  return (
    <>
      <HomeHeader />
      <Tabs />
    </>
  )
}

function HomeHeader(): JSX.Element {
  return (
    <div className="mb-7 flex justify-between px-2">
      <h1 className="relative font-sans text-3xl font-bold">
        Music Box <span className="relative -top-5 right-9 text-base text-yellow-500">Pro</span>
      </h1>

      <Button>
        <Search size={24} />
      </Button>
    </div>
  )
}

function Tabs(): JSX.Element {
  const tabs = [
    { name: 'Songs', path: '/songs' },
    { name: 'Albums', path: '/albums' },
    { name: 'Artists', path: '/artists' }
  ]

  return (
    <div className="relative flex items-center justify-around">
      {tabs.map(({ name, path }, index) => (
        <a
          key={index}
          href={path}
          className="relative font-sans text-lg font-semibold text-gray-500 hover:text-gray-800"
        >
          {name}
        </a>
      ))}
    </div>
  )
}
