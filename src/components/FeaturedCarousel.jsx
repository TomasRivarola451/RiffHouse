import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/FeaturedCarousel.css";

const featured = [
  { 
    id: 1, 
    front: "/images/carru1front.webp", 
    back: "/images/carru1back.webp", 
    alt: "1955 J-45 Reissue, Light Aged", 
    desc: "Gibson Custom • Vintage Sunburst • $5,999"
  },
  { 
    id: 2, 
    front: "/images/carru2front.webp", 
    back: "/images/carru2back.webp", 
    alt: "SJ-200 Monarch #100 Brazilian Rosewood", 
    desc: "Gibson Custom • Tri Burst • $99,999"
  },
  { 
    id: 3, 
    front: "/images/carru3front.webp", 
    back: "/images/carru3back.webp", 
    alt: "ES-335 Figured, Exclusive", 
    desc: "Gibson • Translucent Purple • $3,999"
  },
  { 
    id: 4, 
    front: "/images/carru4front.webp", 
    back: "/images/carru4back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
  { 
    id: 5, 
    front: "/images/carru5front.webp", 
    back: "/images/carru5back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
  { 
    id: 6, 
    front: "/images/carru7front.webp", 
    back: "/images/carru7back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
  { 
    id: 7, 
    front: "/images/carru6front.webp", 
    back: "/images/carru6back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
  { 
    id: 8, 
    front: "/images/carru8front.webp", 
    back: "/images/carru8back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
  { 
    id: 9, 
    front: "/images/carru9front.webp", 
    back: "/images/carru9back.webp", 
    alt: "1929 Nick Lucas Special Reissue, Aged", 
    desc: "Gibson Custom • Argentine Grey • $9,999"
  },
];

export default function FeaturedCarousel() {
  const [, setFailed] = useState([]);

  useEffect(() => {
    featured.forEach((item) => {
      [item.front, item.back].forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => console.debug("[preload] OK ->", url);
        img.onerror = () => {
          console.error("[preload] FAIL ->", url);
          setFailed((prev) => (prev.includes(url) ? prev : [...prev, url]));
        };
      });
    });
  }, []); 


  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/placeholder.webp";
  };

  return (
    <section className="featured-carousel container">
      <h2>Destacados</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, 
        }}
      >
        {featured.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="featured-item">
              <div className="image-wrapper">
                <img
                  src={item.front}
                  alt={item.alt}
                  className="img-front"
                  onError={handleImgError}
                />
                <img
                  src={item.back}
                  alt={`${item.alt} back`}
                  className="img-back"
                  onError={handleImgError}
                />
              </div>
              <div className="featured-info">
                <h4>{item.alt}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
