import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/HeroSlider.css";

export default function HeroSlider() {
  return (
    <section className="hero-slider-wrap">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              src="/images/Hero0.webp"
              alt="Guitarra 1"
              className="slide-image"
            />
            <div className="slide-content">
              <h1>El poder del rock en tus manos</h1>
              <h2>
                Desde riffs potentes hasta solos desgarradores, esta guitarra
                está lista para acompañarte en cada nota.
              </h2>
              <a href="/shop" className="btn btn-primary">Explorar eléctricas</a>
              <a href="/Courses" className="btn btn-secondary">Conocer más</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              src="/images/Hero2.webp"
              alt="Guitarra 2"
              className="slide-image"
            />
            <div className="slide-content">
              <h1>Encuentra tu estilo</h1>
              <h2>
                Sonidos cálidos, detalles clásicos y una inspiración que se
                adapta a tu manera de tocar.
              </h2>
              <a href="/shop?filter=electrica" className="btn btn-primary">Ver acústicas</a>
              <a href="/courses" className="btn btn-secondary">Aprende a tocar</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero-slide">
            <img
              src="/images/Hero1.webp"
              alt="Guitarra 3"
              className="slide-image"
            />
            <div className="slide-content">
              <h1>Descubre tu próxima guitarra</h1>
              <h2>
                Modelos únicos creados para quienes buscan un sonido auténtico
                y una presencia inconfundible en el escenario.
              </h2>
              <a href="/shop?filter=acustica" className="btn btn-primary">Ver colección</a>
              <a href="/contact" className="btn btn-secondary">Habla con nosotros</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
