/* tworzenie classy pytanie */
class question {
    constructor(content, answer, letter) {
        this.content = content;
        this.answer = answer;
        this.letter = letter;
    }
}

/* tworzenie tablicy pytanie i jej defniowanei za pomoca kalasy pytanie */

const questions = new Array(26);

questions[0] = new question("Jak napiać  A", ".-","a");
questions[1] = new question("Jak napisać B", "-...","b");
questions[2] = new question("Jak napiać C", ".-.-","c");
questions[3] = new question("Jak napiać  D", "-..","d");
questions[4] = new question("Jak napisać E", ".","e");
questions[5] = new question("Jak napiać F", "..-.","f");
questions[6] = new question("Jak napiać  G", "--.","g");
questions[7] = new question("Jak napisać H", "....","h");
questions[8] = new question("Jak napiać I", "..","i");
questions[9] = new question("Jak napiać  J", ".---","j");
questions[10] = new question("Jak napisać K", "-.-","k");
questions[11] = new question("Jak napiać L", ".-..","l");
questions[12] = new question("Jak napisać M", "--","m");
questions[13] = new question("Jak napiać N", "-.","n");
questions[14] = new question("Jak napisać O", "---","o");
questions[15] = new question("Jak napiać P", ".--.","p");
questions[16] = new question("Jak napisać Q", "--.-","q");
questions[17] = new question("Jak napiać R", ".-.","r");
questions[18] = new question("Jak napisać S", "...","s");
questions[19] = new question("Jak napiać T", "-","t");
questions[20] = new question("Jak napiać U", "..-","u");
questions[21] = new question("Jak napisać V", "...-","v");
questions[22] = new question("Jak napiać W", ".--","w");
questions[23] = new question("Jak napisać X", "-..- ","x");
questions[24] = new question("Jak napiać Y", "-.--","y");
questions[25] = new question("Jak napisać Z", "--..","z");

/* zmienne */
let points = 0;
let repeats = 0;

/* funkcja start() służy do poberania warotści zmienej lineVal */
document.querySelector('#startBtn').addEventListener('click', function(){
    
    /* pobieranie wartosci swuwaka */
    let lineVal = document.querySelector('.line').value;
    /* losowa liczba */
    let random = Math.floor(Math.random()*questions.length);

    /* zmienianie zawrtosci diva */
    const mainDiv = document.querySelector('.mainDiv');

    mainDiv.innerHTML = ` 
    <h1 class="title" id="question">Ile pytań</h1>
    <input type="text" placeholder="odpowowiedź" class="textInput"><br>
    
    <button class="purpleBtn" id="nextBtn">Dalej</button>`;

    /* tworzenie zmiennych przechowywojącyhc uchwyty do elementów : */
    const header = document.querySelector('#question');
    const btn = document.querySelector('#nextBtn');

    /* ustawianie zawartosci nagłuwka na pytanie[losowa liczba] */
        /* losowa liczba */
        random = Math.floor(Math.random()*questions.length);

        header.innerHTML = questions[random].content;
        let asked = new Array(lineVal);

    btn.addEventListener('click',function(){
        
        let input = document.querySelector('.textInput').value;
        const inputEl = document.querySelector('.textInput');
        if(input == questions[random].answer){
            points ++;
        }
        else{
            const box = document.createElement("div");
            box.innerText = `ty pajacu ${questions[random].letter} sie pisze: ${questions[random].answer}`; 
            box.classList.add('answerBox');
           
            mainDiv.appendChild(box);
            setTimeout(function(){ mainDiv.removeChild(box); }, 2000)
           
        }

        repeats ++
        if(repeats > lineVal){
            end();
        }

        random = Math.floor(Math.random()*questions.length);

        header.innerHTML = questions[random].content;
       
        document.querySelector('#point').innerHTML = points;
        inputEl.value=""
    })
})


/* funkcja end służy do wyświetlanie wyniku */
function end(){
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.innerHTML = 0;
    mainDiv.innerHTML = `<h1 class="title">Twój wynik : ${points}</h1>`
}
