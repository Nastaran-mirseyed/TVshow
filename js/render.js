import { formatNumbers } from './utils.js';

const episodeslists = document.querySelector(".episodes_lists");
const divnav = document.createElement("div");
episodeslists.append(divnav);
divnav.classList.add("container")
const navbar2 = document.createElement("nav");
navbar2.classList.add("navbar", "mt-3");
divnav.append(navbar2);
const divnav2 = document.createElement("div");
divnav2.classList.add("container");
navbar2.append(divnav2);
const anav = document.createElement("a");
anav.href = "./index.html";
anav.classList.add("navbar-brand", "text-light");
anav.textContent = "TV Show";
divnav2.append(anav);
const divnav3 = document.createElement("div");
divnav2.append(divnav3)
divnav3.classList.add("form-floating","d-flex")
const select = document.createElement("select");
divnav3.append(select);
select.setAttribute("id","floatingSelect")
select.classList.add("form-select", "py-0","bg-secondary","border-0");
select.style.width = "20rem";
const i2 = document.createElement("i");
i2.classList.add("bi", "bi-search", "text-light", "fs-4","ms-3","mt-2");
divnav3.append(i2);
const optionAll = document.createElement("option");
select.append(optionAll);
optionAll.textContent = "All Episodes";
optionAll.classList.add("firstoption");



export function renderCards(episodes) {
    
    episodes.forEach((element) => {
        const option = document.createElement("option");
        select.append(option);
        option.textContent = `${formatNumbers(element.season, element.number)}-${element.name}`;
        const divcol = document.createElement("div");
        divcol.classList.add("col","col-sm-6","col-md-4","col-lg-3","col-xl-3","col-xxl-3","divcol");
        episodeslists.append(divcol);
        const divEpi = document.createElement("div");
        divEpi.classList.add("card", "mt-5", "card2","border-0");     
        divEpi.style.height = "20rem";
        divEpi.style.width = "18rem"; 
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        const divbodycard = document.createElement("div");
        divbodycard.classList.add("card-body","cardbody");
        const divtexts = document.createElement("div");
        divtexts.classList.add("d-flex","justify-content-between")
        const h6 = document.createElement("h6");
        h6.classList.add("card-text", "text-light","cardtext3");
        const a = document.createElement("a");
        a.classList.add("bi", "bi-play-circle-fill","text-light");
        a.style.fontSize = "2.5rem";
        a.href = element.url;
        divtexts.append(h6,a)
        const p = document.createElement("p");
        p.classList.add("card-text", "text-light","cardtext2");
        p.style.display = "none";
        divbodycard.append(p,divtexts);
        divEpi.append(img,divbodycard);
        img.src = element.image.medium;
        h6.textContent = `${formatNumbers(element.season, element.number)}-${element.name}`;
        p.innerHTML = element.summary;
        divcol.append(divEpi);

        divbodycard.addEventListener("mouseover", () => {
            h6.style.display = "none";
            p.style.display = "block";
            divbodycard.style.overflowY = "scroll";
        });
        divbodycard.addEventListener("mouseleave", () => {
            p.style.display = "none";
            h6.style.display = "block";
            divbodycard.style.overflowY = "hidden";
        });
        window.addEventListener("resize", () => {
            if (window.innerWidth<=1300 && window.innerWidth>=496) {
                divEpi.style.width = "15rem";
                divEpi.style.height = "18rem";

            } else if (window.innerWidth < 496) {
                divEpi.style.height = "13rem";
                divEpi.style.width = "10rem";
                divcol.style.marginTop = "3rem";
                a.style.fontSize = "1.5rem";

            } else {
                divEpi.style.height = "20rem";
                divEpi.style.width = "18rem";
                
            }
           
        })

    });

}