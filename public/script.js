document.addEventListener("DOMContentLoaded", () => {
  const upcomingConatiner = document.getElementById("ongoingUl");
  const pastlist = document.querySelector("#pastListUl");
  const ongoinglist = document.querySelector("#currentUl")

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
          li.className = "swiper-slide flex flex-col items-center justify-center  w-[23vw] h-[50vh] p-5 bg-amber-50 rounded-2xl shadow-xl transition-transform duration-300 hover:bg-white hover:scale-105 m-4";

          li.innerHTML = `
            <div class="img flex justify-center items-center">
              <img class="w-[200px] h-[200px] object-fill rounded-2xl" src="${item.image}" alt="">
            </div>
            <h1 class="font-semibold font-sans text-center">${item.title}</h1>
           <div class ="text-center"> <h2 class="w-full text-center font-mono text-sm font-medium">${item.description}</h2>
      </div>       <span class="flex gap-4 text-sm items-center justify-center">
              <h2>${item.location}</h2>
              <h2>${item.date}</h2>
            </span>
  
            <div class ="flex justify-center item-center mt-3">
            <button class="mb-3 px-5 py-3 bg-teal-300 rounded-2xl font-sans text-sm cursor-pointer ">Know More</button>
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
          "swiper-slide bg-white/80 rounded-3xl shadow-lg p-6 m-2 max-w-md mx-auto transition-transform duration-300 hover:scale-105 backdrop-blur-md";

        slide.innerHTML = `
          <p class="text-gray-700 italic mb-4">"${t.quote}"</p>
          <div class="flex items-center gap-4 mt-4">
            <img src="${t.image}" class="w-14 h-14 rounded-full border-2 ${t.border}" />
            <div>
              <h3 class="font-bold text-lg">${t.name}</h3>
              <span class="text-sm text-gray-500">${t.role}</span>
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
