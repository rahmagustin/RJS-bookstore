export default function Contact() {
    return (
        <>
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
        </>
    );
}