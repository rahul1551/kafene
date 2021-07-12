$(document).ready(function () {
    console.log("JS Loaded Successfully");

    $(".menu-items").click((e) => {
        e.preventDefault();
    })

    $(".login-btn").click(function(e){
        e.preventDefault();

        var user = $("#login-name").val()
        var pass = $("#login-pass").val()
        // console.log(user,pass)
        


        if(user == pass){
            alert("Login Successful");
            location.assign('./order.html')
        }
        else{
            alert("Please enter valid credentials!")
        }

    })


  })
    
