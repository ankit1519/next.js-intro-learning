"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


const Login=()=>{
    const router=useRouter();

    const navigate=(place)=>{
        router.push(place);
    }
    return (
        <>
            <h1>Login page</h1>
            <Link href="/">Go to home</Link> <br />
            <button onClick={()=>navigate("/login/loginstudent")}>student login</button> <br /> <br />
            <button onClick={()=>navigate("/login/logincollege")}>Admin login</button>
        </>
    )
}

export default Login;