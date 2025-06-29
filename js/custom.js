$(document).ready(function () {
  // Popup initialization for YouTube and Vimeo
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });

  // Accordion functionality
  const togglers = document.querySelectorAll('[data-bs-toggle]');
  togglers.forEach((btn) => {
    const targetBlock = document.querySelector(btn.dataset.bsToggle);
    if (btn.classList.contains('active')) {
      targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
      btn.closest('.accordion__item').classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      const block = document.querySelector(e.currentTarget.dataset.bsToggle);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
        e.currentTarget.closest('.accordion__item').classList.remove('active');
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
        e.currentTarget.closest('.accordion__item').classList.add('active');
      }
      e.currentTarget.classList.toggle('active');
      document.querySelectorAll('.accordion__header').forEach((header) => {
        if (header !== e.currentTarget) {
          header.classList.remove('active');
          document.querySelector(header.dataset.bsToggle).style.maxHeight = '';
          header.closest('.accordion__item').classList.remove('active');
        }
      });
    });
  });

  // Hidden menu toggle
  $('#show-hidden-menu').click(function () {
    $('.hidden-menu').slideToggle('slow');
  });

   // Hidden menu toggle
  $('#show-hidden-menu-table-content').click(function () {
    $('.hidden-menu-table-content').slideToggle('slow');
  });

  // Form focus styling
  $('input,textarea').val('');
  $('.form-group input, .form-group textarea, .form-group select').focusout(function () {
    const text_val = $(this).val();
    if (text_val === '') {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });

  // Screenshot carousel initialization
  $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1200: { items: 3 },
    },
  });

  // Testimonial carousel initialization
  $('#testimonilas_slider').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
      1200: { items: 3 },
    },
  });

    // Testimonial carousel initialization
  $('#blog_testimonilas_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
  });

  // Scroll to top button logic
  const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
  const rootElement = document.documentElement;

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.02) {
      scrollToTopBtn.classList.add('showBtn');
    } else {
      scrollToTopBtn.classList.remove('showBtn');
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
  document.addEventListener('scroll', handleScroll);

  // PCOS reviews carousel initialization
  $('#Our_pcosreviews_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1200: { items: 3 },
    },
  });

  $('.owl-nav .owl-prev').attr('role', 'button');
  $('.owl-nav .owl-next').attr('role', 'button');

   // Journey carousel initialization
  $('#journey_slider').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
      1200: { items: 1 },
    },
  });

  // Video item click handler
  $('.vid-item').each(function (index) {
    $(this).on('click', function () {
      $('.vid-item .thumb').removeClass('active');
      $(`.vid-item:nth-child(${index + 1}) .thumb`).addClass('active');
    });
  });
});





    // Initialize carousel for testimonials
    $(".greycontent_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });



    // Initialize carousel for testimonials
    $(".treadingblogs_slider").owlCarousel({
      loop: !0,
      responsiveClass: !0,
      nav: !0,
      margin: 0,
      // autoplay: !0,
      autoplayTimeout: 4e3,
      smartSpeed: 400,
      center: !0,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });



/*** 3. Tab Functionality ***/
function setupTabs() {
  $(".tabb_content").hide().first().show();
  $("ul.nptabbs li").on("click", function() {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $("ul.nptabbs li").removeClass("active");
    $(this).addClass("active");
    $(".tabb_drawer_heading").removeClass("d_active");
    $(".tabb_drawer_heading[rel='" + target + "']").addClass("d_active");
  });
  $(".tabb_drawer_heading").on("click", function() {
    const target = $(this).attr("rel");
    $(".tabb_content").hide();
    $("#" + target).fadeIn();
    $(".tabb_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.nptabbs li").removeClass("active");
    $("ul.nptabbs li[rel='" + target + "']").addClass("active");
  });
  $("ul.nptabbs li").last().addClass("tabb_last");
}

function tabControl() {
  const tabs = $(".tabbed-content .tabs");
  if(tabs.is(":visible")) {
    tabs.find("a").on("click", function(e) {
      e.preventDefault();
      const target = $(this).attr("href");
      tabs.find("a").removeClass("active");
      $(".tabbed-content .item").removeClass("active");
      $(this).addClass("active");
      $(target).addClass("active");
    });
  } else {
    $(".tabbed-content .item").on("click", function() {
      const target = $(this).attr("id");
      const parent = $(this).parents(".tabbed-content");
      parent.find(".tabs a").removeClass("active");
      parent.find(".item").removeClass("active");
      $(this).addClass("active");
      parent.find(`.tabs a[href="#${target}"]`).addClass("active");
    });
  }
}
setupTabs();
tabControl();
let resizeTimer;
$(window).on("resize", function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(tabControl, 250);
});


  // $(document).ready(function () {
  //   $(".nptabbs li").click(function () {
  //     var tab_id = $(this).attr("rel");

  //     // Tab styling
  //     $(".nptabbs li").removeClass("active");
  //     $(this).addClass("active");

  //     // Content toggle
  //     $(".tabb_content").hide();
  //     $("#" + tab_id).fadeIn();

  //     // Banner toggle
  //     if (tab_id === "tabb1") {
  //       $("#banner1").fadeIn();
  //       $("#banner2").hide();
  //     } else if (tab_id === "tabb2") {
  //       $("#banner2").fadeIn();
  //       $("#banner1").hide();
  //     }
  //   });

  //   // Optional: mobile drawer headings
  //   $(".tabb_drawer_heading").click(function () {
  //     var tab_id = $(this).attr("rel");
  //     $(".tabb_content").hide();
  //     $("#" + tab_id).fadeIn();

  //     $(".tabb_drawer_heading").removeClass("d_active");
  //     $(this).addClass("d_active");

  //     // Banner toggle
  //     if (tab_id === "tabb1") {
  //       $("#banner1").fadeIn();
  //       $("#banner2").hide();
  //     } else if (tab_id === "tabb2") {
  //       $("#banner2").fadeIn();
  //       $("#banner1").hide();
  //     }
  //   });
  // });