$(function () {
  //слайдер сверху
  $('.slider-top').slick({
    arrows: false,
    dots: true
  }); //слайдер сверху

  $('.calendar__slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    draggable: false,
    variableWidth: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToScroll: 3
      }
    }]
  });

  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.sidebar').slideToggle();
  });

  $('.otchet__li__level1 > span').click(function(){
   
    
    if($(this).closest('.otchet__li__level1').hasClass('active') == 0){
      $(this).closest('ul').find('.otchet__li__level1').removeClass('active')
      $(this).closest('.otchet__li__level1').addClass('active')
    }
    else{
      $(this).closest('.otchet__li__level1').removeClass('active')
    }
  })



  $('.itemfor').click(function(){
    let $itemId = $(this).attr('data-for')
    $('.otchet__item').removeClass('active')
    $('#'+$itemId+'').addClass('active')
    $('#'+$itemId+'').find('.tab').eq(0).click()
  })

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
  });

  // открытия текстовых файлов
  
  

  //страница "помощь"
  $('.help__content').eq(0).addClass('active')
  $('.help__right__item').eq(0).addClass('active')
  let countElem = $('.help__right__item').length
  for(let i = 0; i < countElem; i++ ){
    $('.help__right__item').eq(i).attr('data-index', i);
  }

  $('.help__right__item').click(function(){
    if($(this).hasClass('active')){
      return false
    }else{
      $('.help__right__item').removeClass('active')
      $(this).addClass('active')
      let thisIndex = $(this).attr('data-index')
      $('.help__content').removeClass('active')
      $('.help__content').eq(thisIndex).addClass('active')
      if($(window).width() < 768){
        $('html, body').animate({
            scrollTop: $('.help__left').offset().top  // класс объекта к которому приезжаем
        }, 300);
      }
    }
  })
  if($('.js-validate').length){
    $(".js-validate").validate({
      submitHandler: function(form) {
        $('.contact-page-form').fadeOut()
        $('.contact-susses').fadeIn()
        return false;
      }
    });
    $.validator.messages.required = "Поле должно быть заполнено";
    $.validator.messages.minlength = "Пожалуйста введите минимум 8 символов"
  }

  //архив валют
  if( $('.select').length ){
      $('.select').selectric()
  }

  $('.slideCheckbox').on("change", function() {
        $('.js-usertype input').attr('required') ?
        $('.js-usertype input').removeAttr('required') : $('.js-usertype input').attr('required', 'true');
        $('.js-usertype').slideToggle();
    });

  // календарь
  $('.calendar-more-btn').on('click', function(){
    $(this).toggleClass('active')
    $(this).closest('.calendar__child').toggleClass('active')
    $(this).closest('.calendar__child').find('.calendar__item__h').slideToggle()
  })

  $('.spoiler-body').hide(300);
  $('.spoiler-wrap.active .spoiler-body').show(300);
	$(document).on('click','.spoiler-head',function (e) {
		e.preventDefault()
		$(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
	})

  $('.norm-select__top').on('click', function(){
    $('.norm-select').toggleClass('active')
  })

  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".norm-select"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.norm-select').removeClass('active')
		}
  });
  
  $('.norm-select__bot li').on('click', function(){
    $('.norm-select__top .norm-select-data').text($(this).text())
    $('.norm-select').toggleClass('active')
  })


  $('.arhiv-select select').on('change', function(){
    
    console.log($(this).val())
    $('.arhiv__wrap').hide().removeClass('active')
    $('#' + $(this).val()).fadeIn().addClass('active')
  })
});
