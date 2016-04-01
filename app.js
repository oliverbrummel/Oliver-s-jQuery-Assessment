$(function(){

var numClicks = 0;

  $("#genButton").on("click", function(){
    numClicks ++;
    clearContainer();
    createContainer();
  //delete button below
    $("#delete").on("click", function(){
      numClicks = 0;
      $(this).closest("container").remove();
    })
    $("#change").on("click", function(){
      $(this).closest("container").toggleClass("red")
    })



  })

  function createContainer(){
    $("body").append("<container class = \"ogButtons\"></container>");
    $("container").append("<button id = \"change\">Change</button><button id = \"delete\">Delete</button");
    $("container").append("<p>Number of clicks: " + numClicks +"</p>");
  }

  function clearContainer(){
    $("container").remove();
  }


})
