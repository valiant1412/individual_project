const heading = document.querySelector('.heading');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//lay du lieu tu trong array words ra ngoai
function getData(data) {
    dot(data.length);
    container(data.length);
    const input = document.querySelectorAll('input');
    const boxContent = document.querySelectorAll('.boxContent p');
    const box = document.querySelectorAll('.box');

    //dua dap an trong data ra interface
    for (let i = 0; i < data.length; i++) {
        let certain_answer = data[i].answers;
        for (let k = 0; k < 4; k++) {
            input[4 * i + k].id = data[i]._id;
            input[4 * i + k].name = "q" + i;
            boxContent[4 * i + k].textContent = certain_answer[k];
            if (certain_answer[k] == undefined) {
                box[4 * i + k].classList.add('hidden');
            }
        }
    }
}
//thuc hien chuc nang chuyen cau hoi va hien thi dap an tuong ung
function setIndex(index) {
    const boxContainer = document.querySelectorAll('.container');
    if (index > 0 || index <= words.length - 1) {
        heading.textContent = words[index].text;
        boxContainer[currentIndex].classList.add("hidden");
        boxContainer[index].classList.remove("hidden");

        //dotlist
        const dot = document.querySelectorAll(".dot");
        dot[currentIndex].classList.remove("active");
        dot[index].classList.add("active");

        next.addEventListener('click', next_ques);
        prev.addEventListener('click', prev_ques);
        currentIndex = index;

    }
}
getData(words);
let currentIndex = 0;
setIndex(currentIndex);

function prev_ques() {
    setIndex(currentIndex - 1);
}

function next_ques() {
    setIndex(currentIndex + 1);
}
//chuyen cau hoi bang ban phim
function onKeyDown(event) {
    const key = event.key;

    if (key === 'ArrowLeft') {
        prev_ques();
    } else if (key === 'ArrowRight') {
        next_ques();
    }
}
document.addEventListener('keydown', onKeyDown);
//chuyen sang phan diem so nguoi choi
async function onSubmit(event) {
    event.preventDefault(); // prevent normal form submit
}

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function loader() {
    /* const loader = document.querySelector('.loader');
    loader.classList.remove('hidden') */
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');
    screen1.classList.toggle('hidden');
    screen2.classList.toggle("hidden");
}
const submit = document.querySelector('.button');
submit.addEventListener('click', loader);

function dot(i) {
    let html = `<div>
    <span class="dot"></span>
    </div>`
    let list = document.querySelector("#dot_list");
    for (let k = 0; k < i; k++) {
        list.innerHTML += html;
    }
}

function container(i) {
    let html = `<div class="container hidden">
    <div class="box">
        <input type="radio" name="" value="0">
        <div class="boxContent">
            <p></p>
        </div>
    </div>
    <div class="box">
        <input type="radio" name="" value="1">
        <div class="boxContent">
            <p></p>
        </div>
    </div>
    <div class="box">
        <input type="radio" name="" value="2">
        <span class="boxContent">
                  <p></p>
              </span>
    </div>
    <div class="box">
        <input type="radio" name="" value="2">
        <span class="boxContent">
                  <p></p>
              </span>
    </div>
</div>`
    let form = document.querySelector(".c");
    for (let k = 0; k < i; k++) {
        form.innerHTML += html;
    }
}
//tinh diem
function check() {
    const advice = document.querySelector('.advice');
    const pyro = document.querySelector('.pyro');
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');
    screen1.classList.toggle('hidden');
    screen2.classList.toggle("hidden");
    const rain = document.querySelector('.rain');
    let count = 0;
    const q0 = document.myform.q0.value;
    const q1 = document.myform.q1.value;
    const q2 = document.myform.q2.value;
    const q3 = document.myform.q3.value;
    const q4 = document.myform.q4.value;
    const q5 = document.myform.q5.value;
    const q6 = document.myform.q6.value;
    const q7 = document.myform.q7.value;
    const q8 = document.myform.q8.value;
    const q9 = document.myform.q9.value;

    if (q0 == "0") {
        count++;
    }

    if (q1 == "0") {
        count++;
    }

    if (q2 == "0") {
        count++;
    }

    if (q3 == "0") {
        count++;

    }

    if (q4 == "0") {
        count++;

    }


    if (q5 == "0") {
        count++;

    }


    if (q6 == "0") {

    }

    if (q7 == "0") {
        count++;
    }

    if (q8 == "0") {
        count++;
    }

    if (q9 == "0") {
        count++;
    }
    if (0 <= count && count < 5) {
        advice.innerHTML = "Try your best next time"
        screen2.classList.add('sad');
    }
    if (count >= 5 && count < 8) {
        rain.classList.add('hidden');
        advice.innerHTML = "Keep going";
        pyro.classList.remove('hidden');
    }
    if (count >= 8 && count <= 10) {
        rain.classList.add('hidden');
        advice.innerHTML = "Wow, good job";
        pyro.classList.remove('hidden');
    }
    const user_score = document.querySelector('.real_score p');
    user_score.innerHTML = count + "/10";
}
submit.addEventListener('click', check);

const gohome = document.querySelector('.gohome');
gohome.onclick = () => {
    window.location.reload()
}