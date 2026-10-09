import React from 'react';

function Team() {
  return (
    <section className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Tim Kami</h2>
        <p className="text-muted">Orang-orang di balik pengelolaan Bookstore</p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 text-center">
          <div className="card shadow-sm p-4 border-0 h-100">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" className="rounded-circle mx-auto mb-3" alt="Team 1" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
            <h4 className="fw-bold mb-1">Sarah Johnson</h4>
            <p className="text-primary mb-2">Founder & CEO</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm p-4 border-0 h-100">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" className="rounded-circle mx-auto mb-3" alt="Team 2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
            <h4 className="fw-bold mb-1">Budi Santoso</h4>
            <p className="text-primary mb-2">Lead Curator</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="card shadow-sm p-4 border-0 h-100">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" className="rounded-circle mx-auto mb-3" alt="Team 3" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
            <h4 className="fw-bold mb-1">Siti Nurhaliza</h4>
            <p className="text-primary mb-2">Head of Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;