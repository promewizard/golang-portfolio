'use client'

import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link';

const icons = [
  {
    path: 'https://github.com/zeus2611',
    name: <RiGithubFill />,
  },
  {
    path: 'https://linkedin.com/in/nischay-2604',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiTwitterFill />,
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  );
};

export default Socials;