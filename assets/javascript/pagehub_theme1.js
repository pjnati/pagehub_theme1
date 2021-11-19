
$(document).ready(function(){
$(".ph-toggle-text").on("click", function(){
    $( "#ph-toggle input" ).click();
  });

  // Toggle Switch
  $('#ph-toggle input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $(".ph-link-url").css("display", "block").addClass("fade-in-link");
      $(".ph-link-text-container").css("text-align", "start");
      $(".ph-link").css("justify-content", "start");
    }
    else if($(this).is(":not(:checked)")){
      $(".ph-link-url").css("display", "none");
      $(".ph-link-text-container").css("text-align", "center");
      $(".ph-link").css("justify-content", "center");
    }
  });

  // Get the modal
  var modal = $(".ph-login-modal");

  // Login button
  var loginBtn = $(".ph-login-btn");

  // Close button - modal
  var closeModalBtn = $(".ph-login-modal .close");

  // When the user clicks on the button, open the modal
  loginBtn.on("click",function(){
    modal.css("display", "block");
  });

  // When the user clicks on <span> (x), close the modal
  closeModalBtn.on("click",function(){
    modal.css("display", "none");
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function(event) {
    if ($(event.target).is(modal)) {
      modal.css("display", "none");
    }
  });


});