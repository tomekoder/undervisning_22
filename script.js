setTimeout(
    function() {
        //console.log("ferdig å laste");
    }, 
    10000
);

function timeout () {
    //console.log("noe skal skje");
    setTimeout (function(){
       // console.log("noe har skjedd");
    }, 10000)
}

timeout();



const myCatFacts = ["cats are cute", "i love cats"];

console.log(myCatFacts[0])

for (let index = 0; index < myCatFacts.length; index++) {
    console.log(myCatFacts[index]);
}

//
//

async function getApiData () {
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.data);
    console.log(data.data[3]);
    console.log(data.data[3].fact);

    const catFact = data.data;

    for (let index = 0; index < catFact.length; index++) {
        console.log(catFact[index].fact);

        const p = document.createElement("p");
        p.textContent = catFact[index].fact;

        const main = document.querySelector("main");
        main.appendChild(p);
    };

    
}

getApiData();

/*
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
};

async function timeout() {
    console.log ("noe kommer til å skje");
    await delay(5000);
    console.log ("noe");
}

timeout(); */