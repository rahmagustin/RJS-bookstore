export default function Team() {
    return (
        <>
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
        </>
    );
}