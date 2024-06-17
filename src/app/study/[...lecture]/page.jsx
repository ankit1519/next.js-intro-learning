"use client"
export default function Study({params}){
    console.log(params);
    return(
        <>
            <h1>lecture day: {params.lecture[0]}</h1>
            <h1>lecture No.: {params.lecture[1]}</h1>
        </>
    )
}