document.addEventListener("DOMContentLoaded", () => {
  const upcomingConatiner = document.getElementById("ongoingUl");
  const pastlist = document.querySelector("#pastListUl");
  const ongoinglist = document.querySelector("#currentUl")
  console.log(ongoinglist);

  fetch("http://localhost:9000/exhibitions")
    .then((res) => res.json())
    .then((data) => {
      const today = new Date()
      const upcoming = data.filter(e => new Date(e.date) > today)
      const past = data.filter(e => new Date(e.date) < today)
      const ongoing = data.filter(e => {
        if (!e.startDate || !e.endDate) return false;

        const today = new Date();
        const start = new Date(e.startDate);
        const end = new Date(e.endDate);

        return today >= start && today <= end;
      });
      console.log(ongoing)

      // Function of displaying cards

      function displayCards(cardContainer, data) {
        
        data.forEach((item) => {
          const li = document.createElement("div");
          li.className =
            "swiper-slide flex flex-col items-center justify-between w-[23vw] h-[50vh] p-5 bg-gray-900 text-white rounded-2xl shadow-md hover:shadow-pink-500/20 transition-transform duration-300 hover:scale-105 m-4 border border-gray-700";

          li.innerHTML = `
            <div class="img flex justify-center items-center mb-2">
              <img class="w-[200px] h-[200px] object-cover rounded-xl shadow-lg" src="${item.image}" alt="">
            </div>
            
            <h1 class="font-semibold font-sans text-lg text-center mb-1 hover:text-pink-400 transition duration-200">${item.title}</h1>
        
            <div class="text-center px-2 mb-1">
              <h2 class="text-sm font-mono text-gray-300 line-clamp-2">${item.description}</h2>
            </div>
        
            <span class="flex gap-3 text-sm text-gray-400 items-center justify-center mb-1">
              <h2><i class="fa-solid fa-location-dot mr-1 text-pink-400"></i>${item.location}</h2>
              <h2><i class="fa-regular fa-calendar-days mr-1 text-yellow-400"></i>${item.date}</h2>
            </span>
        
            <div class="flex justify-center items-center mt-2">
              <button class="px-5 py-2 bg-pink-600 hover:bg-pink-700 transition text-white rounded-2xl font-sans text-sm shadow hover:shadow-pink-500/40">
                Know More
              </button>
            </div>
          `;
         
          cardContainer.appendChild(li);
        });
        
  
      }

      displayCards(upcomingConatiner , upcoming )
      displayCards(pastlist , past )
      displayCards(ongoinglist , ongoing )


      // function of swiper handing

      const upcomingswiper = document.querySelector(".swiperUpcoming")
      const pastswiper = document.querySelector(".swiperPast")
      const ongoingswiper = document.querySelector(".swiperCurrent")

      function handleSwiper(swiperClass) {
        const upcomingSwiper = new Swiper(swiperClass, {
          slidesPerView: 3,
          loop: true,
          spaceBetween: 30,
          autoplay: { delay: 2500, disableOnInteraction: false },
          breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          },
        });

       swiperClass.addEventListener("mouseenter", () => {
          upcomingSwiper.autoplay.stop();
        });
       swiperClass.addEventListener("mouseleave", () => {
          upcomingSwiper.autoplay.start();
        });

      }

      handleSwiper(upcomingswiper)
      handleSwiper(pastswiper)
      handleSwiper(ongoingswiper)

    })
    .catch((err) => console.error("Error fetching data:", err));


  // Featured Artist section

  function featuredArtistData() {
    fetch("http://localhost:9000/featuredartists")
      .then((response) => response.json())
      .then((data) => {

        data.forEach((e) => {

          const divConatiner = document.querySelector(".featuredArtist")

          const artist = document.createElement("div")

          // artist.className = "flex flex-col justify-center items-center m-10 rounded-2xl gap-5 shadow-xl bg-gradient-to-bl from-pink-200 to-amber-100 p-5 duration-300 ease-in-out hover:scale-105"

          artist.className = "flex flex-col items-center justify-center"
          artist.innerHTML = ` <div class="heading">
          <h1
          class="text-4xl text-center font-bold  bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ">
          Featured Artists of the month</h1>
          </div>
          
        <div class="contentSection flex gap-5 p-5">
          <div class="image flex flex-col items-center justify-center"><img class="w-[200px] h-[200px] object-cover rounded-full" src="${e.image}" alt=""
          </div>
          <div class="about flex flex-col items-center justify-center gap-4">
          <h1 class="text-3xl font-bold text-orange-400">${e.name}</h1>
          <div class="title text-xl font-semibold">${e.quote}</div>
          <div class="description w-[60vw]">${e.description}</div>
          
          <div class="button "><button
          class="bg-red-700 text-white px-5 py-2 rounded-xl font-semibold cursor-pointer duration-300 hover:bg-teal-400">View
          Full Profile</button></div>
          </div>
        </div>`

          divConatiner.appendChild(artist)
        })
      })

  }

  featuredArtistData();

});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const getStartedBtn = document.getElementById("getStarted");
  const loginForm = document.getElementById("loginForm")
  const signupForm = document.querySelector("#signUpForm")
  console.log(signupForm)
  // if (loginBtn) {
  //   loginBtn.addEventListener("click", () => {

  //   });
  // }

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      loginForm.classList.remove("block");

      signupForm.classList.remove("hidden");
      signupForm.classList.add("block");

      signupBtn.classList.add("bg-teal-300", "text-black");
      signupBtn.classList.remove("bg-white", "text-gray-800");

      loginBtn.classList.remove("bg-teal-300", "text-black");
      loginBtn.classList.add("text-white");
    });
  }
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      // ✅ Form switch (signupForm ko hide karna hai)
      signupForm.classList.remove("block");
      signupForm.classList.add("hidden");

      loginForm.classList.remove("hidden");
      loginForm.classList.add("block");

      // ✅ Button style (color toggle)
      loginBtn.classList.add("bg-teal-300", "text-black");
      loginBtn.classList.remove("bg-white", "text-gray-800");

      signupBtn.classList.remove("bg-teal-300", "text-black");
      signupBtn.classList.add("text-white");
    });
  }

  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      window.location.href = "/getstarted"; // GET request to /getstarted
    });
  }


  // Fetching testimonials and handling it...
  fetch("http://localhost:9000/voiceofCanvas")
    .then((res) => res.json())
    .then((data) => {
      const testimonialContainer = document.querySelector("#swiperWrapper");

      data.forEach((t) => {
        const slide = document.createElement("div");
        slide.className =
          "swiper-slide bg-gray-900/90 rounded-3xl shadow-lg p-6 m-2 max-w-md mx-auto transition-transform duration-300 hover:scale-105 backdrop-blur-md border border-gray-700";

        slide.innerHTML = `
          <p class="text-gray-300 italic mb-4 text-center">"${t.quote}"</p>
          <div class="flex items-center gap-4 mt-4 p-3 bg-gray-800 rounded-xl shadow-md hover:shadow-pink-500/20 transition duration-300">
            <img src="${t.image}" class="w-14 h-14 rounded-full border-2 ${t.border} shadow-lg" />
            <div>
              <h3 class="font-bold text-white text-lg hover:text-pink-400 transition">${t.name}</h3>
              <span class="text-sm text-gray-400">${t.role}</span>
            </div>
          </div>
        `;

        testimonialContainer.appendChild(slide);
      });
    })
    .catch((err) => console.error("Error fetching testimonials:", err));

  const testimonialSwiper = new Swiper(".myTestimonial", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });


});
