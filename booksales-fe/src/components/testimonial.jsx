import React from 'react';

function Testimonial() {
  return (
    <section className="bg-white py-5 border-top border-bottom">
      <div className="container text-center py-4 col-lg-8">
        <div className="display-1 text-muted opacity-25 mb-0" style={{ lineHeight: 0.5 }}>“</div>
        <blockquote className="blockquote">
          <p className="fs-4 fw-medium text-dark mb-4">
            "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard."
          </p>
        </blockquote>
        
        <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
            alt="Micheal Gough" 
            className="rounded-circle"
            style={{ width: '48px', height: '48px', objectFit: 'cover' }}
          />
          <div className="text-start">
            <div className="fw-bold text-dark mb-0">Micheal Gough</div>
            <div className="text-muted small">CEO at Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;