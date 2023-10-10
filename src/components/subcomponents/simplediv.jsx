import Component from "../component"

export default function SimpleDiv({props}){
    return(
        <div className={props.options.classes}>
            {props.children.map(child => (
                <Component props={child} />
            ))}
        </div>
    )
}