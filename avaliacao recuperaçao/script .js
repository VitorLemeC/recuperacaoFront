function add(){
    let slct = document.querySelector('select');
    let card = document.querySelector('.card').cloneNode(true);
    let input = document.querySelector('#input').value;
    let cont = document.querySelector('.cont');
    
    card.querySelector('a').innerHTML = input
    card.querySelector('img').addEventListener('click',()=>{
        card.remove()
    })
    card.style.display = "flex"
    card.style.visibility = "visible"

    if(slct.value == 'Normal'){
        card.style.backgroundColor = 'SteelBlue'
    }else if(slct.value == 'Importante'){
        card.style.backgroundColor = 'MediumPurple'
    }else{
        card.style.backgroundColor = 'Crimson'
    }
    

    cont.appendChild(card)
}


