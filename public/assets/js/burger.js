$(function(){
    $(".change-devoured").on("click", function (event){
        var id = $(this).data("id")
        var newDevoured = $(this).data("isDevoured")

        var newDevouredState = {
            isDevoured: newDevoured
        }

        // send put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevouredState);
                location.reload()
            }
        )
    })
})

$(".create-form").on("submit", function (event){
    event.preventDefault()

    var newBurger = {
        burger_name: $("#burger").val().trim(),
        isDevoured: $("[name=isDevoured]:checked").val().trim()
    }

    // send post request
    $.ajax("api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("new burger created");
            location.reload();
        }
    )
})

$(".delete").on("click", function (event){
    var id = $(this).data("id")

    // send delete request
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function(){
            console.log("burger deleted");
            location.reload()
        }
    )
})
