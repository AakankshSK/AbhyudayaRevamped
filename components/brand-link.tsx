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
        width={48}
        height={48}
        className="h-[38px] w-auto sm:h-[42px] lg:h-[46px]"
      />
      {SITE.name}
    </Link>
  );
}
