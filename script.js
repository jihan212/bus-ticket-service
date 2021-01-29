// First class ticket handling
document.getElementById("first-plus").addEventListener("click", function(){
    ticketHandler('first', true);
})

document.getElementById("first-minus").addEventListener("click", function(){
    ticketHandler ('first', false);
})
// Economy class ticket handling 
document.getElementById("economy-plus").addEventListener("click", function(){
    ticketHandler('economy', true);
})

document.getElementById("economy-minus").addEventListener("click", function(){
    ticketHandler ('economy', false,);
})

// Function for ticket count 
function ticketHandler (ticket, isPlus){
    var ticketCount = document.getElementById(ticket +"-input");
    var ticketCountNumber = parseInt(ticketCount.value);
    let total = ticketCountNumber;
    if ( isPlus == true ){
        total = ticketCountNumber + 1;
    }
    if ( isPlus == false && total > 0){
        total = ticketCountNumber - 1;
    }
    document.getElementById(ticket+ "-input").value = total;

    ticketPrice = totalTicketPrice ();
    document.getElementById("subtotal-price").innerText = '$' + ticketPrice;
}

// function for total price 
    function totalTicketPrice (){
        let firstTicketNumber = ticketInput("first-input");
        let economyTicketNumber = ticketInput("economy-input");

        let totalPrice = firstTicketNumber*150 + economyTicketNumber*100;
        return totalPrice;
    }
// function for ticket input 
    function ticketInput (id){
        const ticketCount = document.getElementById(id);
        const ticketNumber = parseInt(ticketCount.value);

        return ticketNumber;
    }