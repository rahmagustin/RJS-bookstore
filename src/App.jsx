import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./assets/Pages";
import Books from "./assets/Pages/books";
import Teams from "./assets/Pages/team";
import Contacts from "./assets/Pages/contact";

function App() {
  return (
    <>
      <div id="home" className="container">

        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Teams />} />
          <Route path="contact" element={<Contacts />} />
        </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App;