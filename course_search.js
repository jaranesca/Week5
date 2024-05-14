"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, 
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let prog200StartDate = courses.find(course => course.CourseId === "PROG200").StartDate;


let proj500Title = courses.find(course => course.CourseId === "PROJ500").Title;

let affordableCourses = courses.filter(course => parseFloat(course.Fee) <= 50).map(course => course.Title);


let classroom1Courses = courses.filter(course => course.Location === "Classroom 1").map(course => course.Title);

console.log("Start date of PROG200 course:", prog200StartDate);
console.log("Title of PROJ500 course:", proj500Title);
console.log("Titles of courses that cost $50 or less:", affordableCourses);
console.log("Classes that meet in Classroom 1:", classroom1Courses);
