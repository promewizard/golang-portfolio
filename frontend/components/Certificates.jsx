'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
// import CertCard from "./CertCard";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

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
    title: 'Professional Cloud Engineer',
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
]

const Certificates = () => {

  const [certs, setCerts] = useState([]);

  console.log(certs)

  useEffect(() => {
    async function fetchCerts() {
      const res = await fetch("http://localhost:3001/certs")
      const data = await res.json()
      setCerts(data.data.data)
    }
    fetchCerts()
  }, [])

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Certifications
        </h2>
        {/* slider */}
        <Swiper
          className='h-[280px]'
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {/* show only first 2 projects */}
          {certs.map((cert, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[216px]'>
                  <CardHeader className='p-0'>
                    <div className="flex items-center gap-x-8">
                      {/* Image */}
                      <Link 
                        href={cert.link}>
                      {/* <Image
                        src={cert.image}
                        alt={cert.title}
                        width={200}
                        height={200}
                        priority
                      /> */}
                      </Link>
                      {/* text */}
                      <div className="flex flex-col">
                        <CardTitle>{cert.title}</CardTitle>
                        <p>{cert.issuer}</p>
                      </div>
                      {/* btn */}
                      {/* <div className="flex gap-x-4">
                        <Link
                          href={cert.link}
                          className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                          <Link2Icon className="text-white" />
                        </Link>
                      </div> */}
                    </div>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;