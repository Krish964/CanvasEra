import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors"
import fs from "fs"
const app = express();
const port = 9000;


app.use(cors());
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/landing.html");
})

app.get("/getstarted", (req, res) => {
  res.sendFile(__dirname + "/login.html");
})

app.get("/mainpage", (req, res) => {
  res.sendFile(__dirname + "/mainpage.html");
})


app.get("/exhibitions", (req, res) => {
  const exhibitions = [
    {
      id: 1,
      title: "Colors of Tomorrow",
      location: "Delhi Art Square",
      date: "2025-07-25",
      image: "/image1.jpg",
      description: "A futuristic take on urban chaos."
    },
    {
      id: 2,
      title: "Ink & Illusion",
      location: "Ravindra Bhavan, Goa",
      date: "2025-08-02",
      image: "/image2.jpg",
      description: "Experimental ink art and optical illusions."
    },
    {
      id: 3,
      title: "Rustic Realities",
      location: "Bangalore Art House",
      date: "2025-08-15",
      image: "/image3.jpg",
      description: "Village life captured on canvas."
    },
    {
      id: 4,
      title: "Canvas Pulse",
      location: "Lalit Kala Akademi, Delhi",
      date: "2025-08-30",
      image: "/image4.jpg",
      description: "The beat of colors and abstract movement."
    },
    {
      id: 5,
      title: "Frame by Frame",
      location: "Cholamandal Artists' Village, Chennai",
      date: "2025-09-05",
      image: "/image5.jpg",
      description: "Photo-realistic art meets old cinema."
    },
    {
      id: 6,
      title: "Sky Stories",
      location: "Jaipur City Art Hall",
      date: "2025-09-15",
      image: "/image7.jpg",
      description: "Skyscapes and cloud-based installations."
    },
    {
      id: 7,
      title: "Urban Echoes",
      location: "Jehangir Art Gallery, Mumbai",
      startDate: "2025-06-25",
      endDate: "2025-07-10",
      image: "/image7.jpg",
      description: "A commentary on modern city life."
    },
    {
      id: 8,
      title: "Mystic Forms",
      location: "Gallery Rasa, Kolkata",
      startDate: "2025-06-20",
      endDate: "2025-07-05",
      image: "/image8.jpg",
      description: "Symbolism and sacred geometry on canvas."
    },
    {
      id: 9,
      title: "Shadow & Shape",
      location: "Art Houz, Chennai",
      startDate: "2025-06-28",
      endDate: "2025-07-15",
      image: "/image9.jpg",
      description: "A 3D sculpture experience."
    },
    {
      id: 10,
      title: "Beyond Real",
      location: "Alliance Française, Delhi",
      startDate: "2025-06-29",
      endDate: "2025-07-06",
      image: "/image10.jpg",
      description: "Blending reality with fantasy in art."
    },
    {
      id: 11,
      title: "Portraits of Peace",
      location: "Gandhi Art Gallery, Ahmedabad",
      startDate: "2025-06-20",
      endDate: "2025-07-07",
      image: "/image11.jpg",
      description: "Peaceful faces from around the world."
    },
    {
      id: 12,
      title: "Silent Symphony",
      location: "Academy of Fine Arts, Lucknow",
      startDate: "2025-06-12",
      endDate: "2025-06-22",
      image: "/image12.jpg",
      description: "Minimalist and meditative art forms."
    }, 
    {
      id: 13,
      title: "Echoes in Paint",
      location: "Kala Bhavan, Bhopal",
      date: "2025-04-10",
      image: "/image9.jpg",
      description: "Memory-based abstract art show."
    },
    {
      id: 14,
      title: "Serenity in Motion",
      location: "Lalit Kala Gallery, Hyderabad",
      date: "2025-03-15",
      image: "/image10.jpg",
      description: "Fluid brushwork across landscapes."
    },
    {
      id: 15,
      title: "The Ink Within",
      location: "ArtCore, Jaipur",
      date: "2025-05-05",
      image: "/image4.jpg",
      description: "Black & white expressionism."
    },
    {
      id: 16,
      title: "Folk Vibes",
      location: "Bharat Bhavan, Indore",
      date: "2025-04-22",
      image: "/image1.jpg",
      description: "Folk art forms across India."
    },
    {
      id: 17,
      title: "Time Textures",
      location: "Goa Art Circle",
      date: "2025-05-12",
      image: "/sculpture.jpg",
      description: "Rust, erosion, and decay in modern art."
    },
    {
      id: 18,
      title: "Lightscapes",
      location: "Punjab Art Studio",
      date: "2025-05-20",
      image: "/image2.jpg",
      description: "Study of light in painting."
    }, 
    {
      id: 19,
      title: "Ink Pulse",
      location: "Mumbai Central Gallery",
      date: "2025-06-01",
      image: "/image8.jpg",
      description: "Contemporary calligraphy showcase."
    },
    {
      id: 20,
      title: "Rustic Walls",
      location: "Kolkata Art Space",
      date: "2025-06-03",
      image: "/image6.jpg",
      description: "Old wall textures reimagined."
    },
    {
      id: 21,
      title: "Mind’s Canvas",
      location: "Bangalore Fine Arts",
      date: "2025-06-04",
      image: "/image5.jpg",
      description: "Mental health expressed through color."
    },
    {
      id: 22,
      title: "Color Clock",
      location: "Vadodara Art Lounge",
      date: "2025-06-06",
      image: "/image12.jpg",
      description: "Time-based abstract expressions."
    },
    {
      id: 23,
      title: "Mirror Frame",
      location: "Udaipur Heritage Hall",
      date: "2025-06-08",
      image: "/image11.jpg",
      description: "Reflections and frame installations."
    },
    {
      id: 24,
      title: "The Dust Trail",
      location: "Nagpur Canvas House",
      date: "2025-06-10",
      image: "/image7.jpg",
      description: "Charcoal and dry pigment experiment."
    },
    {
      id: 25,
      title: "Rhythms of Ink",
      location: "Art Vibe Studio, Pune",
      startDate: "2025-06-20",
      endDate: "2025-07-08",
      image: "/image9.jpg",
      description: "Ink and tribal art fused in rhythmic harmony."
    },
    {
      id: 26,
      title: "Canvas Collide",
      location: "Mumbai Kala Kendra",
      startDate: "2025-06-05",
      endDate: "2025-06-25",
      image: "/image1.jpg",
      description: "Mixed media collages reflecting urban life."
    },
    {
      id: 27,
      title: "Silent Strokes",
      location: "Varanasi Art Lane",
      startDate: "2025-06-05",
      endDate: "2025-06-25",
      image: "/image4.jpg",
      description: "Minimalist paintings with a focus on texture."
    },
    {
      id: 28,
      title: "The Clay Rhythm",
      location: "Terracotta Gallery, Ranchi",
      startDate: "2025-06-05",
      endDate: "2025-06-25",
      image: "/sculpture.jpg",
      description: "Clay sculptures expressing tribal dance forms."
    }
    
  ];

  res.json(exhibitions);
});


