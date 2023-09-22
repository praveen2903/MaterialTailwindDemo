import NavMenu from "./Components/NavMenu/NavMenu";
import NewsData from "./Components/NewsData/NewsData";


export default function App() {
  return (
    <div className="App">
      <div className="Container mx-auto max-w-screen-xl py-4">
        <NavMenu/>
        <NewsData/>
      </div>
    </div>
  )
}