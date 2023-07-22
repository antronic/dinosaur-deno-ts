import type { Signal } from "@preact/signals";

interface QuantityProps {
  quantity: Signal<number>;
  max?: number;
}

export default function Quantity(props: QuantityProps) {
  function changeCount(action: '-' | '+') {
    const max = props.max || Infinity;

    if (action === '-') {
      props.quantity.value = Math.max(1, props.quantity.value - 1);
    }
    else if (action === '+') {
      props.quantity.value = Math.min(max, props.quantity.value + 1);
    }
  }

  return (
    <div class="flex items-center">
      <button onClick={() => changeCount('-')} class="bg-white hover:bg-gray-300 text-gray-800 text-xl font-bold py-2 px-4 border-2 border-venice-blue-900 text-venice-blue-900">
        -
      </button>
      <div className="w-16 text-center">
        <p class="text-3xl">{props.quantity}</p>
      </div>
      <button onClick={() => changeCount('+')} class="bg-white hover:bg-gray-300 text-gray-800 text-xl font-bold py-2 px-4 border-2  border-venice-blue-900 text-venice-blue-900">
        +
      </button>
    </div>
  )
}