// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.65)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// TESTIMONIAL SLIDER
// ===============================

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial(){

    testimonials.forEach(item=>{

        item.classList.remove("active");

    });

    testimonials[current].classList.add("active");

    current++;

    if(current>=testimonials.length){

        current=0;

    }

}

if(testimonials.length){

showTestimonial();

setInterval(showTestimonial,4000);

}

// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".stat-card h3");

const speed = 80;

function runCounter(){

counters.forEach(counter=>{

const text = counter.innerText;

if(text.includes("%")) return;

const target = parseInt(text);

counter.innerText="0";

const update=()=>{

const value = +counter.innerText;

const increment = Math.ceil(target/speed);

if(value<target){

counter.innerText=value+increment;

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

const statSection=document.querySelector(".stats");

let counterStarted=false;

window.addEventListener("scroll",()=>{

if(!statSection) return;

const top=statSection.offsetTop-500;

if(window.scrollY>top && !counterStarted){

counterStarted=true;

runCounter();

}

});

// ===============================
// FAQ
// ===============================

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

// ===============================
// SCROLL ANIMATION
// ===============================

const reveal=document.querySelectorAll(

".service-card,.project-card,.stat-card,.why-grid div,.faq-item,.about-content,.hours-box,.testimonial"

);

function revealItems(){

const trigger=window.innerHeight-100;

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

reveal.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".7s";

});

window.addEventListener("scroll",revealItems);

revealItems();

// ===============================
// SPARK CANVAS
// ===============================

const canvas=document.getElementById("sparkCanvas");

if(canvas){

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const sparks=[];

class Spark{

constructor(){

this.reset();

}

reset(){

this.x=Math.random()*canvas.width;

this.y=canvas.height+Math.random()*100;

this.size=Math.random()*3+1;

this.speed=Math.random()*2+1;

this.alpha=Math.random();

}

update(){

this.y-=this.speed;

this.alpha-=0.003;

if(this.alpha<=0){

this.reset();

}

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle=`rgba(255,140,0,${this.alpha})`;

ctx.fill();

}

}

for(let i=0;i<90;i++){

sparks.push(new Spark());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

sparks.forEach(s=>{

s.update();

s.draw();

});

requestAnimationFrame(animate);

}

animate();

}

// ===============================
// SMOOTH ACTIVE NAV
// ===============================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

console.log("T.S Welds Website Loaded Successfully");
