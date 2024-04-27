import Button from '@renderer/components/button'
import { Library, Search, ListMusic } from 'lucide-react'

type NavbarProps = {
  className?: string
}

export default function Navbar({ className }: NavbarProps): JSX.Element {
  const buttons = [
    { name: 'Library', icon: <Library size={32} /> },
    { name: 'Search', icon: <Search size={32} /> },
    { name: 'ListMusic', icon: <ListMusic size={32} /> }
  ]

  return (
    <nav
      className={`absolute bottom-0 left-0 right-0 flex h-[100px] w-full rotate-180 items-center justify-center overflow-hidden rounded-full px-4 shadow-lg ${className} bg-white`}
    >
      <div className="flex w-full rotate-180 items-center justify-around">
        {buttons.map(({ name, icon }) => {
          return (
            <Button key={name} className="h-16 cursor-pointer">
              {icon}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
