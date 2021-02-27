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
        })
    })
})