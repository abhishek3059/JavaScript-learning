const captureAllButtons = document.querySelectorAll(".button")
captureAllButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.id){
            case "grey" : 
            document.querySelector('body').style.backgroundColor = e.target.id
            break;
            case "white" :
            document.querySelector('body').style.backgroundColor = e.target.id
            break;
            case "blue" :
            document.querySelector('body').style.backgroundColor = e.target.id
            break;
            case "yellow" :
            document.querySelector('body').style.backgroundColor = e.target.id
            break;
        }
    });
})