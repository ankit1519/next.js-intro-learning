
"use client"

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const [name,setName]=useState("Ankit");
  const fun=()=>{
    setName("Raj");
  }

  const router=useRouter();
  const route=(where)=>{
    router.push(where)
  }

  return (
    <main className={styles.main}>
     

      <h1>Event, function, state {name}</h1>
      <button onClick={fun}>click me</button>
     
    <Link href="/login"> Go to login</Link>
    <Link href="/about"> Go to about</Link>

    <button onClick={()=>route("/login")}>login</button>
    <button onClick={()=>route("/about")}>about</button>
    </main>
  );

}


