export function searching(e) {
    // console.log(e);
    const searching = e.target.value.toLowerCase();
    
    let cards = document.querySelectorAll(".cardsection");
    cards.forEach(element => {
        
        if (element.innerText.toLowerCase().indexOf(searching) ==! -1) {
            element.style.display = "block";
            element.classList.remove("h-100");
            
        } else {
            element.style.display = "none";
        }
    
    });

}