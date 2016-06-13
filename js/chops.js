//JS code for Chops Snacks LLC
//by Abhi Nayar

$.noConflict();

// JavaScript Document
// Author Name: Saptarang
// Author URI: http://www.saptarang.org
// Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//  Creation Date: 5 March, 2015

jQuery(document).ready(function($) {
"use strict";
	
	//Preloader//
    
	$(window).load(function() {
        $('#loader-gif').show(0).delay(1500).hide(0);
        $('#preloader').show(100).delay(1000).fadeOut(1000);
	})
	
	// WOW - animated content
	new WOW().init();
  
	
	// Image Lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
	  
    //Smooth Scroll
    $(function() {
      $('#index-arrow').click(function() {
        $('html,body').animate({
          scrollTop: $("#section_02").offset().top - $('header').height()}, // Tell it to scroll to the top #bottom
          '1500' // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    });
    
    // Load Content
	var size_li = $("#proList li").size();
    var x=6;
    $('#proList li:lt('+x+')').show();
    $('#viewMore').click(function () {
        x= (x+3 <= size_li) ? x+3 : size_li;
        $('#proList li:lt('+x+')').show();
    });
    $('#viewLess').click(function () {
        x=(x-7<0) ? 6 : x-3;
        $('#proList li').not(':lt('+x+')').hide();
    });
    
    // Services Carousel delay
	$('#productList, .carousel').carousel({
        interval: 20000 // set value like 5000 for making auto and increase or decrease for delay
    });
    
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
          $(".navbar-collapse").collapse('hide');
        }
      });
    
    if (window.location.href.indexOf("#success") > -1) {
        $('#success-modal').modal('show');
    }
    
});