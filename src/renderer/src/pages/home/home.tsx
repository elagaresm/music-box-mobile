import Button from '@renderer/components/button'
import { Ellipsis, Search } from 'lucide-react'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <HomeHeader />
      <Tabs />
      <TopAlbums />
      <TopSongs />
    </div>
  )
}

function Logo(): JSX.Element {
  return (
    <h1 className="relative font-sans text-4xl font-bold">
      Music Box <span className="relative -top-6 right-10 text-lg text-yellow-500">Pro</span>
    </h1>
  )
}

function HomeHeader(): JSX.Element {
  return (
    <div className="flex justify-between">
      <Logo />
      <Button>
        <Search size={32} />{' '}
      </Button>
    </div>
  )
}

function Tabs(): JSX.Element {
  const tabs = [
    { name: 'Populares', path: '/genres', active: true },
    { name: 'Artists', path: '/artists', active: false },
    { name: 'Albums', path: '/albums', active: false },
    { name: 'Songs', path: '/songs', active: false }
  ]

  const activeLinkStyle =
    'text-black after:absolute after:-bottom-[10px] after:left-0 after:h-[3px] after:w-full after:bg-[#ffce00] after:content-[""]'

  return (
    <div className="relative flex items-center justify-between text-gray-400">
      {tabs.map(({ name, path, active }, index) => (
        <a
          key={index}
          href={path}
          className={`relative font-sans text-lg font-semibold  hover:text-gray-800 ${active && activeLinkStyle}`}
        >
          {name}
        </a>
      ))}
    </div>
  )
}

function TopAlbums(): JSX.Element {
  return (
    <div className="font-sans text-3xl font-bold">
      <h3 className="mb-[40px]">Albumes Populares</h3>
      <div className="flex w-full gap-10 overflow-x-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <Album key={index} />
        ))}
      </div>
    </div>
  )
}

function Album(): JSX.Element {
  return (
    <div className="w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-md">
      <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png"></img>
    </div>
  )
}

function TopSongs(): JSX.Element {
  return (
    <div className="font-sans text-3xl font-bold">
      <h3 className="mb-[40px]">Canciones Populares</h3>
      <div className="flex h-[300px] flex-col gap-4 overflow-y-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <Song key={index} />
        ))}
      </div>
    </div>
  )
}

function Song(): JSX.Element {
  return (
    <div className="flex h-[90px] items-center justify-between gap-10 p-[10px]">
      <img
        className="aspect-square h-[70px] rounded-md"
        src="https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png"
      />
      <div className="flex grow flex-col">
        <span className="text-lg">Un coco</span>
        <span className="text-base font-medium text-[#B7B8C1]">12,098 reproducciones</span>
      </div>
      <div className="flex items-center justify-center">
        <Ellipsis className="cursor-pointer" />
      </div>
    </div>
  )
}
