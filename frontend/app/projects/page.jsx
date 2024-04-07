"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const ServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Projects = () => {
    const [projects, setProjects] = useState([]);

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
        <section className="pt-12 min-h-screen">
            <div className="container mx-auto">
                <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
                    My Projects
                </h2>
                {/* tabs */}
                <Tabs className="mb-24 xl:mb-48">
                    {/* tabs content */}
                    <div className="grid grid-cols-1 gap-6 text-lg xl:mt-8 lg:grid-cols-3">
                        {projects.map((project, index) => {
                            return (
                                <TabsContent>
                                    <ProjectCard
                                        project={project}
                                        className={"min-h-[620px]"}
                                    />
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;
