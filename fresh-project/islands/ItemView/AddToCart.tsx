import type { Signal } from "@preact/signals";
import type { ItemInfo } from "../../routes/item/[item_id].tsx";
import Quantity from "./Quantity.tsx";
import { commaFormat } from "../../utils.ts";

interface AddToCardProps {
  count: Signal<number>;
  max?: number;
  itemInfo: ItemInfo;
}

export default function AddToCart(props: AddToCardProps) {
  return (
    <div>
      <div className="flex mt-6">
        <Quantity quantity={props.count}/>
      </div>
      <div className="mt-2 text-2xl">
        <p>Total ${commaFormat(props.count.value * props.itemInfo.price)}</p>
      </div>
    </div>
  )
}