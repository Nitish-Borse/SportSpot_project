const sampleSportsItems = [
  {
    title: "Synthetic Football Turf - Downtown",
    type: "ground",
    description: "Premium 5-a-side turf with night lighting and seating area.",
    pricePerHour: 1200,
    location: "Pune, Maharashtra",
    sportCategory: "Football",
    availableDates: ["2025-08-15", "2025-08-16", "2025-08-20"],
    image: {
      url: "https://images.unsplash.com/photo-1511204338744-5d4e9b3ffee0?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "football_turf_01"
    }
  },
  {
    title: "Cricket Ground with Pavilion",
    type: "ground",
    description: "Full-size cricket pitch with scoreboard and pavilion.",
    pricePerHour: 2000,
    location: "Nagpur, Maharashtra",
    sportCategory: "Cricket",
    availableDates: ["2025-08-19", "2025-08-22", "2025-08-25"],
    image: {
      url: "https://images.unsplash.com/photo-1552435053-01c010307582?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "cricket_ground_01"
    }
  },
  {
    title: "Wilson Tennis Racket Pro Staff",
    type: "equipment",
    description: "Professional-grade racket for advanced players.",
    pricePerHour: 80,
    location: "Delhi, Delhi",
    sportCategory: "Tennis",
    availableDates: ["2025-08-13", "2025-08-18", "2025-08-22"],
    image: {
      url: "https://images.unsplash.com/photo-1557493680-99ae26025be8?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "tennis_racket_01"
    }
  },
  {
    title: "Indoor Badminton Court - AC Hall",
    type: "ground",
    description: "Air-conditioned indoor court with wooden flooring.",
    pricePerHour: 700,
    location: "Bengaluru, Karnataka",
    sportCategory: "Badminton",
    availableDates: ["2025-08-15", "2025-08-17", "2025-08-23"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1749494938087-94fa511eecd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "badminton_court_01"
    }
  },
  {
    title: "Adidas Football Ball - Match Quality",
    type: "equipment",
    description: "FIFA-approved ball for professional games.",
    pricePerHour: 20,
    location: "Chennai, Tamil Nadu",
    sportCategory: "Football",
    availableDates: ["2025-08-14", "2025-08-16", "2025-08-19"],
    image: {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "football_ball_01"
    }
  },
  {
    title: "Table Tennis Indoor Setup",
    type: "ground",
    description: "Indoor hall with professional TT tables and lighting.",
    pricePerHour: 500,
    location: "Hyderabad, Telangana",
    sportCategory: "Table Tennis",
    availableDates: ["2025-08-12", "2025-08-15", "2025-08-18"],
    image: {
      url: "https://images.unsplash.com/photo-1515773512591-dfaf9e052325?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "table_tennis_ground_01"
    }
  },
  {
    title: "Butterfly Table Tennis Paddle",
    type: "equipment",
    description: "Professional paddle with high spin and speed rating.",
    pricePerHour: 30,
    location: "Ahmedabad, Gujarat",
    sportCategory: "Table Tennis",
    availableDates: ["2025-08-14", "2025-08-16", "2025-08-20"],
    image: {
      url: "https://images.unsplash.com/photo-1636734909254-ff5c43927e10?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "table_tennis_paddle_01"
    }
  },
  {
    title: "Boxing Ring - Training Facility",
    type: "ground",
    description: "Full-size boxing ring with punching bags and gloves.",
    pricePerHour: 1500,
    location: "Kolkata, West Bengal",
    sportCategory: "Boxing",
    availableDates: ["2025-08-17", "2025-08-19", "2025-08-21"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1672774498392-2d4ae931bb27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "boxing_ring_01"
    }
  },
  {
    title: "Everlast Boxing Gloves",
    type: "equipment",
    description: "Leather gloves with extra padding for sparring.",
    pricePerHour: 25,
    location: "Surat, Gujarat",
    sportCategory: "Boxing",
    availableDates: ["2025-08-12", "2025-08-14", "2025-08-18"],
    image: {
      url: "https://images.unsplash.com/photo-1715423058726-ddea1ec51b66?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "boxing_gloves_01"
    }
  },
  {
    title: "Hockey Turf Ground",
    type: "ground",
    description: "Synthetic turf hockey ground with floodlights.",
    pricePerHour: 1300,
    location: "Lucknow, Uttar Pradesh",
    sportCategory: "Hockey",
    availableDates: ["2025-08-15", "2025-08-18", "2025-08-22"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1677010769385-51fad2ecadbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "hockey_turf_01"
    }
  },
  {
    title: "Field Hockey Stick",
    type: "equipment",
    description: "Lightweight composite stick for field play.",
    pricePerHour: 35,
    location: "Patna, Bihar",
    sportCategory: "Hockey",
    availableDates: ["2025-08-13", "2025-08-16", "2025-08-20"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1719318343150-04270c4c7952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "hockey_stick_01"
    }
  },
  {
    title: "Golf Course - 18 Hole",
    type: "ground",
    description: "Scenic golf course with clubhouse and caddies.",
    pricePerHour: 2500,
    location: "Jaipur, Rajasthan",
    sportCategory: "Golf",
    availableDates: ["2025-08-19", "2025-08-21", "2025-08-24"],
    image: {
      url: "https://images.unsplash.com/photo-1532508583690-538a1436f423?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "golf_course_01"
    }
  },
  {
    title: "Callaway Golf Club Set",
    type: "equipment",
    description: "Full set of clubs for beginner to intermediate golfers.",
    pricePerHour: 100,
    location: "Goa, Goa",
    sportCategory: "Golf",
    availableDates: ["2025-08-12", "2025-08-15", "2025-08-18"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1680374185017-1b3d2ccc1e0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "golf_club_set_01"
    }
  },
  {
    title: "Swimming Pool - Olympic Size",
    type: "ground",
    description: "Temperature-controlled Olympic-size swimming pool.",
    pricePerHour: 800,
    location: "Indore, Madhya Pradesh",
    sportCategory: "Swimming",
    availableDates: ["2025-08-14", "2025-08-17", "2025-08-21"],
    image: {
      url: "https://images.unsplash.com/photo-1519209233471-a93512eebb72?q=80&w=1353&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "swimming_pool_01"
    }
  },
  {
    title: "Speedo Swimming Goggles",
    type: "equipment",
    description: "Anti-fog goggles with UV protection.",
    pricePerHour: 15,
    location: "Bhopal, Madhya Pradesh",
    sportCategory: "Swimming",
    availableDates: ["2025-08-12", "2025-08-14", "2025-08-18"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1706300226410-0fae25a8af6b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "swimming_goggles_01"
    }
  },
  {
    title: "Yonex Badminton Racket",
    type: "equipment",
    description: "Lightweight carbon racket for intermediate players.",
    pricePerHour: 50,
    location: "Mumbai, Maharashtra",
    sportCategory: "Badminton",
    availableDates: ["2025-08-14", "2025-08-17", "2025-08-21"],
    image: {
      url: "https://images.unsplash.com/photo-1586768402600-714186e09479?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "badminton_racket_01"
    }
  },
  {
    title: "Basketball Indoor Court",
    type: "ground",
    description: "Wooden court with professional hoops and seating.",
    pricePerHour: 1000,
    location: "Chandigarh, Chandigarh",
    sportCategory: "Basketball",
    availableDates: ["2025-08-15", "2025-08-18", "2025-08-22"],
    image: {
      url: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "basketball_court_01"
    }
  },
  {
    title: "Spalding Basketball",
    type: "equipment",
    description: "NBA official size and weight ball.",
    pricePerHour: 20,
    location: "Amritsar, Punjab",
    sportCategory: "Basketball",
    availableDates: ["2025-08-13", "2025-08-15", "2025-08-19"],
    image: {
      url: "https://images.unsplash.com/photo-1650762342620-97406c54016c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "basketball_ball_01"
    }
  },
  {
    title: "Athletics Running Track",
    type: "ground",
    description: "Synthetic running track with 8 lanes.",
    pricePerHour: 900,
    location: "Ranchi, Jharkhand",
    sportCategory: "Athletics",
    availableDates: ["2025-08-14", "2025-08-17", "2025-08-20"],
    image: {
      url: "https://images.unsplash.com/photo-1585834567627-62b9392423a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "running_track_01"
    }
  },
  {
    title: "Nike Running Shoes",
    type: "equipment",
    description: "Lightweight shoes for long-distance running.",
    pricePerHour: 10,
    location: "Dehradun, Uttarakhand",
    sportCategory: "Athletics",
    availableDates: ["2025-08-12", "2025-08-14", "2025-08-18"],
    image: {
      url: "https://images.unsplash.com/photo-1558004282-e2b2587e3e47?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "running_shoes_01"
    }
  },
  {
    title: "Professional Archery Set",
    type: "equipment",
    description: "High-precision recurve bow with carbon arrows, suitable for competitive practice.",
    pricePerHour: 180,
    location: "Bhopal, Madhya Pradesh",
    sportCategory: "Archery",
    availableDates: ["2025-08-19", "2025-08-22", "2025-08-26"],
    image: {
      url: "https://images.unsplash.com/photo-1513907450027-b9926e160c2a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "archery_set_01"
    }
  },
  {
    title: "Floodlit Tennis Court",
    type: "ground",
    description: "Well-maintained hard court with professional lighting for night matches.",
    pricePerHour: 900,
    location: "Jaipur, Rajasthan",
    sportCategory: "Tennis",
    availableDates: ["2025-08-15", "2025-08-20", "2025-08-27"],
    image: {
      url: "https://images.unsplash.com/photo-1528930200294-1f4373f99a5a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "tennis_court_01"
    }
  },
  {
    title: "Indoor Volleyball Court",
    type: "ground",
    description: "Climate-controlled volleyball court with synthetic flooring.",
    pricePerHour: 1000,
    location: "Chennai, Tamil Nadu",
    sportCategory: "Volleyball",
    availableDates: ["2025-08-14", "2025-08-18", "2025-08-24"],
    image: {
      url: "https://images.unsplash.com/photo-1585345379481-46246846403a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "volleyball_court_01"
    }
  },
  {
    title: "Kayak with Safety Gear",
    type: "equipment",
    description: "Single-person kayak with paddle and life jacket, ideal for lakes and rivers.",
    pricePerHour: 300,
    location: "Alleppey, Kerala",
    sportCategory: "Water Sports",
    availableDates: ["2025-08-13", "2025-08-17", "2025-08-23"],
    image: {
      url: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "kayak_01"
    }
  },
  {
    title: "Roller Skating Rink",
    type: "ground",
    description: "Smooth surface rink perfect for recreational skating and training.",
    pricePerHour: 600,
    location: "Indore, Madhya Pradesh",
    sportCategory: "Skating",
    availableDates: ["2025-08-16", "2025-08-19", "2025-08-28"],
    image: {
      url: "https://images.unsplash.com/photo-1630483264555-a6d025ed6a0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "roller_skating_rink_01"
    }
  },
  {
    title: "Table Tennis Set",
    type: "equipment",
    description: "Tournament-grade table tennis table with bats and balls.",
    pricePerHour: 70,
    location: "Surat, Gujarat",
    sportCategory: "Table Tennis",
    availableDates: ["2025-08-14", "2025-08-18", "2025-08-22"],
    image: {
      url: "https://plus.unsplash.com/premium_photo-1663012953541-0e4f14bdb406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "table_tennis_set_01"
    }
  },
  {
    title: "Professional Cricket Net",
    type: "ground",
    description: "Full-size cricket practice net with turf pitch and bowling machine.",
    pricePerHour: 800,
    location: "Hyderabad, Telangana",
    sportCategory: "Cricket",
    availableDates: ["2025-08-15", "2025-08-21", "2025-08-26"],
    image: {
      url: "https://images.unsplash.com/photo-1521062764155-3a1373fb115c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "cricket_net_01"
    }
  },
  {
    title: "Mountain Bike",
    type: "equipment",
    description: "High-performance mountain bike with suspension, perfect for trails and off-road rides.",
    pricePerHour: 250,
    location: "Manali, Himachal Pradesh",
    sportCategory: "Cycling",
    availableDates: ["2025-08-14", "2025-08-18", "2025-08-23"],
    image: {
      url: "https://images.unsplash.com/photo-1668936132135-f2844ef1735b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "mountain_bike_01"
    }
  },
  {
    title: "Indoor Rock Climbing Wall – Peak Adventure",
    type: "ground",
    description: "20m tall indoor climbing wall with beginner to advanced routes and safety harnesses.",
    pricePerHour: 800,
    location: "Manali, Himachal Pradesh",
    sportCategory: "Rock Climbing",
    availableDates: ["2025-08-16", "2025-08-19", "2025-08-22"],
    image: {
      url: "https://images.unsplash.com/photo-1577434150092-38785fc2074d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "rock_climbing_wall_01"
    }
  },
  {
    title: "Tournament Chess Set",
    type: "equipment",
    description: "Professional wooden chessboard with weighted Staunton pieces, ideal for clubs and events.",
    pricePerHour: 70,
    location: "Jaipur, Rajasthan",
    sportCategory: "Chess",
    availableDates: ["2025-08-16", "2025-08-19", "2025-08-24"],
    image: {
      url: "https://images.unsplash.com/photo-1503332132010-d1b77a049ddd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "chess_set_01"
    }
  }
];

module.exports = { data: sampleSportsItems };
