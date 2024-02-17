import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "Absolutely thrilled with the recent tour experience! From seamless
          planning to captivating destinations, your service exceeded
          expectations. The attention to detail and knowledgeable guides made it
          a truly memorable adventure. Can't wait for the next one!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Jaswant</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Exceptional tour services! Every moment was offering a perfect blend
          of exploration and relaxation. Your commitment to customer
          satisfaction shines through, making each journey a remarkable and
          unforgettable experience. Highly recommend!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sia</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Embarking on your tour was a decision well-made! The impeccable
          organization, insightful guides, and enchanting locales created a
          travel experience that was both enriching and enjoyable. Kudos to your
          team for delivering a tour that exceeded all expectations."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Aman</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "An unforgettable adventure from start to finish! Your tour services
          not only showcased breathtaking destinations but also demonstrated a
          commitment to excellence in every aspect. Thank you for crafting
          moments that will be cherished forever!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Abhay</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
