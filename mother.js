"use strict";

const messages = [
    "Thank you for always being there for me, Mom!",
    "I appreciate everything you do for our family.",
    "Your love and support mean the world to me.",
    "You are my rock, Mom. I am so grateful for you.",
    "I am blessed to have you as my mother. Thank you for everything!",
    "Your wisdom and guidance have shaped me into who I am today.",
    "I love you, Mom!",
    "You are the best mom anyone could ask for.",
    "Thank you for your endless patience and understanding.",
    "I am grateful for the sacrifices you've made for me. Thank you, Mom!"
];

function displayMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}
