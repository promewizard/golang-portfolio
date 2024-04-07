"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const ServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Work = () => {
    const [projects, setProjects] = useState([]);

    console.log(ServerUrl);
    console.log(projects);

    const handleNavigate = () => {
        // Programmatically navigate to the GitHub URL
        window.location.href = "https://github.com/promewizard";
    };

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch(
                `${
                    ServerUrl
                        ? ServerUrl
                        : "https://backend-api-7znngxavwq-uc.a.run.app"
                }/projects`
            );
            const data = await res.json();
            setProjects(data.data.data);
        }
        fetchProjects();
    }, []);

    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="mb-4 section-title">Latest Projects</h2>
                    <p className="mb-8 subtitle">
                        You can see all my projects on my&nbsp;
                        <span
                            onClick={handleNavigate}
                            style={{
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >
                            GitHub.
                        </span>
                        .
                    </p>
                    <Link href="/projects">
                        <Button>More details</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-24 top-0">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show only first 2 projects */}
                        {projects.slice(0, 3).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard
                                        project={project}
                                        className={"min-h-[620px]"}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
