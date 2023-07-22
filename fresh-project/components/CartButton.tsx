import { Signal } from "@preact/signals"

interface CartButtonProps {
  itemCount: Signal<number>;
}

export default function CartButton(props: CartButtonProps) {
  return (
    <div className="flex items-center">
      <span className="iconify-inline inline text-3xl" data-icon="mdi:cart"></span>
      <p className={`text-2xl ml-2 w-8 h-8 text-center rounded-full bg-red-900`}>{props.itemCount}</p>
    </div>
  )
}