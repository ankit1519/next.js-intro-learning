import Link from "next/link";
export default function Studentlist(){
    return(
        <>
            <h1>Student list</h1>
            <ul>
               <li>
                <Link href="studentlist/Ankit">Ankit</Link>
               </li>
               <li>
                <Link href="studentlist/Raj">Raj</Link>
               </li>
               <li>
                <Link href="studentlist/AJ">Aj</Link>
               </li>
               <li>
                <Link href="studentlist/VJ">VJ</Link>
               </li>
               <li>
                <Link href="studentlist/ARS  ">ARS</Link>
               </li>
            </ul>
        </>
    )
}
