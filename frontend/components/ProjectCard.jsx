import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, className, ...props }) => {
    return (
        <Card
            className={cn(
                "overflow-hidden relative group",
                className ? className : ""
            )}
        >
            <CardHeader className="p-0">
                {/* Image */}
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={project.image}
                        alt={project.name}
                        width={247}
                        height={250}
                        priority
                    />
                    {/* btn */}
                    <div className="flex gap-x-4">
                        <Link
                            href={project.github}
                            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                        >
                            <PaperPlaneIcon className="w-[24px] h-[24px] text-white" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="px-8 py-6 h-full">
                <Badge className="absolute top-4 left-5 mb-2 text-sm font-medium uppercase">
                    {project.category}
                </Badge>
                <h4 className="mb-1 h4">{project.name}</h4>
                <div
                    className={cn(
                        "h-full text-lg text-muted-foreground",
                        className ? styles.multiLineOverflow : "truncate"
                    )}
                >
                    {project.description}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
