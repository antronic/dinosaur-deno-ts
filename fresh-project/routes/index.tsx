import Redirect from '../islands/common/Redirect.tsx'

export default function Home() {

  return (
    <>
      <p>Navigating to /item/1932</p>
      <Redirect path="/item/1932" />
    </>
  )
}
