const inputEl = document.querySelector(".input");
const butEl = document.querySelectorAll(".btn");

for(let i = 0; i < butEl.length; i++){
    butEl[i].addEventListener("click", (e)=>{
        const btnval = e.target.value;
        if(btnval == "="){
            let equelValue = eval(inputEl.value);
            inputEl.value = equelValue;
        }else if(btnval == "Clear"){
            inputEl.value = "";
        }else{
            inputEl.value += btnval;
        }
    })
}




