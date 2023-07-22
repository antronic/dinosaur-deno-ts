export default function SearchBox() {
  return (
    <>
      <div class="flex py-1 px-1 bg-white h-10">
        <input type="text" placeholder="" class="px-4 w-full text-black appearance-none"/>
        <button className="bg-venice-blue-900 px-2">
          <span className="iconify-inline" data-icon="uil:search-alt"></span>
        </button>
      </div>
    </>
  );
}