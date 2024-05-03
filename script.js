$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Software Developer", "Guitarist", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Software Developer", "Guitarist", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get form values
//     var name = document.getElementById("field name").value;
//     var email = document.getElementById("field email").value;
//     var message = document.getElementById("field textarea").value;
    
//     // Perform form validation
//     if (name === "" || email === "" || message === "") {
//       document.getElementById("response-message").textContent = "Please fill in all fields.";
//       return;
//     }
    
//     // Send the message (dummy implementation)
//     // Replace this with your actual logic for sending the message
//     sendMessage(name, email, message);
//   });
//   function sendMessage(name, email, message) {
//     // Perform actual sending of the message using AJAX, Fetch API, or any other method
//     // Here, I'm simulating the message sending with a 2-second delay
//     setTimeout(function() {
//       document.getElementById("response-message").textContent = "Thank you, " + name + "! Your message has been sent.";
//       document.getElementById("contact-form").reset();
//     }, 2000);
//   } 