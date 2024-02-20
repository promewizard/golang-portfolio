import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={28} />,
    text: 'Nischay',
  },
  {
    icon: <PhoneCall size={28} />,
    text: '+91 878 971 3201',
  },
  {
    icon: <MailIcon size={28} />,
    text: 'itsnischay2604@gmail.com',
  },
  {
    icon: <GraduationCap size={28} />,
    text: 'Bachelors in Electronics and Communication Engineering',
  },
  {
    icon: <HomeIcon size={28} />,
    text: 'Jammu, India',
  }
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Shri Mata Vaishno Devi University',
        qualification: 'Bachelors in Technology',
        years: '2020 - Present',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Whizlabs',
        role: 'Cloud Computing Intern',
        duration: 'April 2023 - Present',
      },
      {
        company: 'Indian Institute of Technology, Jammu',
        role: 'Summer Research Intern',
        duration: 'May 2023 - July 2023',
      },
      {
        company: 'Supista',
        role: 'Software Development Intern',
        duration: 'June 2022 - July 2022',
      }
    ],
  },
];

const skillsData = [
  {
    title: 'clouds platforms',
    data: [
      {
        name: 'Amazon Web Services (AWS)',
      },
      {
        name: 'Google Cloud Platform (GCP)',
      }
    ]
  },
  {
    title: 'DevOps',
    data: [
      {
        name: 'Terraform',
      },
      {
        name: 'Kubernetes',
      },
      {
        name: 'Ansible',
      }
    ]
  },
  {
    title: 'Programming Languages',
    data: [
      {
        name: 'Python',
      },
      {
        name: 'C++',
      }
    ]
  },
  {
    title: 'CI/CD',
    data: [
      {
        name: 'Jenkins',
      },
      {
        name: 'GitHub Actions',
      }
    ]
  },
  {
    title: 'Database',
    data: [
      {
        name: 'Cloud SQL',
      },
      {
        name: 'BigQuery',
      }
    ]
  },
  {
    title: 'Tools',
    data: [
      {
        name: 'Bash Scripting',
      },
      {
        name: 'Docker',
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      }
    ]
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched service quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intutive website with cutting-edge Technology, delivering dynamic and engaging user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="tex-primary">{item.icon}</div>
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
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Jorney</h3>
                    {/*education and experience wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/*experience*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/*list*/}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const { company, role, duration } = item;
                            return (
                              <div
                                className="flex gap-x-8 group"
                                key={index}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div
                                    className="font-semibond text-xl leading-none mb-2"
                                  >{company}</div>
                                  <div
                                    className="text-lg leading-none text-muted-foreground mb-4"
                                  >{role}</div>
                                  <div
                                    className="text-base font-medium"
                                  >{duration}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      {/*education*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/*list*/}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div
                                className="flex gap-x-8 group"
                                key={index}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div
                                    className="font-semibond text-xl leading-none mb-2"
                                  >{university}</div>
                                  <div
                                    className="text-lg leading-none text-muted-foreground mb-4"
                                  >{qualification}</div>
                                  <div
                                    className="text-base font-medium"
                                  >{years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/*cloud providers*/}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 capitalize">
                        skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/*cloud providers list*/}
                      <div>
                        {getData(skillsData, 'clouds platforms').data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">
                                {name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/*tools*/}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list*/}
                      <div  className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
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