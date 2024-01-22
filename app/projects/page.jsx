'use client';
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

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

const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    Projects
                </h2>
                {/* tabs */}
                <Tabs defaultValue={category}>
                    <TabsList>
                        {categories.map((category, index) => {
                            return <TabsTrigger value={category} key={index}>
                                {category}
                            </TabsTrigger>;
                        })}
                    </TabsList>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;