import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg" 

import "./styles.css";


function TeacherForm(){

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" }]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from:"", to: "" }
        ]);     

    }

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
                    <Textarea name="bio" label="About you" />

                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Select 
                    name="subject" 
                    label="Language"
                    options={[
                        { value: "English", label: "English"},
                        { value: "French", label: "French"},
                        { value: "German", label: "German"},
                        { value: "Japanese", label: "Japanese"},                  
                        { value: "Spanish", label: "Spanish"},
                    ]}
                    />
                    <Input name="cost" label="Cost per hour"/>
                  
                </fieldset>

                <fieldset>
                    <legend>
                        Available schedule
                        <button type="button" onClick={addNewScheduleItem}>
                            + New schedule
                        </button>
                    </legend>   
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                        <Select
                        name="week_day" 
                        label="Day of the week"
                        options={[
                            { value: "0", label: "Sunday"},                       
                            { value: "1", label: "Monday"},
                            { value: "2", label: "Tuesday"},
                            { value: "3", label: "Wednesday"},
                            { value: "4", label: "Thursday"},                  
                            { value: "5", label: "Friday"},
                            { value: "6", label: "Saturday"},
                        ]}
                        />
                        <Input name="from" label="from" type="time" />
                        <Input name="to" label="to" type="time"/>                       
                    </div>
                        )
                    })}
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
