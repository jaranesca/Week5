"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    }
];

const memberWithID187 = academyMembers.find(member => member.memID === 187);
console.log("Academy Member with ID 187:", memberWithID187.name);


const membersWithAtLeast3Films = academyMembers.filter(member => member.films.length >= 3);
console.log("Academy Members with at least 3 films:", membersWithAtLeast3Films.map(member => member.name));


const membersWithNameStartingWithBob = academyMembers.filter(member => member.name.startsWith("Bob"));
console.log("Academy Members with name starting with 'Bob':", membersWithNameStartingWithBob.map(member => member.name));

const membersInFilmStartingWithA = academyMembers.filter(member => member.films.some(film => film.startsWith("A")));
console.log("Academy Members in a film starting with 'A':", membersInFilmStartingWithA.map(member => member.name));
