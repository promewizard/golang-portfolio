"use client";

import {
    RiLinkedinFill,
    RiGithubFill,
    RiTwitterFill,
    RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
    {
        path: "https://github.com/promewizard",
        name: <RiGithubFill />,
    },
    {
        path: "https://linkedin.com/in/kristopher-sato-16a695301",
        name: <RiLinkedinFill />,
    },
    {
        path: "/",
        name: <RiTwitterFill />,
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconStyles}`}>{icon.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
