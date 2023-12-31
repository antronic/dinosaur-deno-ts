import { useSignal } from "@preact/signals";

import Rating from "../Rating.tsx";
import type { ItemReview } from "../../routes/item/[item_id].tsx";
import HeartButton from "./HeartButton.tsx";

interface UserReviewCardProps {
  review: ItemReview
}

export default function UserReviewCard(props: UserReviewCardProps) {
  const likeCount = useSignal<number>(props.review.likeCount)

  return (
    <div class="grid grid-cols-8 gap-x-4 gap-2 p-4 bg-gray-300" style={{ width: '60%' }}>
      <div class="col-span-1">
        <img class="w-full" src={`/img/items/${props.review.itemId}/users/${props.review.userImg}`} />
      </div>
      <div class="flex flex-col gap-2 col-span-7">
        <div className="flex justify-between items-center">
          <p class="text-3xl font-bold">{props.review.username}</p>
          <div>
            <HeartButton likeCount={likeCount} />
          </div>
        </div>
        <div class="flex gap-4">
          <Rating rating={props.review.rating} /> <p class="text-2xl">{props.review.rating}/5</p>
        </div>
      <p class="text-2xl">{props.review.content}</p>
      </div>
    </div>
  );
}