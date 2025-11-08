import Blog from "@/models/blog";

const posts: Blog[] = [
  {
    id: '1',
    title: "Transcorp Hilton, Abuja",
    slug: "transcorp-hilton-abuja",
    summary: "A luxury haven in the heart of Nigeria's capital, ideal for business and leisure.",
    category: "Luxury",
    highlighted: true,
    tags: ["luxury", "business", "abuja", "hotel"],
    content: `
      <h2>Transcorp Hilton, Abuja</h2>
      <p>Located in the heart of Nigeria's capital city, Transcorp Hilton Abuja stands as a symbol of luxury and excellence. This 5-star hotel offers an unparalleled experience for both business and leisure travelers.</p>
      
      <h3>Accommodation</h3>
      <p>670 luxuriously appointed rooms and suites featuring:</p>
      <ul>
        <li>Contemporary décor with African touches</li>
        <li>Premium bedding and pillow menu</li>
        <li>Executive work desk with ergonomic chair</li>
        <li>55-inch LED TV with satellite channels</li>
        <li>24-hour room service</li>
      </ul>

      <h3>Dining & Entertainment</h3>
      <ul>
        <li>Zuma Restaurant - Contemporary grill and international cuisine</li>
        <li>Oriental Restaurant - Authentic Asian dishes</li>
        <li>Bukka Restaurant - Traditional Nigerian delicacies</li>
        <li>Capital Bar - Premium drinks and live entertainment</li>
      </ul>

      <h3>Facilities & Services</h3>
      <ul>
        <li>Olympic-sized outdoor swimming pool</li>
        <li>State-of-the-art fitness center</li>
        <li>Tennis courts and squash facilities</li>
        <li>Luxury spa and wellness center</li>
        <li>24-hour business center</li>
        <li>Multiple meeting and conference rooms</li>
      </ul>

      <h3>Location Highlights</h3>
      <p>Perfectly situated with easy access to:</p>
      <ul>
        <li>Nnamdi Azikiwe International Airport (40 minutes)</li>
        <li>Aso Rock Presidential Villa (15 minutes)</li>
        <li>National Assembly Complex (10 minutes)</li>
        <li>Abuja National Mosque (5 minutes)</li>
      </ul>`,
    image: "/images/blog/Transcorp Hilton, Abuja.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '2',
    title: "Eko Hotel and Suites, Lagos",
    slug: "eko-hotel-and-suites-lagos",
    summary: "An iconic hotel in Lagos with stunning views of the Atlantic Ocean.",
    category: "Iconic",
    tags: ["iconic", "lagos", "hotel"],
    content: `
      <h2>Eko Hotel and Suites, Lagos</h2>
      <p>As Lagos' premier five-star hotel, Eko Hotel and Suites combines luxury, business, and leisure facilities with breathtaking views of the Atlantic Ocean.</p>

      <h3>Accommodation Options</h3>
      <ul>
        <li>Classic Rooms with city or ocean views</li>
        <li>Luxury Suites with separate living areas</li>
        <li>Presidential Suites with premium amenities</li>
        <li>Eko Signature apartments for extended stays</li>
      </ul>

      <h3>World-Class Dining</h3>
      <ul>
        <li>1415 Restaurant - International buffet</li>
        <li>Kuramo Sports Cafe - Casual dining</li>
        <li>Sky Restaurant - Fine dining with panoramic views</li>
        <li>Crossroads Tex-Mex Restaurant</li>
        <li>Red Chinese Restaurant & Lounge</li>
      </ul>

      <h3>Business & Events</h3>
      <ul>
        <li>Eko Convention Centre (6,000 capacity)</li>
        <li>Multiple meeting rooms and boardrooms</li>
        <li>Business center with secretarial services</li>
        <li>Exhibition spaces and grand ballroom</li>
      </ul>

      <h3>Leisure Facilities</h3>
      <ul>
        <li>Luxury spa and wellness center</li>
        <li>Large outdoor swimming pool</li>
        <li>Tennis courts and fitness center</li>
        <li>Private beach access</li>
        <li>Shopping arcade</li>
      </ul>`,
    image: "/images/blog/Eko Hotel and Suites, Lagos.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '3',
    title: "Radisson Blu Anchorage Hotel, Lagos",
    slug: "radisson-blu-anchorage-hotel-lagos",
    summary: "A serene retreat on Victoria Island with a modern design and waterfront views.",
    category: "Modern Luxury",
    tags: ["modern", "luxury", "lagos", "hotel"],
    content: `
      <h2>Radisson Blu Anchorage Hotel, Lagos</h2>
      <p>Experience waterfront luxury at its finest on Victoria Island. This 5-star hotel combines contemporary design with unmatched comfort and spectacular views of Lagos Lagoon.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🏊‍♂️ Infinity pool overlooking the lagoon</li>
          <li>🍽️ Multiple restaurants including rooftop dining</li>
          <li>🏋️‍♂️ 24/7 fitness center & spa</li>
          <li>💼 Business lounge & meeting facilities</li>
          <li>🛏️ 170 rooms and suites with modern amenities</li>
        </ul>
      </div>

      <p class="location-note">Strategic location: 10 minutes from business district, 45 minutes from airport. Walking distance to major corporate offices and entertainment spots.</p>`,
    image: "/images/blog/Radisson Blu Anchorage Hotel, Lagos.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '4',
    title: "Le Méridien Ibom Hotel & Golf Resort, Uyo",
    slug: "le-meridien-ibom-hotel-and-golf-resort-uyo",
    summary: "An oasis of tranquility with lush greenery and an 18-hole golf course.",
    category: "Resort",
    tags: ["resort", "uyo", "golf"],
    content: `
      <h2>Le Méridien Ibom Hotel & Golf Resort, Uyo</h2>
      <p>Discover a golfer's paradise nestled in lush tropical gardens. This 5-star resort combines world-class golfing with luxury accommodation and impeccable service.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>⛳ Championship 18-hole golf course</li>
          <li>🌳 Tropical garden setting</li>
          <li>🏊‍♂️ Resort-style pool & spa</li>
          <li>🍽️ Multiple dining venues</li>
          <li>🎾 Sports & recreation facilities</li>
        </ul>
      </div>

      <p class="location-note">20 minutes from Uyo city center, surrounded by pristine nature and golf greens.</p>`,
    image: "/images/blog/Le Méridien Ibom Hotel & Golf Resort, Uyo.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '5',
    title: "The Wheatbaker, Lagos",
    slug: "the-wheatbaker-lagos",
    summary: "A boutique hotel offering art-inspired luxury in the heart of Ikoyi.",
    category: "Boutique",
    tags: ["boutique", "luxury", "lagos", "hotel"],
    content: `
      <h2>The Wheatbaker, Lagos</h2>
      <p>An intimate boutique hotel where art meets luxury in Ikoyi. Experience personalized service in Lagos's most exclusive neighborhood.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🎨 Contemporary African art collection</li>
          <li>🍷 Premium wine & dining</li>
          <li>💆‍♀️ Boutique spa services</li>
          <li>🏊‍♂️ Outdoor pool & garden</li>
          <li>🛎️ Personalized concierge</li>
        </ul>
      </div>

      <p class="location-note">Prime Ikoyi location: 5 minutes to business district, near diplomatic quarters.</p>`,
    image: "/images/blog/The Wheatbaker, Lagos.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '6',
    title: "Sheraton Lagos Hotel",
    slug: "sheraton-lagos-hotel",
    summary: "A classic choice near the international airport, perfect for business travelers.",
    category: "Business",
    tags: ["business", "lagos", "hotel"],
    content: `
      <h2>Sheraton Lagos Hotel</h2>
      <p>Your premier airport hotel combining convenience with comfort. Perfect for business travelers and short stays.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>✈️ Airport shuttle service</li>
          <li>💼 24/7 business center</li>
          <li>🏊‍♂️ Outdoor pool & gym</li>
          <li>🍽️ International restaurants</li>
          <li>🛏️ Club rooms & suites</li>
        </ul>
      </div>

      <p class="location-note">10 minutes from international airport, easy access to major business districts.</p>`,
    image: "/images/blog/Sheraton Lagos Hotel.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '7',
    title: "Federal Palace Hotel, Lagos",
    slug: "federal-palace-hotel-lagos",
    summary: "A historic hotel overlooking the Atlantic Ocean with premium amenities.",
    category: "Historic Luxury",
    tags: ["historic", "luxury", "lagos", "hotel"],
    content: `
      <h2>Federal Palace Hotel, Lagos</h2>
      <p>A legendary hotel with over 50 years of history, blending colonial charm with modern luxury on Victoria Island's waterfront.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🎰 Premium casino & entertainment</li>
          <li>🌺 Colonial-style gardens</li>
          <li>🏊‍♂️ Oceanfront pool</li>
          <li>🍽️ Heritage dining room</li>
          <li>🎭 Live entertainment venue</li>
        </ul>
      </div>

      <p class="location-note">Beachfront location on Victoria Island, 45 minutes from airport, near major attractions.</p>`,
    image: "/images/blog/Federal Palace Hotel, Lagos.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '8',
    title: "Protea Hotel by Marriott, Enugu",
    slug: "protea-hotel-by-marriott-enugu",
    summary: "A stylish yet affordable option in Enugu for exploring the cultural heart of Nigeria.",
    category: "Affordable Luxury",
    tags: ["affordable", "luxury", "enugu", "hotel"],
    content: `
      <h2>Protea Hotel by Marriott, Enugu</h2>
      <p>Your gateway to exploring the cultural heart of Nigeria, offering modern comfort with authentic local touches.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🏺 Local art & design elements</li>
          <li>🍳 All-day dining restaurant</li>
          <li>💪 Modern fitness center</li>
          <li>🎯 Entertainment lounge</li>
          <li>💼 Business facilities</li>
        </ul>
      </div>

      <p class="location-note">Central Enugu location, walking distance to Polo Park Mall and Golf Club.</p>`,
    image: "/images/blog/Protea Hotel by Marriott, Enugu.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '9',
    title: "Ibom Icon Hotel & Golf Resort, Uyo",
    slug: "ibom-icon-hotel-and-golf-resort-uyo",
    summary: "A serene eco-tourism destination with a world-class golf course.",
    category: "Eco-Tourism",
    tags: ["eco-tourism", "uyo", "golf"],
    content: `
      <h2>Ibom Icon Hotel & Golf Resort, Uyo</h2>
      <p>An eco-luxury retreat where nature meets comfort, set within a pristine rainforest environment.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🌿 Rainforest walking trails</li>
          <li>⛳ PGA-standard golf course</li>
          <li>🛖 Luxury eco-lodges</li>
          <li>🍖 Bush bar & grill</li>
          <li>🦜 Bird watching tours</li>
        </ul>
      </div>

      <p class="location-note">Nestled in Uyo's rainforest, 30 minutes from airport, perfect for nature retreats.</p>`,
    image: "/images/blog/Ibom Icon Hotel & Golf Resort, Uyo.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  },
  {
    id: '10',
    title: "Lilygate Hotel, Lagos",
    slug: "lilygate-hotel-lagos",
    summary: "A contemporary hotel in Lekki, perfect for modern travelers.",
    category: "Modern Comfort",
    tags: ["modern", "comfort", "lagos", "hotel"],
    content: `
      <h2>Lilygate Hotel, Lagos</h2>
      <p>A contemporary urban retreat in vibrant Lekki, designed for the modern traveler.</p>

      <div class="hotel-highlights">
        <h3>Key Features</h3>
        <ul>
          <li>🌆 Rooftop lounge & bar</li>
          <li>🍽️ Modern fusion restaurant</li>
          <li>💻 Co-working spaces</li>
          <li>🏊‍♂️ Infinity edge pool</li>
          <li>🎯 Games & recreation room</li>
        </ul>
      </div>

      <p class="location-note">Prime Lekki location, near Nike Art Gallery and Conservation Centre.</p>`,
    image: "/images/blog/Lilygate Hotel, Lagos.jpg",
    likes: [],
    views: [],
    favorites: [],
    createdAt: 1737527058778,
    updatedAt: 1737527058778
  }
];

export default posts;