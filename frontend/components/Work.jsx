'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules'
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Solistica Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Evolve Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.',
    link: '/',
    github: '/',
  },
]

const Work = () => {

  // const [projects, setProjects] = useState([]);

  // // console.log(projects)

  // useEffect(() => {
  //   async function fetchProjects() {
  //     const res = await fetch("http://localhost:3001/certs")
  //     const data = await res.json()
  //     setProjects(data)
  //   }
  //   fetchProjects()
  // }, [])

  return <section className='relative mb-12 xl:mb-48'>
    <div className='container mx-auto'>
      {/* text */}
      <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
        <h2 className='section-title mb-4'>Latest Projects</h2>
        <p className='subtitle mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus.
        </p>
        <Link href='/projects'>
          <Button>All Projects</Button>
        </Link>
      </div>
      {/* slider */}
      <div className='xl:max-w-[1000px] xl:absolute right-24 top-0'>
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
          {projectData.slice(0, 3).map((project, index) => {
            return <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  </section>
}

export default Work;