$(function(){
    $(".change-devoured").on("click", function (event){
        var id = $(this).data("id")
        var newDevoured = $(this).data("newdevoured")

        var newDevouredState = {
            isDevoured: newDevoured
        }

        // send put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload()
            }
        )
    })
})

$(".create-form").on("click", function (event){
    event.preventDefault()

    var newBurger = {
        name: $("#burger").val().trim(),
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
