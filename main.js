var quotes =[
    {author: 'Oscar Wilde', 
     quote : 'Be yourself; everyone else is already taken.'
    },
    {author: 'Marilyn Monroe', 
     quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {author: 'Albert Einstein', 
     quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
    author :'Frank Zappa', 
    quote  :'So many books, so little time.'
    },
    {author : 'Marcus Tullius Cicero', 
     quote : 'A room without books is like a body without a soul.'
    },
    {author: 'Bernard M. Baruch', 
     quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    }
];

// if(new1!=naw2 ){
//     document.getElementById("quote2").innerHTML = quotes[new1].quote;
//     document.getElementById("auther2").innerHTML = quotes[new1].author;
//         }

var new1;
var naw2;
function getQoutes() {
        do {new1 = Math.floor(Math.random() * quotes.length)}
        while(new1 == naw2)
        naw2 = new1
    console.log(new1)
            document.getElementById("quote2").innerHTML = quotes[new1].quote;
            document.getElementById("auther2").innerHTML = quotes[new1].author;
}







// var newIndex ; 
// var lastIndex;
// var displayedQoutes=[]
// function getQoutes(){

//     if(displayedQoutes.length ==  quotes.length ){
//         displayedQoutes=[]
//     }

// do{
    
//     newIndex =  Math.floor(Math.random() * quotes.length)
// }while(lastIndex == newIndex || displayedQoutes.includes(newIndex) )
// lastIndex = newIndex
// displayedQoutes.push(newIndex);
// console.log(newIndex)
//     document.getElementById("quote2").innerHTML=quotes[newIndex].quote
//     document.getElementById("auther2").innerHTML=quotes[newIndex].author
// }