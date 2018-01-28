jQuery(() => $(document).on('turbolinks:load', e => {

  $('.js-toggle-seo').on('click', (e) => {
    e.preventDefault();
    if (Cookies.get('seo') == "show") {
      Cookies.set('seo', 'hide');
      $('.alert.seo').hide();
    } else {
      Cookies.set('seo', 'show');
      $('.alert.seo').show();
    }
  });

}));
