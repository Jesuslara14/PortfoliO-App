export default function SimpleText({props}){
    return(
        <p className={props.options.classes}>{props.options.text}</p>
    )
}