let clicked = 0;
document.querySelector('#translate').addEventListener('click', function(){
    document.querySelector('.startBtn').addEventListener('click', function(){
        alert('hefoshaofd')
    })
})
document.querySelector('#code').addEventListener('click', function(){
    document.querySelector('.startBtn').addEventListener('click', function(){
        alert('hefoshaofd')
    })
})
/* 
document.querySelector('.startBtn').addEventListener('click', function(){

    if(clicked == 1){
        alert('helofdohsafdd');
    }
    else{
        alert('helofdohsafdd');
    }
}
 */



document.querySelector('#code').addEventListener("click", function(){
    var str = document.querySelector('.input').value;
    var letters = str.split("");
    var length = letters.length;
    var readyStr = '//'

    for(i = 0; i <= length; i++){

        switch(letters[i]){
            case 'a':
            case 'ą':
            case 'A':
            case 'Ą':
                readyStr = readyStr + '/.-'
            break;
            case 'b':
            case 'B':
                readyStr = readyStr + '/-...'
            break;
            case 'c':
            case 'ć':
            case 'Ć':
            case 'C':
                readyStr = readyStr + '/-.-.'
            break;
            case 'd':
            case 'D':
                readyStr = readyStr + '/-..'
            break;
            case 'e':
            case 'E':
            case 'ę':
            case 'Ę':
                readyStr = readyStr + '/.'
            break;
            case 'f':
            case 'F':
                readyStr = readyStr + '/..-.'
            break;
            case 'g':
            case 'G':
                readyStr = readyStr + '/--.'
            break;
            case 'H':
            case 'h':
                readyStr = readyStr + '/....'
            break;
            case 'i':
            case 'I':
                readyStr = readyStr + '/..'
            break;
            case 'J':
            case 'j':
                readyStr = readyStr + '/.---'
            break;
            case 'k':
            case 'K':
                readyStr = readyStr + '/-.-'
            break;
            case 'l':
            case 'L':
            case 'ł':
            case 'Ł':
                readyStr = readyStr + '/.-..'
            break;
            case 'm':
            case 'M':
                readyStr = readyStr + '/--'
            break;
            case 'n':
            case 'N':
            case 'ń':
            case 'Ń':
                readyStr = readyStr + '/-.'
            break;
            case 'o':
            case 'O':
            case 'ó':
            case 'Ó':
                readyStr = readyStr + '/---'
            break;
            case 'p':
            case 'P':
                readyStr = readyStr + '/.--.'
            break;
            case 'Q':
            case 'q':
                readyStr = readyStr + '/--.-'
            break;
            case 'R':
            case 'r':
                readyStr = readyStr + '/.-.'
            break;
            case 's':
            case 'S':
            case 'ś':
            case 'Ś':
                readyStr = readyStr + '/...'
            break;
            case 'T':
            case 't':
                readyStr = readyStr + '/-'
            break;
            case 'u':
            case 'U':
                readyStr = readyStr + '/..-'
            break;
            case 'v':
            case 'V':
                readyStr = readyStr + '/...-'
            break;
            case 'w':
            case 'W':
                readyStr = readyStr + '/.--'
            break;
            case 'x':
            case 'X':
                readyStr = readyStr + '/-..-'
            break;
            case 'z':
            case 'Z':
            case 'ż':
            case 'Ż':
            case 'ź':
            case 'Ź':
                readyStr = readyStr + '/--..'
            break;
            case 'y':
            case 'Y':
                readyStr = readyStr + '/-.--'
            break;
            case ' ':
                readyStr = readyStr + '/'
            break;

            case '1':
                readyStr = readyStr + '/.----'
            break;
            case '2':
                readyStr = readyStr + '/..---'
            break;
            case '3':
                readyStr = readyStr + '/...--'
            break;
            case '4':
                readyStr = readyStr + '/....-'
            break;
            case '5':
                readyStr = readyStr + '/.....'
            break;
            case '6':
                readyStr = readyStr + '/-....'
            break;
            case '7':
                readyStr = readyStr + '/--...'
            break;
            case '8':
                readyStr = readyStr + '/---..'
            break;
            case '9':
                readyStr = readyStr + '/----.'
            break;
            case '0':
                readyStr = readyStr + '/-----'
            break;
        }

    }
    var textDiv = document.querySelector('.readyText');
    textDiv.value = readyStr +'///';
    document.querySelector('.copyBtn').addEventListener('click', function(){
        
        new ClipboardJS('.btn');
    })
    

})

document.querySelector('#translate').addEventListener("click", function(){
    var str = document.querySelector('.input').value;
    var letters = str.split("/");
    var length = letters.length;
    var readyStr = '';

    for(i = 0; i <= length; i++){

        switch(letters[i]){
            case '.-':
                readyStr = readyStr + 'a'
            break;
            case '-...':
                readyStr = readyStr + 'b'
            break;
            case '-.-.':
                readyStr = readyStr + 'c'
            break;
            case '-..':
                readyStr = readyStr + 'd'
            break;
            case '.':
                readyStr = readyStr + 'e'
            break;
            case '..-.':
                readyStr = readyStr + 'f'
            break;
            case '--.':
                readyStr = readyStr + 'g'
            break;
            case '....':
                readyStr = readyStr + 'h'
            break;
            case '..':
                readyStr = readyStr + 'i'
            break;
            case '.---':
                readyStr = readyStr + 'j'
            break;
            case '-.-':
                readyStr = readyStr + 'k'
            break;
            case '.-..':
                readyStr = readyStr + 'l'
            break;
            case '--':
                readyStr = readyStr + 'm'
            break;
            case '-.':
                readyStr = readyStr + 'n'
            break;
            case '---':
                readyStr = readyStr + 'o'
            break;
            case '.--.':
                readyStr = readyStr + 'p'
            break;
            case '--.-':
                readyStr = readyStr + 'q'
            break;
            case '.-.':
                readyStr = readyStr + 'r'
            break;
            case '...':
                readyStr = readyStr + 's'
            break;
            case '-':
                readyStr = readyStr + 't'
            break;
            case '..-':
                readyStr = readyStr + 'u'
            break;
            case '...-':
                readyStr = readyStr + 'v'
            break;
            case '.--':
                readyStr = readyStr + 'w'
            break;
            case '-..-':
                readyStr = readyStr + 'x'
            break;
            case '--..':
                readyStr = readyStr + 'z'
            break;
            case '-.--':
                readyStr = readyStr + 'y'
            break;
            case ' ':
                readyStr = readyStr + '  '
            break;

            case '.----':
                readyStr = readyStr + '1'
            break;
            case '..---':
                readyStr = readyStr + '2'
            break;
            case '...--':
                readyStr = readyStr + '3'
            break;
            case '....-':
                readyStr = readyStr + '4'
            break;
            case '.....':
                readyStr = readyStr + '5'
            break;
            case '-....':
                readyStr = readyStr + '6'
            break;
            case '--...':
                readyStr = readyStr + '7'
            break;
            case '---..':
                readyStr = readyStr + '8'
            break;
            case '----.':
                readyStr = readyStr + '9'
            break;
            case '-----':
                readyStr = readyStr + '0'
            break;
        }

    }
    var textDiv = document.querySelector('.readyText');
    textDiv.value = readyStr +'///';
    document.querySelector('.copyBtn').addEventListener('click', function(){
        
        new ClipboardJS('.btn');
    })
    

})