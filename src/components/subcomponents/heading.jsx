export default function Heading({props}){
    return(
        <h1 className={props.options.classes}>{props.options.text}</h1>
    )
}