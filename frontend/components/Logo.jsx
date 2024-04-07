import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <Image src="/K.png" width={54} height={54} priority alt="Krisato" />
        </Link>
    );
};

export default Logo;
