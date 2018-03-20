// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require bootstrap
//= require jquery
//= require jquery_ujs
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    $('#mySidenav').append('<a class="closebtn" href="javascript:void(0)" onclick="closeNav()"> ×</a>')
    $("a").each(function() {
      $(this).css({'padding-Left':"32px"})
    });

}

function closeNav() {
    var a = $("#mySidenav").css({"width": "80px"});
    $('a.closebtn').remove();
    $("#main").css({'margin-Left':"80px"});
    $("a").each(function() {
      $(this).css({'padding-Left':"5px"})
    });
    // <a class="closebtn" href="javascript:void(0)" onclick="closeNav()"> ×</a>

 }
