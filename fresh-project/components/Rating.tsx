interface RatingProps {
  rating: number;
  max?: number;
}
export default function Rating(props: RatingProps) {
  function listRating() {
    const max = props.max || 5;

    return Array.from({ length: max }, (_, i) => {
      return (
        <span class={`iconify-inline inline text-3xl ${i + 1 <= props.rating ? "text-red-400" : "text-gray-800" }`} data-icon={i + 1 <= props.rating ? "ph:bone-fill" : "ph:bone" }></span>
      )
    })
  }

  return (
    <>
      <div>
        {listRating()}
      </div>
    </>
  )
}