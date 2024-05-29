import Link from "next/link";

import WhatsIcon from "@/components/icons/WhatsIcon";
export default function Whatsbtn() {
  return (
    <Link
      className="flex items-center gap-3 fixed right-5 bottom-5 rounded-full z-50 py-1 cursor-pointer px-3 text-primary font-bold bg-highlight
      hover:scale-110"
      href={""}
    >
      <WhatsIcon />
      Entre em contato
    </Link>
  );
}
