import { useSignal } from "@preact/signals"

interface CarouselProps {
  images: string[];
}

export default function Carousel(props: CarouselProps) {
  const currentImage = useSignal(0);

  function changeImage(delta: number) {
    if (currentImage.value + delta < 0) {
      currentImage.value = props.images.length;
    }

    currentImage.value = Math.abs((currentImage.value + delta) % props.images.length);
  }

  return (
    <>
      <div>
          <div className="flex justify-center relative border-2 border-venice-blue-900">
          <button onClick={() => changeImage(-1)} class="h-full absolute top-0 left-0 text-center text-transparent hover:text-white text-3xl hover:bg-black opacity-25 w-16">
            <span className="iconify-inline" data-icon="uil:angle-left"></span>
          </button>
          <button onClick={() => changeImage(1)} class="h-full absolute top-0 right-0 text-right text-transparent hover:text-white text-3xl hover:bg-black opacity-25 w-16">
            <span className="iconify-inline inline" data-icon="uil:angle-right"></span>
          </button>

          <img className="w-full" src={`/img/items/1932/${props.images[currentImage.value]}`} />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {props.images.map((image, index) => (
          <button onClick={() => currentImage.value = index} className={`
            w-4 h-4 border-2 border-venice-blue-900 rounded-full
            ${index === currentImage.value ? "bg-venice-blue-900" : "bg-white"}
          `}>
          </button>
        ))}
      </div>
    </>
  )
}