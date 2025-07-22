import { renderCards } from "./render.js";
import { fetchData } from "./api.js";
import { selector } from "./selector.js";
import { searching } from "./search.js";

// -------------------------display episodes-------------------------//

const episodeslists = document.querySelector(".episodes_lists");
const wrapper = document.querySelector(".wrapper");
episodeslists.style.display = "none";
const input = document.querySelector("input");

async function finalDatas() {
    try {
        const response = await fetchData(82);
        renderCards(response);

        
    } catch (error) {
        console.log(error.message);
        
    }

}
const gameOfThrones = document.querySelector(".GOT");
gameOfThrones.addEventListener("click",finalDatas);
gameOfThrones.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas1() {
    try {
        const response = await fetchData(527);     
        renderCards(response);
  
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const sopranos = document.querySelector(".sopranos");
sopranos.addEventListener("click", finalDatas1);
sopranos.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas2() {
    try {
        const response = await fetchData(5);     
        renderCards(response);


    } catch (error) {
        console.log(error.message);
        
    }

}
const Detective = document.querySelector(".Detective");
Detective.addEventListener("click", finalDatas2);
Detective.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas3() {
    try {
        const response = await fetchData(22036);     
        renderCards(response);
  
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const Planet = document.querySelector(".Planet");
Planet.addEventListener("click", finalDatas3);
Planet.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas4() {
    try {
        const response = await fetchData(169);     
        renderCards(response);
   
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const Breaking = document.querySelector(".Breaking");
Breaking.addEventListener("click", finalDatas4);
Breaking.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas5() {
    try {
        const response = await fetchData(526);     
        renderCards(response);
   
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const Office = document.querySelector(".Office");
Office.addEventListener("click", finalDatas5);
Office.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas6() {
    try {
        const response = await fetchData(335);     
        renderCards(response);
  
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const Sherlock = document.querySelector(".Sherlock");
Sherlock.addEventListener("click", finalDatas6);
Sherlock.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas7() {
    try {
        const response = await fetchData(30770);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const Chernobyl = document.querySelector(".Chernobyl");
Chernobyl.addEventListener("click", finalDatas7);
Chernobyl.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas8() {
    try {
        const response = await fetchData(1871);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const robot = document.querySelector(".robot");
robot.addEventListener("click", finalDatas8);
robot.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas9() {
    try {
        const response = await fetchData(138);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const leftovers = document.querySelector(".leftovers");
leftovers.addEventListener("click", finalDatas9);
leftovers.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas10() {
    try {
        const response = await fetchData(431);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const friends = document.querySelector(".friends");
friends.addEventListener("click", finalDatas10);
friends.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas11() {
    try {
        const response = await fetchData(17861);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const dark = document.querySelector(".dark");
dark.addEventListener("click", finalDatas11);
dark.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas12() {
    try {
        const response = await fetchData(1369);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const daredevil = document.querySelector(".daredevil");
daredevil.addEventListener("click", finalDatas12);
daredevil.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas13() {
    try {
        const response = await fetchData(269);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const blinders = document.querySelector(".blinders");
blinders.addEventListener("click", finalDatas13);
blinders.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas14() {
    try {
        const response = await fetchData(618);     
        renderCards(response);
     
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const saul = document.querySelector(".saul");
saul.addEventListener("click", finalDatas14);
saul.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

async function finalDatas15() {
    try {
        const response = await fetchData(44458);     
        renderCards(response);
  
        
        
    } catch (error) {
        console.log(error.message);
        
    }

}
const ted = document.querySelector(".ted");
ted.addEventListener("click", finalDatas15);
ted.addEventListener("click", () => {
    episodeslists.style.display = "flex";
    wrapper.style.display = "none";
})

// ----------------------search boxs----------------------//


const carousel = document.querySelector(".carousel");
input.addEventListener("keyup", searching);
input.addEventListener("keyup", () => {
    carousel.style.display = "none"
});
input.addEventListener("keyup", (e) => {
    if (e.target.value === "") {
        carousel.style.display = "block"
    }
});

const select = document.querySelector("select");
select.addEventListener("click", selector);

// -----------------------ressize home page cards---------------------//

const homecard = document.querySelectorAll(".homecards");
homecard.forEach(element => {
    window.addEventListener("resize", () => {
       if (window.innerWidth<=576) {
           element.style.width = "11rem";
       }
   }) 
});
const cardrow = document.querySelector(".cardrow");
window.addEventListener("resize", () => {
    if (window.innerWidth<=576) {
        cardrow.classList.remove("g-4");
        cardrow.classList.add("gy-4")
    }
})

