import React, {TextareaHTMLAttributes} from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}


const Textarea: React.FC<TextareaProps> = ({label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor="subject">{label}</label>
            <textarea id= {name} {...rest} />
        </div>
    )
}

export default Textarea;