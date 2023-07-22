import { Signal, useSignal } from "@preact/signals";

interface HeartButtonProps {
  likeCount: Signal<number>;
}

export default function HeartButton(props: HeartButtonProps) {
  const isLiked = useSignal<boolean>(false);

  return (
    <>
      <button class="w-8 h-8 hover:bg-gray-400 rounded-full" onClick={() => {
        isLiked.value ? props.likeCount.value-- : props.likeCount.value++;
        isLiked.value = !isLiked.value;
      }}>
        <span className="iconify-inline inline" data-icon={isLiked.value ? 'mdi:heart' : 'mdi:heart-outline'}></span>
      </button>
      {props.likeCount.value}
    </>
  )
}