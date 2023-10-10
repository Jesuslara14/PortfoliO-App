import Heading from './subcomponents/heading'
import SubHeading from './subcomponents/subheading'
import Image from './subcomponents/image'
import SimpleDiv from './subcomponents/simplediv'
import SimpleText from './subcomponents/simpletext'
import Reference from './subcomponents/reference'

export default function Component({props}){
        {switch(props.type){
            case "heading":
                return(
                    <Heading
                        props = {{
                            options: props.options
                        }}
                    />
                );
                break;
            case "subheading":
                return(
                    <SubHeading
                        props = {{
                            options: props.options
                        }}
                    />
                );
                break;
            case "simpletext":
                return(
                    <SimpleText
                        props = {{
                            options: props.options
                        }}
                    />
                );
                break;
            case "image":
                return(
                    <Image
                        props = {{
                            options: props.options
                        }}
                    />
                );
                break;
            case "simplediv":
                return(
                    <SimpleDiv
                        props = {{
                            options: props.options,
                            children: props.children
                        }}
                    />
                )
                break;
            case "reference":
                return(
                    <Reference
                        props = {{
                            options: props.options,
                        }}
                    />
                )
        }}
    
}