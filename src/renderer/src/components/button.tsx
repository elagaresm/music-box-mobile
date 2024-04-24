import { useState } from 'react'

export default function Button({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (): void => {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }

  return (
    <div
      onClick={handleClick}
      className={`flex aspect-square items-center justify-center rounded-md ${className}`}
    >
      <button className={`${isClicked && 'press-animation'}`}>{children}</button>
    </div>
  )
}
