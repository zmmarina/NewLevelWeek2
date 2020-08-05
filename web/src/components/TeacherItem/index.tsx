import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/61096984?s=460&u=7405143a6c97d1e49eed84b3093d22bff0bf7d3c&v=4" alt="Zandra Monteiro" />
                <div>
                    <strong>Zandra Monteiro</strong>
                    <span>Portuguese</span>
                </div>
            </header>

            <p>
                Learn Portuguese with me! The perfect balance between grammar and fun.
    <br /><br />
    Conversation, music, films... All resources that can help you in this learning process. You will see how nice is to speak a new language!
</p>
            <footer>
                <p>
                    Price/hour
        <strong>$80.50</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
        Get in touch
    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;


