import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg" 

import "./styles.css";


function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="It is amazing that you want to teach!"
                description="First, you need to fill this form"
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>

                    <Input name="name" label="Full name"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>

                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Input name="subject" label="Language"/>
                    <Input name="cost" label="Cost per hour"/>
                  
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning"/>
                        Attention! < br/>
                        Fill all data
                    </p>
                    <button type="button">
                        Save profile
                    </button>
                </footer>
            </main>
        </div>           
    );
}

export default TeacherForm;
