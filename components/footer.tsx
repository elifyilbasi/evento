import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="flex mt-auto h-16 border-t border-w/10 px-3 sm:px-9 text-xs text-white/25">
      <ul className="flex items-center gap-x-3 sm:gap-x-8 ml-auto">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
