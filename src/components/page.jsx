import Component from "./component";

export default function Page({pageContent}){
    return(
        <>
            {pageContent.map(item => (
                <Component props={item} />
            ))}
        </>
    )
}