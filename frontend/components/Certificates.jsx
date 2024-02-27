'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { Button } from './ui/button';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

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
                      { 
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={200}
                          height={200}
                          priority
                        /> 
                      }
                      </Link>
                      {/* text */}
                      <div className="flex flex-col">
                        <CardTitle>{cert.title}</CardTitle>
                        <p>{cert.issuer}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className='mx-auto xl:mx-0 text-center xl:text-left mb-4 flex flex-col justify-center items-center xl:items-start'>
        <Link href='/projects'>
          <Button>All Certificates</Button>
        </Link>
      </div> */}
    </section>
  );
};

export default Certificates;