app.get("/featuredartists", (req, res) => {
  const featuredArtist = [
    {
      name: "Mohammad Kazmi",
      country: "Pakistan",
      medium: "Watercolor",
      quote: "Watercolor is not just a medium, it's a reflection of impermanence — like life itself.",
      image: "/mkazmi.jpg",
      description: "Mohammad Kazmi, a celebrated Pakistani watercolor artist, brings life to paper with nothing more than water, pigment,and emotion.Known for his ethereal landscapes and subtle portraits, Kazmi’s work beautifully captures the fleeting essence of nature and human emotion.His brush strokes are delicate, yet powerful — often blending tradition with a modern, minimalist touch With decades of dedication to his craft, Kazmi’s paintings feel like whispered poetry — quiet, yet deeply moving.His mastery of light, shadow, and transparency turns everyday scenes into timeless works of art.Whether it’s a mistymorning street in Lahore or a fading memory of childhood, every piece invites the viewer into a serene world paintedwith sensitivity and soul."
    }
  ]

  res.json(featuredArtist)
})


app.get("/voiceofCanvas", (req, res) => {
  const testimonials = [
    {
      quote: "CanvasEra connected me to my first-ever art buyers! A dream come true.",
      name: "Meera Kapoor",
      role: "Watercolor Artist",
      image: "https://i.pravatar.cc/100?img=32",
      borderColor: "border-pink-400"
    },
    {
      quote: "As a curator, this platform made it easier to discover hidden talent.",
      name: "Rohit Bansal",
      role: "Gallery Curator",
      image: "https://i.pravatar.cc/100?img=45",
      borderColor: "border-amber-400"
    },
    {
      quote: "I’ve explored exhibits worldwide from my laptop. Magical experience!",
      name: "Aliya Rehman",
      role: "Art Enthusiast",
      image: "https://i.pravatar.cc/100?img=5",
      borderColor: "border-indigo-400"
    },
    {
      quote: "CanvasEra is the digital renaissance of modern art. Proud to be featured.",
      name: "Mohammad Kazmi",
      role: "Pakistani Watercolor Artist",
      image: "https://i.pravatar.cc/100?img=11",
      borderColor: "border-green-400"
    },
    {
      quote: "Never thought I’d meet so many like-minded creators. Amazing platform!",
      name: "Sneha Joshi",
      role: "Mixed Media Artist",
      image: "https://i.pravatar.cc/100?img=28",
      borderColor: "border-purple-400"
    },
    {
      quote: "Great place for fresh art grads to get visibility & connections!",
      name: "Aman Verma",
      role: "Art Student",
      image: "https://i.pravatar.cc/100?img=19",
      borderColor: "border-yellow-400"
    }
  ];
  
  res.json(testimonials)
})

app.get("/mainpage", (req, res) => {
  res.sendFile(__dirname + "/mainpage.html")
})

// Post request handling of signup form

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
  const { email, signuppassword, cnfpassword } = req.body;

  if (signuppassword !== cnfpassword) {
    return res.status(400).send("Passwords do not match");
  }

  const newUser = {
    email,
    password: signuppassword,
    confirmpassword: cnfpassword,
  };

  let users = [];

  fs.readFile("Userdata.json", "utf-8", (err, data) => {
    if (!err && data) {
      try {
        users = JSON.parse(data);
      } catch (e) {
        console.log("Error parsing JSON:", e);
      }
    }

    users.push(newUser);

    fs.writeFile("Userdata.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Error saving data");
      }

      res.sendFile(__dirname + "/mainpage.html");
    });
  });
});

// post request handling of login form
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  fs.readFile("Userdata.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Server error while reading data");
    }

    let users = [];

    if (data) {
      try {
        users = JSON.parse(data);
      } catch (e) {
        return res.status(500).send("User data is encrypted");
      }
    }

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      res.sendFile(__dirname + "/mainpage.html");
    } else {
      res.send("User not found!!");
    }
  });
});


app.listen(port, () => {
  console.log(`port is listening at port ${port}`)
})