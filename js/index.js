const openMenu = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__nav');

openMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.toggle('active');
        openMenu.textContent = 'Меню'
        if(screen.width < 992) {
            document.documentElement.style.overflow = 'auto';
        }

    } else {
        menu.classList.toggle('active');
        openMenu.textContent = 'Закрыть'
        if(screen.width < 992) {
            document.documentElement.style.overflow = 'hidden';
        }
        document.body.addEventListener('click', onclickOutside);
    }
});

function onclickOutside(evt) {
    if (evt.target.classList.contains('active')) {
        menu.classList.toggle('active');
        openMenu.textContent = 'Закрыть'
    }
  };


const mainSlider = new Swiper('.main-slider', {

    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass +'"></span>' + 
            '<svg width="64" height="2" viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="8.74228e-08" y1="1" x2="64" y2="1.00001" stroke="white" stroke-width="2"/></svg>' + 
            '<span class="' + totalClass + '"></span>'
        }
    },
    speed: 1000,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: true,
        disableOnIteraction: false,
      },
});

document.addEventListener('DOMContentLoaded', () => {
    let mapMain = document.querySelector('.map');
    if (mapMain) {
        let allMapObl = mapMain.querySelectorAll('.map__oblast');
        let allCities = mapMain.querySelectorAll('.city');
        
        mapMain.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('map__oblast')) {
                let targetId = target.getAttribute('id').replace('_path', '');
                let targetObl = mapMain.querySelector(`.city[data-id="${targetId}"]`);
                
                allCities.forEach(item => item.classList.remove('active'));
                targetObl.classList.add('active');
            } else {
                allCities.forEach(item => item.classList.remove('active'));
            }
        });
    }
});



const newsSlider = new Swiper('.news__slider', {

    spaceBetween: 30,
    speed: 1000,
     slidesPerView: 2.5,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        998: {
          slidesPerView: 2.5,
        },
      },
    // autoplay: {
    //     delay: 3500,
    //     stopOnLastSlide: true,
    //     disableOnIteraction: false,
    //   },
});

const servicesSlider = new Swiper('.selection__slider', {

  spaceBetween: 30,
  speed: 1000,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  // autoplay: {
  //     delay: 3500,
  //     stopOnLastSlide: true,
  //     disableOnIteraction: false,
  //   },
});


const reviewsSlider = new Swiper('.reviews__slider', {
    spaceBetween: 30,
    speed: 1000,
     slidesPerView: 2.5,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        998: {
          slidesPerView: 3,
        },
      },
    // autoplay: {
    //     delay: 3500,
    //     stopOnLastSlide: true,
    //     disableOnIteraction: false,
    //   },
})



const $triggers = document.querySelectorAll('[data-accordeon-trigger]');

const handleAccordionClick = evt => {
  const $trigger = evt.currentTarget;
  const $content = $trigger.parentElement.querySelector('[data-accordeon-content]');
  
  // Закрытие всех открытых аккордеонов, кроме текущего
  $triggers.forEach(otherTrigger => {
    if (otherTrigger !== $trigger) {
      const otherContent = otherTrigger.parentElement.querySelector('[data-accordeon-content]');
      otherContent.classList.remove('opened');
      otherTrigger.classList.remove('_active');
    }
  });

  // Открытие/закрытие текущего аккордеона
  $content.classList.toggle('opened');
  $trigger.classList.toggle('_active');
};

$triggers.forEach($trigger =>
  $trigger.addEventListener('click', handleAccordionClick),
);

const matContainer = document.querySelector('.materials__container');
if(matContainer) {
  const matItems = matContainer.querySelectorAll('.materials__content');

matItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  })
});
};


const interiorSlider = new Swiper('.interior__slider', {
  spaceBetween: 30,
  speed: 1000,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  // autoplay: {
  //     delay: 3500,
  //     stopOnLastSlide: true,
  //     disableOnIteraction: false,
  //   },
});


document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылки на все табы
  const tabs = document.querySelectorAll(".tabs a");

  // Добавляем обработчики событий для каждого таба
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Проверяем, не является ли выбранный таб уже активным
      if (!tab.classList.contains("active")) {
        // Удаляем активный класс у всех табов
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });

        // Добавляем активный класс выбранному табу
        tab.classList.add("active");

        // Получаем id соответствующего контейнера с содержимым таба
        const targetId = tab.getAttribute("href").substr(1);
        // Удаляем активный класс у всех контейнеров с содержимым табов
        document
          .querySelectorAll(".layout__container")
          .forEach(function (tabContent) {
            tabContent.classList.remove("active");
          });

        // Добавляем активный класс соответствующему контейнеру с содержимым выбранного таба
        document.getElementById(targetId).classList.add("active");
      }
    });
  });

  // Устанавливаем активный класс для первого таба при загрузке страницы
  if (tabs > 0) {
    tabs[0].classList.add("active");
  }
});

const stageSlider = new Swiper('.stage__slider', {
  spaceBetween: 30,
  speed: 1000,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  // autoplay: {
  //     delay: 3500,
  //     stopOnLastSlide: true,
  //     disableOnIteraction: false,
  //   },
});

$('input[type="tel"]').on('click', function() {
}).mask('+7 (999) 999 99 99');


const videoNewsSlider = new Swiper('.video-news__slider', {
  spaceBetween: 30,
  speed: 1000,
  slidesPerView: 2,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      998: {
        slidesPerView: 2,
      },
    },
  // autoplay: {
  //     delay: 3500,
  //     stopOnLastSlide: true,
  //     disableOnIteraction: false,
  //   },
});


const partnersSlider = new Swiper('.partners__slider', {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      998: {
        slidesPerView: 4,
      },
    },
  autoplay: {
      delay: 3500,
      stopOnLastSlide: true,
      disableOnIteraction: false,
    },
});