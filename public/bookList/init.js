
// main
$(document).ready(function(){
  console.log('Ready')
  $.get('/api/init', (res) => {
    if(res.statusCode != 200)
      return null
    let result = res.result

    //nav
    $('#nav-bar').load('../components/navbar.html', () => {
      //createBookingModal(result[1].bookModalContent);
      //$('.sidenav').sidenav()
      $('.tabs').tabs()
      $('.slider').slider();
      $('.scrollspy').scrollSpy();
      $('.modal').modal();
      $('select').formSelect();
      $('nav #bookBtn').hide();
    })

    $('footer').load('../components/footer.html', () => {})


    $.get('/api/bookList', (res) => {
        if(res.statusCode != 200)
            return null
        let result = res.result
        console.log('--> book list: ', result)
        createBookList(result)
    })
  }) 
})
