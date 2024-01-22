'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import CertCard from "./CertCard";

const certs = [
  {
    title: 'Associate Cloud Engineer',
    issuer: 'Google Cloud Platform',
    image: '/certs/ace.png',
    link: 'https://www.credential.net/6212d151-3ceb-4a15-892e-e4e4d29f65c7',
    duration: '21st Sept. 2022 - 21st Sept. 2025'
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    image: '/certs/aws-foundations.png',
    link: 'https://www.credly.com/go/yNEuSTPd',
    duration: 'March 2023'
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    image: '/certs/aws-foundations.png',
    link: 'https://www.credly.com/go/yNEuSTPd',
    duration: 'March 2023'
  },
]

const Certificates = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Certifications
        </h2>
        <div className='xl:max-w-[1000px] right-32 top-0'>
          <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            }
          }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 2 projects */}
            {certs.map((cert, index) => {
              return <SwiperSlide key={index}>
                <CertCard cert={cert} />
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;