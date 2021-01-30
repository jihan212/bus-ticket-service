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

    totalTicketPrice ();
}

// function for total price 
    function totalTicketPrice (){
        let firstTicketNumber = ticketInput("first-input");
        let economyTicketNumber = ticketInput("economy-input");

        let subTotalPrice = firstTicketNumber*150 + economyTicketNumber*100;
        document.getElementById("subtotal-price").innerText = '$' + subTotalPrice;

        const tax = subTotalPrice * 0.1;
        document.getElementById("tax-amount").innerText = '$' + tax;

        totalPrice = subTotalPrice + tax;
        document.getElementById("total-amount").innerText = '$' + totalPrice;
        
        return subTotalPrice;
    }
// function for ticket input 
    function ticketInput (id){
        const ticketCount = document.getElementById(id);
        const ticketNumber = parseInt(ticketCount.value);

        return ticketNumber;
    }
// working for Massage
document.getElementById("book-now").addEventListener("click", function(){
    const bookingArea = document.getElementById("booking-area");
    bookingArea.style.display =  "none";

    const massageArea = document.getElementById("massage-area");
    massageArea.style.display = "block";
})