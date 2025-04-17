import { Link } from "react-router";

export default function ProductList() {
    return (
        <>
            <section id="book" className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Best Seller</h1>
                        <p className="lead text-body-secondary">Kumpulan buku terbaik pilihan pembaca! Temukan inspirasi dan wawasan dari berbagai genre menarik.</p>
                        <p>
                            <Link to="#" className="btn btn-primary my-2 m-2">Views</Link>
                            <Link to="#" className="btn btn-outline-secondary">Other Book</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Book Cards */}
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
        </>
    );
}