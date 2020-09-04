window.onload = start;

function start(){

    const mainElement = document.createElement("main");
    document.body.appendChild(mainElement);
    const paraElement = document.createElement("p");
    const paraText = document.createTextNode("Jeg trener på JavaScript");
    paraElement.appendChild(paraText);
    paraElement.classList.add("paragraph");
    mainElement.appendChild(paraElement);

    //Select
    const selectBox = document.createElement("select");
    mainElement.appendChild(selectBox);
    const selectObj = [{id:1, data: "Banan"},{id:2, data: "Eple"},{id:3, data: "Sjokolade"},{id:4, data: "Mango"}]
    for(var i = 0; i < selectObj.length; i++){
        var elem = selectObj[i];
        var option = document.createElement("option");
        option.textContent = elem.data;
        option.id = elem.id;
        selectBox.appendChild(option);
    }

    mainElement.style.textAlign="center";
    selectBox.style.maxWidth="500px";

    //Buttons
    const testButton = document.createElement("button");
    const resetButton = document.createElement("button");
    testButton.innerText = "Test";
    resetButton.innerText= "Reset";
    mainElement.appendChild(testButton);
    mainElement.appendChild(resetButton);
    testButton.addEventListener('click', () => {testFunction();})
    resetButton.addEventListener('click', () => {resetFunction();})

    //UL

    const elemUl = document.createElement("ul");
    mainElement.appendChild(elemUl);

    const liElem1 = document.createElement("li");
    const liElem2 = document.createElement("li");
    const liElem3 = document.createElement("li");
    const liElem4 = document.createElement("li");

    const liBtn1 = document.createElement("button");
    liBtn1.textContent = "Delete";
    const liBtn2 = document.createElement("button");
    liBtn2.textContent = "Delete";
    const liBtn3 = document.createElement("button");
    liBtn3.textContent = "Delete";
    const liBtn4 = document.createElement("button");
    liBtn4.textContent = "Delete";

    liElem1.appendChild(liBtn1);
    liElem2.appendChild(liBtn2);
    liElem3.appendChild(liBtn3);
    liElem4.appendChild(liBtn4);

    elemUl.appendChild(liElem1);
    elemUl.appendChild(liElem2);
    elemUl.appendChild(liElem3);
    elemUl.appendChild(liElem4);

    liBtn1.addEventListener('click', function(){
        elemUl.removeChild(liElem1);
    })

    liBtn2.addEventListener('click', function(){
        elemUl.removeChild(liElem2);
    })

    liBtn3.addEventListener('click', function(){
        elemUl.removeChild(liElem3);
    })

    liBtn4.addEventListener('click', function(){
        elemUl.removeChild(liElem4);
    })

    function resetFunction(){
        elemUl.appendChild(liElem1);
        elemUl.appendChild(liElem2);
        elemUl.appendChild(liElem3);
        elemUl.appendChild(liElem4);
    }
}

function testFunction(){
    let select = document.querySelector("select");
    let string = "";
    let allOptions = select.querySelectorAll("option");
    for (var i = 0; i < allOptions.length; i++){
        if (allOptions[i].innerText == select.options[select.selectedIndex].innerText) {
            string = select.options[select.selectedIndex].innerText;
        }
    }
    //Fjerner siste bokstav, splitter ordet, reverserer
    //gjør det om til en string og joiner det tilbake til et ord
    string = string.slice(0, -1);
    let split = string.split('');
    split.reverse();
    string = split;
    string = string.join("");
    let para = document.querySelector("p");
    para.innerText = string;
}





