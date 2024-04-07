import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* text & illustration */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-x-4 items-center mb-4 text-lg text-primary">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello 👋!
                        </div>
                        <h1 className="mb-8 max-w-md h1">
                            Let's Work Together.
                        </h1>
                        <p className="subtitle max-w-[400px]">
                            I'm currently looking for any new opportunities, my
                            inbox is always open. Whether you have a question or
                            just want to say hi, I'll try my best to get back to
                            you!
                        </p>
                    </div>
                    {/* illustration */}
                    <div className="hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_illustration_light dark:bg-contact_illustration_dark"></div>
                </div>
                {/* info text & form */}
                <div className="grid mb-24 xl:grid-cols-2 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col gap-y-4 mb-12 text-base xl:gap-y-14 xl:mb-24 xl:text-lg">
                        {/* mail */}
                        <div className="flex gap-x-8 items-center">
                            <MailIcon size={18} className="text-primary" />
                            <div>
                                <a href="mailto:krisato93@gmail.com">
                                    krisato93@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* address */}
                        <div className="flex gap-x-8 items-center">
                            <HomeIcon size={18} className="text-primary" />
                            <div>
                                Kristopher Ryan Sato University of Washington
                                2011 - 2015
                            </div>
                        </div>
                        {/* phone */}
                        <div className="flex gap-x-8 items-center">
                            <PhoneCall size={18} className="text-primary" />
                            <div>(+1) 206 792 9992</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Contact;
