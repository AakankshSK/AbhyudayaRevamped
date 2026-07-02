import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

export function BrandLink() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
    >
      <Image
        src={SITE.logoSrc}
        alt="Abhyudaya CMS Logo"
        width={40}
        height={40}
        className="h-7 w-auto sm:h-[30px] lg:h-9"
      />
      {SITE.name}
    </Link>
  );
}
