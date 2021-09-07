window.onload=function(){
    // *arrows
    let leftbtn = document.querySelector(".left")
    let rightbtn = document.querySelector(".right")
    let scroll = document.querySelector(".scroll")
    let currentPosition = 0

    leftbtn.onclick=function(){
        slider("right")
    }
    rightbtn.onclick=function(){
        slider("left")
    }
    function slider(side){
        
        if (side == "left"){
            currentPosition = currentPosition - 335 
            
            if (scroll.offsetLeft<=-670){
                currentPosition = -670
            }
            scroll.style.left=currentPosition + "px"
            console.log(currentPosition)
        }

        else if (side =="right"){
            currentPosition = currentPosition + 335
            
            if (scroll.offsetLeft>=0){
                currentPosition = 0
            }
            scroll.style.left=currentPosition + "px"
            console.log(currentPosition)
        }
    }


    // *color changing
    let colors = document.querySelector(".colors")
    colors.addEventListener("click", colorChanger)
    function colorChanger(event){

        if (event.target.classList.contains("red")){
            document.body.style.backgroundColor = "#E31F1F";
            document.getElementById('pic1').src="AJ1 RED 1.jpg";
            document.getElementById('pic2').src="AJ1 RED 2.jpg";
            document.getElementById('pic3').src="AJ1 RED 3.jpg";

        }

        else if (event.target.classList.contains("green")){
            document.body.style.backgroundColor = "#08613A";
            document.getElementById('pic1').src="AJ1 GREEN 1.jpg";
            document.getElementById('pic2').src="AJ1 GREEN 2.jpg";
            document.getElementById('pic3').src="AJ1 GREEN 3.jpg";
        }
        
        else if (event.target.classList.contains("blue")){
            document.body.style.backgroundColor = "#15336B";
            document.getElementById('pic1').src="AJ1 BLUE 1.jpg";
            document.getElementById('pic2').src="AJ1 BLUE 2.jpg";
            document.getElementById('pic3').src="AJ1 BLUE 3.jpg";
        }
    }


    let select = document.querySelector(".select")
    let options = document.querySelector(".options")
    select.onclick=function(){
        options.classList.toggle("hide")
    }

    let optionSize = document.querySelectorAll(".optionSize")
    for (let i in optionSize){
        optionSize[i].onclick=function(){
            options.classList.remove("hide")
            let sizetext = optionSize[i].innerHTML
            document.querySelector('.selectSize').innerHTML = sizetext
        }
    }
    //  you need make a divs row. Each div would have personal color
    // when you click on div in console log write div id 
}