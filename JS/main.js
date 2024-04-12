var jsonOfwords = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]
var focusInput=document.querySelector(".focusInput")
var reset_btn=document.querySelector(".reset-btn")
var myInputs=document.querySelector(".inputs")
var wordChosen
var hintChosen=document.querySelector(".hint span")
var hintChosen=document.querySelector(".hint span")
var guess_Remaining=document.querySelector(".guess_Remaining span")
var wrong_letter=document.querySelector(".wrong_letter span")
var correct=[]
var incorrect=[]
var maxGuess
function randomWord() {
    
    let randomNumber=Math.round(  Math.random()*(jsonOfwords.length)  )
    wordChosen=jsonOfwords[randomNumber].word
    console.log(wordChosen)
    hintChosen.innerHTML=jsonOfwords[randomNumber].hint
    guess_Remaining.innerHTML=8

    var cartoona=''
    for (let i = 0; i < wordChosen.length; i++) {
       
    cartoona+=`<input type="text" disabled>`
        
    }
    myInputs.innerHTML=cartoona
    focusInput.value=''
    correct=[]
    incorrect=[]
    maxGuess=8
    focusInput.focus()
    wrong_letter.innerHTML=incorrect

    

}
randomWord()
focusInput.value=''

reset_btn.addEventListener("click",randomWord)



document.addEventListener("input", function Entercharacter(e){
    focusInput.focus()
    let key=e.target.value.toLowerCase()
    if(key.match(/^[a-zA-Z]+$/)&&!incorrect.includes(key)&&!correct.includes(key))
    {
        
        if(wordChosen.includes(key))
        {
            for (let i = 0; i < wordChosen.length; i++) {
               
               if(wordChosen[i]==key)
               {
                myInputs.querySelectorAll('input')[i].value=key
               }
                
            }
            // console.log("found")
            correct.push(key)
        }
        else
        {
            // console.log("noooooooooooootfound")
            maxGuess--
            incorrect.push(key)


        }
    }
    guess_Remaining.innerHTML=maxGuess
    wrong_letter.innerHTML=incorrect
    focusInput.value=''

    if(correct.length===wordChosen.length)
    {
        ebModal2.style.display = "block";
        document.querySelector("#win").innerHTML=`YOU GET THE WORD YOU WANT TO PLAY AGAIN`
        randomWord()
        focusInput.focus()


    }
    else if(maxGuess<=0)
    {
        ebModal.style.display = "block";
        document.querySelector("#lose").innerHTML=`the word is ${wordChosen}`
        randomWord()


    }

    

    

 


    
})



























// Get the modal
var ebModal = document.getElementById('mySizeChartModal');
var ebModal2 = document.getElementById('mySizeChartModal2');




// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("ebcf_close")[0];
var ebSpan2 = document.getElementsByClassName("ebcf_close")[1];



// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
        

    }

}



// -----------------------------2
// When the user clicks on <span> (x), close the modal
ebSpan2.onclick = function() {
    ebModal2.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal2.style.display = "none";
        ebModal.style.display = "none";


    }
}