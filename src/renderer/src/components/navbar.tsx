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
      className={`flex h-[100px] w-full rotate-180 items-center justify-center rounded-full bg-white px-4 shadow-lg ${className}`}
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
