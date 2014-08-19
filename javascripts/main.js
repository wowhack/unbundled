(function($){
  // Container of our app
  window.App = {};

  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    App.Skrollr = skrollr.init({forceHeight:false,mobileDeceleration: 0.0003});
    App.Skrollr.refresh();
  }

  /*var i18n_options = {
    fallbackLng: 'en',
    useLocalStorage: true,
    localStorageExpirationTime: 120,
    fallbackOnNull: true,
    fallbackOnEmpty: true,
    resGetPath: '/assets/locales/__lng__.json'
  };*/

  // Init translations
  /*$.i18n.init(i18n_options, function (t){
    $(document).i18n();

  });*/

  $('.scrolllink').click(function(){
		$("html, body").animate({
      scrollTop: $( $(this).data("scrollto") ).offset().top
    }, 1000);
		return false;
	});

})(jQuery);