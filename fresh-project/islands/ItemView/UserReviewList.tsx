import { ItemReview } from "../../routes/item/[item_id].tsx";
import UserReviewCard from "./UserReviewCard.tsx";

interface UserReviewListProps {
  reviews: ItemReview[];
}

export default function UserReviewList(props: UserReviewListProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.reviews.map((review) => (
        <UserReviewCard review={review} />
      ))}
    </div>
  )
}