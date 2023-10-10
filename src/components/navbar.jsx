import { Link } from 'react-router-dom'
import '../assets/navbar.css'

export default function NavBar({props}){
    return(
    <>
        <nav className={props.options.bodyClasses}>
            {props.refs.map(ref => (
                <div className={props.options.refClasses}>
                    <Link to={ref.path}>{ref.name}</Link>
                </div>
            ))}
        </nav>
    </>
    )
}