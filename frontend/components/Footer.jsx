import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="py-12 bg-secondary">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center">
                    {/* Socials */}
                    <Socials
                        containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                        iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
                    />
                    {/* copyright */}
                    <div className="text-muted-foreground">
                        Copyright &copy; @Krisato. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
