// connect to the socket
let socket = io();

socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

// main
$(document).ready(function(){
  console.log('Ready')

  $.get('/init', (result) => {
    $('#hero-area').append(createHero(result.heroContent))
    $('#intro-area').append(createIntro(result.introContent))
    for (let item of result.frameSlideContent) {
      $('#frameslide-area').append(createFrameCard(item))
    }
    $('#tabs-area').append(createTabs(result.tabsContent, result.buttons))
    createTabContent(result.tabsContent)
    //$('#carousel-area').append(createCarouselContent(result.carouselContent))
    createSlideContent(result.slideContent)
    createAmenitiesContent(result.amenitiesContent)
  })

  $('#nav-bar').load('components/navbar.html', () => {
    //$('.sidenav').sidenav()
    $('.tabs').tabs()
    //$('.carousel').carousel();
    $('.slider').slider();
    $('.scrollspy').scrollSpy();
  })
  
})
