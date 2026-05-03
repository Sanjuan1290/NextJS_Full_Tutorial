'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";


export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const nav = [
  {
    name: "Login",
    href: "/login"
  },
  {
    name: "Register",
    href: "/register"
  },
  {
    name: "ForgotPassword",
    href: "/forgot-password"
  }]

  const pathname = usePathname()

  const isActive = (href: string) : boolean => {
    return (pathname === href) 
  }

  return (<>
    
        <header className="bg-[rgba(66,100,62,0.35)] py-6 px-4">Header</header>
        <nav>
          <ul className="flex gap-2 font-semibold text-blue-700">
            {
              nav.map(v => (
                <li><Link href={v.href} className={`${isActive(v.href) ? 'text-gray-800' : ''}`}>{v.name}</Link></li>
              ))
            }
          </ul>
        </nav>
        {children}
        <footer className="bg-[rgba(62,72,132,0.35)] py-6 px-4">Footer</footer>

  </>
  );
}
