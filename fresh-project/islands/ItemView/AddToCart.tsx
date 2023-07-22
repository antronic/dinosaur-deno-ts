import type { Signal } from "@preact/signals";
import type { ItemInfo } from "../../routes/item/[item_id].tsx";
import Quantity from "./Quantity.tsx";
import { commaFormat } from "../../utils.ts";

interface AddToCartProps {
  count: Signal<number>;
  max?: number;
  itemInfo: ItemInfo;
  cartItemAmount: Signal<number>;
}

export default function AddToCart(props: AddToCartProps) {
  function onAddItemToCart() {
    props.cartItemAmount.value += props.count.value;
    props.count.value = 1;
  }

  return (
    <div>
      <div className="flex mt-6">
        <Quantity quantity={props.count}/>

        <button onClick={onAddItemToCart} className="ml-4 px-4 py-2 bg-venice-blue-900 text-white">Add to Cart</button>
      </div>
      <div className="mt-2 text-2xl">
        <p>Total ${commaFormat(props.count.value * props.itemInfo.price)}</p>
      </div>
    </div>
  )
}