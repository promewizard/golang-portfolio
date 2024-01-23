import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";

const CertCard = ({ cert }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* Image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image className="absolute bottom-0 shadow-2xl"
            src={cert.image}
            alt={cert.title}
            width={247}
            height={250}
            priority
          />
          {/* btn */}
          <div className="flex gap-x-4">
            <Link
              href={cert.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{cert.title}</h4>
        <p className="text-muted-foreground text-lg">{cert.duration}</p>
      </div>
    </Card>
  )
}

export default CertCard;