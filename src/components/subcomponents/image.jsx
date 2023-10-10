export default function Image({props}){
    return(
        <img className={props.options.classes} src={props.options.src} alt={props.options.alt} />
    )
}