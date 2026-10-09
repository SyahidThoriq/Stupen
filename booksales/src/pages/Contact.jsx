import React from 'react';

function Contact() {
  return (
    <section className="py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Hubungi Kami</h2>
        <p className="text-muted">Punya pertanyaan? Kirimkan pesan kepada kami.</p>
      </div>
      <div className="row g-4">
        <div className="col-md-5">
          <div className="p-4 bg-light rounded shadow-sm h-100">
            <h4 className="mb-4">Informasi Kontak</h4>
            <p><strong>Alamat:</strong> Jl. Pendidikan No. 123, Jakarta</p>
            <p><strong>Email:</strong> support@bookstore.com</p>
            <p><strong>Telepon:</strong> +62 812-3456-7890</p>
          </div>
        </div>
        <div className="col-md-7">
          <form className="p-4 bg-light rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>
              <input type="text" className="form-control" placeholder="Nama Anda" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="nama@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Pesan</label>
              <textarea className="form-control" rows="4" placeholder="Tuliskan pesan..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;