'use client';
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch("https://backend-api-7znngxavwq-uc.a.run.app/projects")
            const data = await res.json()
            setProjects(data.data.data)
        }
        fetchProjects()
    }, [])

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Projects
                </h2>
                {/* tabs */}
                <Tabs className="mb-24 xl:mb-48" >
                    {/* tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => {
                            return (
                                <TabsContent>
                                    <ProjectCard project={project} />
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