    // card 1
    var card_front = document.querySelector('.card-front')
    var card_back = document.querySelector('.card-back')

    var event = function(){
        card_front.classList.add('card-front-rotation')
        card_back.classList.add('card-back-rotation')
    }

        card_front.addEventListener('mouseover', event)
        card_back.addEventListener('mouseout', function(){
        card_front.classList.add('card-front-rotation-reverse')
        card_back.classList.add('card-back-rotation-reverse')

        card_front.classList.remove('card-front-rotation')
        card_back.classList.remove('card-back-rotation')

        card_front.classList.remove('card-front-rotation-reverse')
        card_back.classList.remove('card-back-rotation-reverse')
    }) 

    // card 2

    






    

    