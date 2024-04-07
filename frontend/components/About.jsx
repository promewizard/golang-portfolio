import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";

// Contact Info
const infoData = [
    {
        icon: <User2 size={28} />,
        text: "Krisato",
    },
    {
        icon: <PhoneCall size={28} />,
        text: "+1 206 792 9992",
    },
    {
        icon: <MailIcon size={28} />,
        text: "krisato93@gmail.com",
    },
    {
        icon: <GraduationCap size={28} />,
        text: "Bachelors in Computer Science",
    },
    {
        icon: <HomeIcon size={28} />,
        text: "Marysville, WA",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "University of Washington",
                qualification: "Bachelor's Degree",
                years: "2011 - 2015",
            },
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Graemouse Technologies",
                role: "Sr. Full-Stack Engineer",
                duration: "Dec 2021 - Oct 2023",
            },
            {
                company: "BrandRep",
                role: "FrontEnd Engineer",
                duration: "Jan 2019 - Dec 2021",
            },
            {
                company: "AccelOne",
                role: "Full-Stack Engineer",
                duration: "Apr 2017 - Jan 2019",
            },
            {
                company: "Prime Consulting",
                role: "Junior FrontEnd Engineer",
                duration: "June 2015 - Apr 2017",
            },
        ],
    },
];

const skillsData = [
    {
        title: "Tech Stack",
        data: [
            {
                name: "FrontEnd technologies",
                fields: "React.js, Vue.js, Angular, jQuery, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material-UI",
            },
            {
                name: "BackEnd technologies",
                fields: "Golang, Node.js, PHP, Laravel, Express.js, Django",
            },
            {
                name: "Database Management",
                fields: "PostgreSQL, MySQL, MongoDB, GraphQL, Apollo Server, Redis",
            },
            {
                name: "DevOps & CI/CD",
                fields: "Docker, AWS, Jenkins, CircleCI, Terraform, Kubernetes",
            },
            {
                name: "Project Management & Methodologies",
                fields: "Agile, SCRUM, CI/CD",
            },
            {
                name: "Testing Frameworks",
                fields: "Jest, Cypress",
            },
        ],
    },
    {
        title: "DevOps",
        data: [
            {
                name: "Terraform",
            },
            {
                name: "Kubernetes",
            },
            {
                name: "Ansible",
            },
        ],
    },
    {
        title: "Programming Languages",
        data: [
            {
                name: "Python",
            },
            {
                name: "C++",
            },
        ],
    },
    {
        title: "CI/CD",
        data: [
            {
                name: "Jenkins",
            },
            {
                name: "GitHub Actions",
            },
        ],
    },
    {
        title: "Database",
        data: [
            {
                name: "Cloud SQL",
            },
            {
                name: "BigQuery",
            },
        ],
    },
    {
        title: "Tools",
        data: [
            {
                name: "Bash Scripting",
            },
            {
                name: "Docker",
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/figma.svg",
            },
            {
                imgPath: "/about/notion.svg",
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
                    About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden relative flex-1 xl:flex">
                        <DevImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="mt-12 text-lg xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="mb-4 h3">
                                            Sr. Full Stack Engineer
                                        </h3>
                                        <p className="mx-auto max-w-xl subtitle xl:mx-0">
                                            Passionate about crafting scalable
                                            infrastructure using DevOps tools
                                            for seamless deployment and
                                            management.
                                        </p>
                                        {/* icons */}
                                        <div className="grid gap-4 mb-12 xl:grid-cols-2">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex gap-x-4 items-center mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div className="tex-primary">
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* qualifications*/}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="mb-8 text-center h3 xl:text-left">
                                            My Awesome Jorney
                                        </h3>
                                        {/*education and experience wrapper*/}
                                        <div className="grid gap-y-8 md:grid-cols-2">
                                            {/*experience*/}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="font-medium capitalize">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/*list*/}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                duration,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="mb-2 text-xl leading-none font-semibond">
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className="mb-4 text-lg leading-none text-muted-foreground">
                                                                            {
                                                                                role
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                duration
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/*education*/}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="font-medium capitalize">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "education"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/*list*/}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "education"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                university,
                                                                qualification,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="mb-2 text-xl leading-none font-semibond">
                                                                            {
                                                                                university
                                                                            }
                                                                        </div>
                                                                        <div className="mb-4 text-lg leading-none text-muted-foreground">
                                                                            {
                                                                                qualification
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* skills */}
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="mb-8 h3">
                                            My Tech Stack
                                        </h3>
                                        {/*cloud providers*/}
                                        <div className="mb-16">
                                            <h4 className="mb-2 text-xl font-semibold capitalize">
                                                skills
                                            </h4>
                                            <div className="mb-4 border-b border-border"></div>
                                            {/*cloud providers list*/}
                                            <div>
                                                {getData(
                                                    skillsData,
                                                    "Tech Stack"
                                                ).data.map((item, index) => {
                                                    const { name, fields } =
                                                        item;
                                                    return (
                                                        <div
                                                            className="mx-auto w-full text-center xl:text-left xl:mx-0"
                                                            key={index}
                                                        >
                                                            <div className="font-medium">
                                                                {name} :{" "}
                                                                {fields}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
