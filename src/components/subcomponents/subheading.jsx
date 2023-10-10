export default function SubHeading({props}){
    return(
        <h3 className={props.options.classes}>{props.options.text}</h3>
    )
}