// First class ticket handling
document.getElementById("first-plus").addEventListener("click", function(){
    ticketHandler(true);
})

document.getElementById("first-minus").addEventListener("click", function(){
    ticketHandler (false);
})
// Economy class ticket handling 
document.getElementById("economy-plus").addEventListener("click", function(){
    economyTicketHandler(true);
})

document.getElementById("economy-minus").addEventListener("click", function(){
    economyTicketHandler (false,);
})
// Function for first ticket 
    function ticketHandler (isPlus){
        var firstTicket = document.getElementById("first-input");
        var firstTicketCount = parseInt(firstTicket.value);
        let total = firstTicketCount;
        if ( isPlus == true ){
            total = firstTicketCount + 1;
        }
        if ( isPlus == false && total > 0){
            total = firstTicketCount - 1;
        }
        document.getElementById("first-input").value = total;
        let firstTicketPrice = total * 150;
        document.getElementById("subtotal-price").innerText = '$' + firstTicketPrice;
    }
// Function for economy ticket 
function economyTicketHandler (isPlus){
    var economyTicket = document.getElementById("economy-input");
    var economyTicketCount = parseInt(economyTicket.value);
    let total = economyTicketCount;
    if ( isPlus == true ){
        total = economyTicketCount + 1;
    }
    if ( isPlus == false && total > 0){
        total = economyTicketCount - 1;
    }
    document.getElementById("economy-input").value = total;
    let economyTicketPrice = total * 100;
    document.getElementById("subtotal-price").innerText = '$' + economyTicketPrice;
}
