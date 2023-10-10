export default function Reference({props}){
    return(
        <div>
            <a href={props.options.href} target="_blank">{props.options.text}</a>
        </div>
    )
}