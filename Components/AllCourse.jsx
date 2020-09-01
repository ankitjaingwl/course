import React, { useState, useEffect } from 'react';
import Course from './Course';

const AllCourse = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    const [courses, setCourses] = useState([
        { title: "Java Course", description: "this is demo course" },
        { title: "Django Course", description: "this is demo course" },
        { title: "Reactjs Course", description: "this is demo course" },
        { title: "Angukar Course", description: "this is demo course" },
    ]);
    return (
        <div>
            <h1>All Course</h1>

            {
                courses.length > 0 ? courses.map((item) => <Course course={item} /> )
                : "No Courses"
            }
        </div>
    )
}

export default AllCourse;
