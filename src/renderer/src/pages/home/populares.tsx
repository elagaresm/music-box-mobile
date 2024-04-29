import Button from '@renderer/components/button'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { useState } from 'react'

const Populares = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col gap-7">
      <TopAlbums />
      <TopSongs />
    </div>
  )
}

export default Populares

function TopAlbums(): JSX.Element {
  const [scrollValue, setScrollValue] = useState(0)
  const [enableLeftButton, setEnableLeftButton] = useState(false)

  const arr = Array.from({ length: 8 })

  console.log(scrollValue)

  const handleRightClick = (): void => {
    setScrollValue((prev) => {
      if (prev < childWidthWithGap * (arr.length - 3)) {
        return prev + childWidthWithGap
      }
      return prev
    })
  }

  const handleLeftClick = (): void => {
    setScrollValue((prev) => {
      if (prev > 0) {
        setEnableLeftButton((prev) => !prev)
        return prev - childWidthWithGap
      }
      return prev
    })
  }

  const childWidthWithGap = 618 / 4 + 20

  return (
    <div className="flex flex-col justify-center gap-4">
      <h3 className="w-full font-sans text-3xl font-bold">Albumes Populares</h3>

      <div className="flex items-center justify-between">
        <Button>
          <ChevronLeft onClick={handleLeftClick} size={32} className="shrink-0 cursor-pointer" />
        </Button>
        <div className="flex gap-5 overflow-hidden">
          {arr.map((_, index) => (
            <Album key={index} translateValue={scrollValue} />
          ))}
        </div>
        <Button>
          <ChevronRight onClick={handleRightClick} size={32} className="shrink-0 cursor-pointer" />
        </Button>
      </div>
    </div>
  )
}

function Album({ translateValue }: { translateValue?: number }): JSX.Element {
  return (
    <div
      style={{ transform: `translateX(-${translateValue}px` }}
      className="shrink-0 grow-0 basis-1/4 translate-x-5 cursor-pointer overflow-hidden rounded-md duration-500"
    >
      <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png"></img>
    </div>
  )
}

function TopSongs(): JSX.Element {
  return (
    <div className="font-sans text-3xl font-bold">
      <h3 className="mb-4">Canciones Populares</h3>
      <div className="scrollbar flex h-[400px] flex-col overflow-y-auto px-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Song key={index} />
        ))}
      </div>
    </div>
  )
}

function Song(): JSX.Element {
  return (
    <div className="flex h-[90px] items-center justify-between gap-10 border-b-2 p-[10px]">
      <img
        className="border- aspect-square h-[70px] rounded-md"
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
