import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

export function BrandLink() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-primary"
    >
      <Image
        src={SITE.logoSrc}
        alt="Abhyudaya CMS Logo"
        width={52}
        height={52}
        className="h-10 w-auto sm:h-[42px] lg:h-12"
        priority
      />
      {SITE.name}
    </Link>
  );
}
