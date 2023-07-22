import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import Navbar from "../../components/common/Navbar.tsx";
import Rating from "../../components/Rating.tsx";
import Quantity from "../../islands/ItemView/Quantity.tsx";
import { useSignal } from "@preact/signals";
import AddToCart from "../../islands/ItemView/AddToCart.tsx";
import { commaFormat } from "../../utils.ts";
import Carousel from "../../islands/ItemView/Carousel.tsx";
import UserReviewList from "../../islands/ItemView/UserReviewList.tsx";

export type ItemReview = {
  rating: number;
  content: string;
  username: string;
  userImg: string;
  itemId: string;
}

export type ItemInfo = {
  name: string;
  rating: number;
  price: number;
  images: string[];
  reviews: ItemReview[];
}

const itemInfo: ItemInfo = {
  name: "Delicious Mammoth Bone",
  rating: 4,
  price: 100,
  images: [
    "1932-01.jpeg", "1932-02.jpg", "1932-03.jpg", "1932-04.jpeg", "1932-06.jpeg", "1932-07.jpeg",
  ],
  reviews: [
    {
      rating: 5,
      itemId: "1932",
      username: "SID THE MAMMOTH HUNTER",
      content: "IT took me back to the time of woolly mammoths! The taste was intriguing, and it felt like a unique culinary adventure. If you're curious about prehistoric flavors, give it a go!",
      userImg: "user-01.png",
    },
    {
      rating: 4,
      itemId: "1932",
      username: "Flintstone",
      content: `"Delicious Mammoth Bone" is a true time-travel treat! Just like Fred Flintstone's favorite flavors – bold, brontosaurus-approved, and absolutely yummy! Yabba Dabba Delightful! 🦴🍖 #BedrockBites #FlintstoneFan`,
      userImg: "user-02.png",
    },
  ],
}

export default function ItemPage(props: PageProps) {
  const itemId = props.params.item_id;
  const count = useSignal(1);

  return (
    <>
      <Head>
        <script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
        <link rel="stylesheet" href="/styles/item-page.css" />
      </Head>
      {/* Navbar */}
      <Navbar />


      {/* Item zone */}
      <div className="container bg-gray-200 mx-auto mt-8 px-4 py-6">

        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-1">
            <p>Product {' > '} {itemId}</p>
            {/* Image Carousel */}
            <div className="py-2">
              <Carousel images={itemInfo.images} />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-5xl text-venice-blue-900">
              {itemInfo.name}
            </h2>

            <Rating rating={itemInfo.rating} />

            <p className="text-4xl py-2">
              ${commaFormat(itemInfo.price)}
            </p>

            <AddToCart count={count} itemInfo={itemInfo}/>
          </div>
        </div>
        {/* Item Info */}
        {/* Item Name */}
        {/* Item Rating */}
        {/* Item price */}

        {/* Item action island */}
        {/* Quantity */}
        {/* Add to cart */}

        {/* Review */}
        {/* Review card */}

        <div className="mt-6">
          <h2 className="text-3xl text-black">
            Reviews
          </h2>

          <div className="mt-2">
            <UserReviewList reviews={itemInfo.reviews} />
          </div>
        </div>
      </div>

    </>
  )
}