import Link from "next/link";

Link
const about=()=>{
    return (
        <>
            <h1>About page</h1>
            <Link href="/about/aboutstudent">Know about our student</Link> <br /> <br />
            <Link href="/about/aboutcollege">Know about our college</Link>
        </>
    );
}

export default about;