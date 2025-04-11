function App() {
  return (
    <>
      {/* Header */}
      <div id="home" className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book-open-reader fa-2xl" style={{ color: "#1E3050" }}></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Filosofi Teras</h1>
            <p className="lead">Temukan ketenangan batin dan ketangguhan mental melalui konsep Stoikisme yang diuraikan dalam buku ini. Panduan hidup modern dari kebijaksanaan klasik!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded lg-2" src="src/assets/img/filosofi.jpg" alt="Filosofi Teras Book Cover" width="100%" />
          </div>
        </div>

        {/* Product List */}
        <section id="book" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">Kumpulan buku terbaik pilihan pembaca! Temukan inspirasi dan wawasan dari berbagai genre menarik.</p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                <a href="#" className="btn btn-outline-secondary">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        {/* Book Cards */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/loan.jpg" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Home Sweet Loan karya Almira Bastari adalah novel metropop berlatar Jakarta yang mengangkat perjuangan hidup kaum menengah dengan cerita yang lebih serius.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/ayam.png" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Buku ini bercerita tentang Ale, pria depresi yang merencanakan bunuh diri, namun niatnya berubah setelah memutuskan makan mie ayam sebelum mati.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/bumi.png" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Buku karya Pramoedya Ananta Toer, perjuangan Minke seorang priyayi yang bergulat antara budaya lokal dan kebebasan modern di tengah penjajahan Belanda.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/ambyar.png" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Segala-galanya Ambyar adalah lanjutan dari buku sebelumnya yang membahas harapan dan makna hidup di tengah kekacauan emosi dan realitas.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/loving.png" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Loving The Wounded Soul karya Regis Machdy mengedukasi pembaca tentang stres dan depresi, serta cara mengenali gejala dan faktor pemicunya.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col">
                <div className="card shadow-sm">
                <img src="src/assets/img/yellow.png" className="card-img-top-button img-fluid w-50 mx-auto d-block" alt="Home Sweet" />
                  <div className="card-body">
                    <p className="card-text">Yellowface bercerita tentang June yang mencuri naskah temannya dan menghadapi ancaman saat kesuksesannya terancam terbongkar.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-primary my-2">Buy</button>
                        <button type="button" className="btn btn-outline-secondary my-2">Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Team Section */}
        <section id="team" className="container py-5">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row">
            {["Meri", "Don", "Nurman", "Atta"].map((name, index) => (
              <div className="col-md-3 text-center" key={index}>
                <img src={`https://i.pravatar.cc/150?img=${index + 5}`} className="rounded-circle mb-3" alt={name} width="120" height="120" />
                <h5>{name}</h5>
                <p className="text-muted">Web Developer</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-5">
          <h2 className="text-center mb-4">Contact</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">Nama</label>
              <input type="text" className="form-control" id="inputName" placeholder="Nama" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">Pesan</label>
              <textarea className="form-control" id="inputMessage" rows="4" placeholder="Tuliskan pesan disini..."></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Kirim</button>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#book" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Rahma Dwi</p>
        </footer>
      </div>
    </>
  )
}

export default App;