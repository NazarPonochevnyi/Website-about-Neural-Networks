(function($) {
	"use strict";
	/* ---------------------------------------------------
		Загрузчик страницы
	----------------------------------------------------- */
	$(window).on("load", function() {
		var loadWrap = $(".loading-wrapper"),
			loader = loadWrap.find(".loader");
		loader.fadeOut(1000, function () {
			loadWrap.fadeOut(1000, function() {
				loadWrap.remove();
			});
		});
	});

	/* ---------------------------------------------------
		Меню
	----------------------------------------------------- */
	var openBtn = $("#open-button"),
	colseBtn = $("#close-button"),
	menu = $(".menu-wrap");
	// Open menu when click on menu button
	openBtn.on("click", function() {
		menu.addClass("active");
	});
	// Close menu when click on Close button
	colseBtn.on("click", function() {
		menu.removeClass("active");
	});
	// Close menu when click on anywhere on the document
	$(document).on("click", function(e) {
		var target = $(e.target);
		if (target.is(".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button") === false) {
			menu.removeClass("active");
			e.stopPropagation();
		}
	});

	/* ---------------------------------------------------
		To Top кнопка
	----------------------------------------------------- */
	var toTop = $("#toTop");
	function showBtn() {
		if ($(window).scrollTop() >= 400) {
			toTop.addClass("active");
		} else {
			toTop.removeClass("active");
		}
	}
	showBtn();
	toTop.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(window).on("scroll", showBtn);

	/* ---------------------------------------------------
		To Send кнопка
	----------------------------------------------------- */
	var toSend = $(".send-btn");
	
	toSend.hover(
		function() {
			$(this).stop().animate({
				'color': "#fff",
				'background-color': "#999"
			}, 500);
		}, function() {
			$(this).stop().animate({
				'color': "#fff",
				'background-color': "#181818"
			}, 500);
		}
	);

	/* ---------------------------------------------------
		Для Question-Answer 
	----------------------------------------------------- */
	var name = $("#name");
	var email = $("#email");
	var question = $("#question");
	
	var correct = [false, false, false];
	
	/* Очистка полей */
	$('.modal-footer button').click(function(){
		if(correct[0] && correct[1] && correct[2]){
			name.val('Ваше имя');
			name.stop().animate({
				'borderColor': "#333"
			}, 800);
			correct[0] = false;
			
			email.val('Ваш E-mail');
			email.stop().animate({
				'borderColor': "#333"
			}, 800);
			correct[1] = false;
			
			question.val('Ваш вопрос');
			question.stop().animate({
				'borderColor': "#333"
			}, 800);
			correct[2] = false;
		}
	});
	
	name.focus(function(){
		if($(this).val() == 'Ваше имя'){
			$(this).val('');
		}
	});
	email.focus(function(){
		if($(this).val() == 'Ваш E-mail'){
			$(this).val('');
		}
	});
	question.focus(function(){
		if($(this).val() == 'Ваш вопрос'){
			$(this).val('');
		}
	});
	
	/* Заполнение полей */
	name.blur(function(){
		if($(this).val() == ''){
			$(this).val('Ваше имя');
			$(this).stop().animate({
				'borderColor': "#333"
				}, 800);
				correct[0] = false;
		}
		else{
			var reg = /^[А-я]+$/;
			$(this).val($(this).val().trim());
			if(reg.test($(this).val())){
				$(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().substr(1));
				$(this).stop().animate({
					'borderColor': "green"
				}, 800);
				correct[0] = true;
			}
			else{
				$(this).stop().animate({
				'borderColor': "red"
				}, 800);
				correct[0] = false;
			}
		}
	});
	email.blur(function(){
		if($(this).val() == ''){
			$(this).val('Ваш E-mail');
			$(this).stop().animate({
				'borderColor': "#333"
			}, 800);
			correct[1] = false;
		}
		else{
			var reg = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
			$(this).val($(this).val().trim());
			if(reg.test($(this).val())){
				$(this).stop().animate({
				'borderColor': "green"
				}, 800);
				correct[1] = true;
			}
			else{
				$(this).stop().animate({
				'borderColor': "red"
				}, 800);
				correct[1] = false;
			}
		}
	});
	question.blur(function(){
		if($(this).val() == ''){
			$(this).val('Ваш вопрос');
			$(this).stop().animate({
				'borderColor': "#333"
				}, 800);
				correct[2] = false;
		}
		else{
			$(this).val($(this).val().trim());
			$(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().substr(1));
			$(this).stop().animate({
				'borderColor': "green"
			}, 800);
			correct[2] = true;
		}
	});
	
	/* Кнопка "Отправить" */
	toSend.click(function(eventObject){
		eventObject.preventDefault();
		if(correct[0] && correct[1] && correct[2]){
			$('#allOk').modal('show');
		}
		else{
			if(correct[0] == false){
				$('#noName').modal('show');
			}
			else{
				if(correct[1] == false){
					$('#noEmail').modal('show');
				}
				else{
					$('#noQuestion').modal('show');
				}
			}
		}
	});

	/* ---------------------------------------------------
		Скролл еффект для ссылок
	----------------------------------------------------- */
	var scrLink = $(".scroll-link");
	scrLink.on("click", function(e) {
		e.preventDefault();
		var target = $($(this).attr("href"));
		if (target) {
			$("html, body").animate({
				scrollTop: target.offset().top + 5
			}, 1000);
		}
	});
})(jQuery);
