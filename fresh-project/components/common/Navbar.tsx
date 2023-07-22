import SearchBox from "./SearchBox.tsx"

const suggestProducts = [
  "Snack Pack",
  "Plush Toy",
  "Water Bottle",
  "Sticker Set",
  "Backpack",
  "Puzzle",
  "T-Shirt",
  "Party Supplies",
  "Keychain",
  "Coloring Book",
  "Hat",
  "Pencil Case",
  "Umbrella",
  "Slippers",
  "Model Kit",
  "Bedding Set",
  "Mobile Phone Case",
  "Stationery Set",
  "Tote Bag",
  "Wall Decals",
  "Socks",
  "Bookmarks",
  "Backpack Clip",
  "Cookie Cutter Set",
  "Lunch Box",
  "Earrings",
  "Night Light",
  "Alarm Clock",
  "Sunglasses",
  "Watercolor Set"
]

export default function() {

  function listSuggestion() {
    return suggestProducts.splice(0, 10).map((product) => {
      return (
        <span className="text-sm px-4 text-gray-200 hover:underline">{product}</span>
      )
    })
  }

  return (
    <nav className="bg-venice-blue-900 text-white w-full">
      <div className="px-4 py-2 flex items-center container mx-auto">
        <img src="/img/dinomall-logo.png" class="h-16" />
        <h1>
          <span className="text-4xl block">DINOMALL</span>
          <span className="text-gray-300 block -mt-2">DALL FOR DINOMAUR</span>
        </h1>

        <div style={{ width: '60%' }} class="ml-24">
          <SearchBox />
        </div>
      </div>

      <div className="px-16 py-1 bg-venice-blue-950 font-default text-center">
        {listSuggestion()}
      </div>
  </nav>
  )
}