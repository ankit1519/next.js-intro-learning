"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Layout({children}){
    const pathname=usePathname();
    return(
        
        <div>
            {pathname !== "/login/logincollege" ? (
                <>
                    <h1>login page</h1>
                    <ul>
                        <li><Link href="/login">Login main</Link></li>
                        <li><Link href="/login/loginstudent">Student Login</Link></li>
                        <li><Link href="/login/logincollege">College Login</Link></li>
                    </ul>
                </>
            ) : null}
            {children}
        </div>

    );
}