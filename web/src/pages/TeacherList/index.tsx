import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";

import "./styles.css";



function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

       const response= await api.get("classes", {
            params:{
                subject, 
                week_day, 
                time
            }
        });

       setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available teachers">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select
                    name="subject" 
                    label="Language"
                    value={subject}
                    onChange={(e)=>{ setSubject(e.target.value) }}
                    options={[
                        { value: "English", label: "English"},
                        { value: "French", label: "French"},
                        { value: "German", label: "German"},
                        { value: "Japanese", label: "Japanese"},   
                        { value: "Portuguese", label: "Portuguese"},                
                        { value: "Spanish", label: "Spanish"},
                    ]}
                    />
                    <Select
                    name="week_day" 
                    label="Day of the week"
                    value={week_day}
                    onChange={(e)=>{ setWeekDay(e.target.value) }}
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
                    <Input 
                    type="time" 
                    name="time" 
                    label="Time"
                    value={time}
                    onChange={(e)=>{ setTime(e.target.value) }} 
                    />   

                    <button type="submit">Search</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
                
            </main>
        </div>
    );
}

export default TeacherList;
