import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-5">
      <div className="container py-4 text-center">
        {/* BADGE ANNOUNCEMENT */}
        <a
          href="#"
          className="d-inline-flex justify-content-between align-items-center py-1 px-2 pe-3 mb-4 text-decoration-none rounded-pill bg-light border text-dark shadow-sm"
        >
          <span className="badge bg-indigo rounded-pill text-white px-3 py-2 me-2" style={{ backgroundColor: "#4f46e5" }}>
            New
          </span>
          <span className="small fw-medium me-2">
            Flowbite is out! See what's new
          </span>
          <svg
            className="bi"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        {/* JUDUL / HEADING */}
        <h1 className="mb-4 display-4 fw-bold text-dark mx-auto col-lg-10">
          We invest in the world’s potential
        </h1>

        {/* DESKRIPSI */}
        <p className="mb-5 lead text-secondary col-lg-8 mx-auto">
          Kami memfokuskan perhatian pada wilayah di mana teknologi, inovasi,
          dan modal dapat membuka nilai jangka panjang dan mendorong
          pertumbuhan ekonomi.
        </p>

        {/* FEATURED IN LOGOS */}
        <div className="col-lg-10 mx-auto">
          <span className="fw-semibold text-muted text-uppercase small tracking-wider">
            FEATURED IN
          </span>
          
          <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center mt-4 gap-4 opacity-75 text-secondary">
            {/* YouTube */}
            <a href="#" className="text-secondary text-decoration-none hover-dark">
              <svg className="align-middle" height="28" viewBox="0 0 132 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z" fill="currentColor"/>
                <path d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z" fill="white"/>
                <path d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z" fill="currentColor"/>
              </svg>
            </a>

            {/* Product Hunt */}
            <a href="#" className="text-secondary text-decoration-none hover-dark">
              <svg className="align-middle" height="36" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.7714 20.729C42.7714 31.9343 33.6867 41.019 22.4814 41.019C11.2747 41.019 2.19141 31.9343 2.19141 20.729C2.19141 9.52228 11.2754 0.438965 22.4814 0.438965C33.6867 0.438965 42.7714 9.52297 42.7714 20.729Z" fill="currentColor"/>
                <path d="M25.1775 21.3312H20.1389V15.9959H25.1775C25.5278 15.9959 25.8747 16.0649 26.1983 16.1989C26.522 16.333 26.8161 16.5295 27.0638 16.7772C27.3115 17.0249 27.508 17.319 27.6421 17.6427C27.7761 17.9663 27.8451 18.3132 27.8451 18.6635C27.8451 19.0139 27.7761 19.3608 27.6421 19.6844C27.508 20.0081 27.3115 20.3021 27.0638 20.5499C26.8161 20.7976 26.522 20.9941 26.1983 21.1281C25.8747 21.2622 25.5278 21.3312 25.1775 21.3312ZM25.1775 12.439H16.582V30.2234H20.1389V24.8881H25.1775C28.6151 24.8881 31.402 22.1012 31.402 18.6635C31.402 15.2258 28.6151 12.439 25.1775 12.439Z" fill="white"/>
              </svg>
            </a>

            {/* Reddit */}
            <a href="#" className="text-secondary text-decoration-none hover-dark">
              <svg className="align-middle" height="36" viewBox="0 0 120 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}