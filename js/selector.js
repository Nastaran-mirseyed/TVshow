const optionAll2 = document.querySelector(".firstoption");
export function selector(e) {
    const selecting = e.target.value;
    let divs = document.querySelectorAll(".divcol");
    divs.forEach(element => {
        if (element.innerText.indexOf(selecting) === -1) {
            element.style.display = "none";
            
        } else {
            element.style.display = "block";
        }
        if (selecting===optionAll2.textContent) {
            element.style.display = "block";
            return;
        }
    });
};

