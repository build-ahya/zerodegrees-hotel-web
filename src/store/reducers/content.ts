import Content from '@/models/content';
import { Action } from '@reduxjs/toolkit';

interface PayloadAction extends Action {
  payload: Content;
}

const initialState: Content = {
  home: {
    section1: {
      title: 'Your Ideal Living Solution',
      subtitle: '',
      body: 'Nestled in the heart of your dream destination, ZeroDegree Hotel is more than just a place to stay – it’s an experience that redefines comfort, elegance, and tranquility. Designed to be a sanctuary for travelers seeking a unique blend of sophistication and relaxation, we invite you to immerse yourself in our world of unparalleled hospitality',
      carousel: [
        {
          title: 'A Room for Every Journey',
          subtitle:
            "At ZeroDegree Hotel, every room is a masterpiece of design and comfort. From sleek modern interiors to breathtaking views, each space is curated to offer a serene escape. Whether you're traveling solo, as a couple, or with family, our accommodations cater to every need, ensuring a memorable stay.",
          image: '/images/zerodegree-hotel1.jpg',
        },
        {
          title: 'Relax, Rejuvenate, Repeat',
          subtitle:
            'Unwind in our luxurious spa, take a refreshing dip in our infinity pool, or simply lounge on our sun-kissed terrace with a signature cocktail in hand. At ZeroDegree Hotel, your well-being is our priority.',
          image: '/images/zerodegree-hotel2.jpg',
        },
      ],
    },
    section2: {
      title: 'Choose Your Luxurious',
      overline: 'Room',
      body: '',
    },
    section3: {
      overline: 'Purpose',
      title: 'We are Eco-Luxury with a ',
      body: 'ZeroDegree Hotel is committed to sustainability, blending modern luxury with eco-conscious practices. Stay guilt-free, knowing your comfort contributes to a greener future.',
      subtitle: 'Why Choose ZeroDegree Hotel?',
      image: '/images/zerodegree-hotel-about1.jpg',
      carousel: [
        {
          title: '',
          body: 'Unmatched luxury and personalized service',
          image: 'mdi:gym',
        },
        {
          title: '',
          body: 'Stylish rooms equipped with cutting-edge amenities',
          image: 'material-symbols:store',
        },
        {
          title: '',
          body: 'Gourmet dining experiences and curated menus',
          image: 'material-symbols:pool',
        },
        {
          title: '',
          body: 'Prime location for exploring local attractions',
          image: 'material-symbols:security',
        },
        {
          title: '',
          body: 'A tranquil atmosphere for rest and rejuvenation',
          image: 'mdi:smart-home',
        },
        {
          title: '',
          body: 'Experience the perfect blend of luxury and sustainability',
          image: 'mdi:smart-home',
        },
      ],
      button: {
        title: 'Learn More',
        href: '/about',
      },
    },
    section4: {
      overline: 'Hotel',
      title: 'Amenities At ',
      subtitle: '',
      body: '',
      image: '',
      carousel: [
        {
          title: 'Our Restaurant',
          body: 'We are committed to eco-friendly living, integrating green design and energy-efficient practices in every apartment.',
          image: '/images/restaurant.jpg',
        },
        {
          title: 'Spa & Beauty',
          body: 'We embrace modern technology and smart solutions to enhance comfort, convenience, and security for our residents.',
          image: '/images/spa.jpg',
        },
        {
          title: 'Swimming Pool',
          body: 'We strive for the highest standards in everything we do, from our luxury apartments to our personalized services, ensuring an exceptional living experience.',
          image: '/images/swimming.jpg',
        },
        {
          title: 'Fitness & Gym',
          body: 'We strive for the highest standards in everything we do, from our luxury apartments to our personalized services, ensuring an exceptional living experience.',
          image: '/images/fitness.png',
        },
      ],
    },
    section5: {
      title: 'Our Restaurant ',
      overline: 'Menu',
      body: '',
      image: '',
      button: {
        title: 'See All',
        href: '/restaurant',
      },
    },
    section6: {
      title: "Our Customer's ",
      overline: 'Experiences',
      body: '',
      carousel: [
        {
          title: 'Emily Carter',
          body: 'Staying at ZeroDegree Hotel was a dream come true! The rooms were immaculate, the staff was incredibly attentive, and the amenities were world-class. I can’t wait to return!',
          image: '/images/testimony/avatar1.png',
        },
        {
          title: 'James Bennett',
          body: 'The ZeroDegree Hotel made my business trip unforgettable. The seamless check-in process, comfortable rooms, and high-speed Wi-Fi were all I needed for a productive stay.',
          image: '/images/testimony/avatar2.png',
        },
        {
          title: 'Sophia Lee',
          body: 'From the moment I arrived, I felt like royalty. The spa experience was rejuvenating, and the view from my room was breathtaking. ZeroDegree Hotel exceeded all my expectations!',
          image: '/images/testimony/avatar3.png',
        },
        {
          title: 'Oliver Martinez',
          body: 'ZeroDegree Hotel offers the perfect blend of luxury and comfort. The dining options were exquisite, and the rooftop bar provided the perfect spot to unwind after a long day.',
          image: '/images/testimony/avatar4.png',
        },
        {
          title: 'Ava Patel',
          body: 'The staff at ZeroDegree Hotel went above and beyond to make my anniversary special. From personalized room décor to a surprise cake, every detail was perfect!',
          image: '/images/testimony/avatar5.png',
        },
        {
          title: 'Liam Johnson',
          body: 'I’ve stayed in many hotels, but ZeroDegree stands out for its exceptional service and attention to detail. The location is perfect for exploring the city!',
          image: '/images/testimony/avatar6.png',
        },
        {
          title: 'Mia Brown',
          body: 'ZeroDegree Hotel is a slice of paradise! The infinity pool was my favorite spot, and the breakfast buffet had endless options. Highly recommended for a relaxing getaway.',
          image: '/images/testimony/avatar7.png',
        },
        {
          title: 'Ethan Wilson',
          body: 'What a fantastic experience! The concierge team helped plan my itinerary, and their recommendations were spot-on. The comfort and luxury of this hotel are unmatched.',
          image: '/images/testimony/avatar8.png',
        },
        {
          title: 'Isabella White',
          body: 'The ZeroDegree Hotel is pure perfection. The cleanliness, the ambiance, and the friendly staff made my vacation one to remember. I’ll definitely be back!',
          image: '/images/testimony/avatar9.png',
        },
        {
          title: 'Noah Adams',
          body: 'Staying at ZeroDegree Hotel was a dream come true! The rooms were immaculate, the staff was incredibly attentive, and the amenities were world-class. I can’t wait to return!',
          image: '/images/testimony/avatar10.png',
        },
      ],
    },
    section7: {
      title: 'Stay Update ',
      overline: 'With Us',
      body: '',
    },
  },
  about: {
    section1: {
      title: 'About Us',
      subtitle: 'Your Ideal Living Solution',
      image: '/images/climate-apartments-about1.jpg',
      body: '',
    },
    section2: {
      overline: 'Experience.',
      title:
        'Where Luxury Meets Comfort and Every Stay is an ',
      body: `<p>At ZeroDegree Hotel, we redefine hospitality with a blend of world-class amenities, exceptional service, and a commitment to creating unforgettable experiences. Nestled in the heart of Port Harcourt, our hotel is the epitome of luxury, offering a serene escape for travelers seeking relaxation, adventure, or both.</p><h4><strong>Our History</strong></h4><p>Founded in 1990, ZeroDegree Hotel started with a vision to redefine luxury hospitality. Over the years, we have grown into a trusted brand known for impeccable service, innovative designs, and a deep commitment to sustainability..</p>`,
      image: '/images/zerodegree-hotel-about2.jpg',
      carousel: [
        {
          title: 'Our Mission',
          body: 'To provide personalized services that cater to the unique needs of every guest and create a welcoming environment where comfort, style, and sophistication harmonize.',
          image: 'mdi:target',
        },
        {
          title: 'Our Vision',
          body: 'To be the benchmark of excellence in hospitality, inspiring our guests to create lasting memories with every stay.',
          image: 'mdi:eye',
        },
      ],
    },
    section3: {
      overline: '',
      title: 'Our Core Values',
      body: '',
      carousel: [
        {
          title: 'Sustainability',
          body: 'We are committed to eco-friendly living, integrating green design and energy-efficient practices in every apartment.',
          image: 'material-symbols-light:energy-program-saving-outline',
        },
        {
          title: 'Innovation',
          body: 'We embrace modern technology and smart solutions to enhance comfort, convenience, and security for our residents.',
          image: 'material-symbols-light:military-tech-outline-sharp',
        },
        {
          title: 'Excellence',
          body: 'We strive for the highest standards in everything we do, from our luxury apartments to our personalized services, ensuring an exceptional living experience.',
          image: 'material-symbols-light:award-star-outline-rounded',
        },
      ],
    },
    section4: {
      title: "Our Customer's ",
      overline: 'Experiences',
      body: '',
      carousel: [
        {
          title: 'Emily Carter',
          body: 'Staying at ZeroDegree Hotel was a dream come true! The rooms were immaculate, the staff was incredibly attentive, and the amenities were world-class. I can’t wait to return!',
          image: '/images/testimony/avatar1.png',
        },
        {
          title: 'James Bennett',
          body: 'The ZeroDegree Hotel made my business trip unforgettable. The seamless check-in process, comfortable rooms, and high-speed Wi-Fi were all I needed for a productive stay.',
          image: '/images/testimony/avatar2.png',
        },
        {
          title: 'Sophia Lee',
          body: 'From the moment I arrived, I felt like royalty. The spa experience was rejuvenating, and the view from my room was breathtaking. ZeroDegree Hotel exceeded all my expectations!',
          image: '/images/testimony/avatar3.png',
        },
        {
          title: 'Oliver Martinez',
          body: 'ZeroDegree Hotel offers the perfect blend of luxury and comfort. The dining options were exquisite, and the rooftop bar provided the perfect spot to unwind after a long day.',
          image: '/images/testimony/avatar4.png',
        },
        {
          title: 'Ava Patel',
          body: 'The staff at ZeroDegree Hotel went above and beyond to make my anniversary special. From personalized room décor to a surprise cake, every detail was perfect!',
          image: '/images/testimony/avatar5.png',
        },
        {
          title: 'Liam Johnson',
          body: 'I’ve stayed in many hotels, but ZeroDegree stands out for its exceptional service and attention to detail. The location is perfect for exploring the city!',
          image: '/images/testimony/avatar6.png',
        },
        {
          title: 'Mia Brown',
          body: 'ZeroDegree Hotel is a slice of paradise! The infinity pool was my favorite spot, and the breakfast buffet had endless options. Highly recommended for a relaxing getaway.',
          image: '/images/testimony/avatar7.png',
        },
        {
          title: 'Ethan Wilson',
          body: 'What a fantastic experience! The concierge team helped plan my itinerary, and their recommendations were spot-on. The comfort and luxury of this hotel are unmatched.',
          image: '/images/testimony/avatar8.png',
        },
        {
          title: 'Isabella White',
          body: 'The ZeroDegree Hotel is pure perfection. The cleanliness, the ambiance, and the friendly staff made my vacation one to remember. I’ll definitely be back!',
          image: '/images/testimony/avatar9.png',
        },
        {
          title: 'Noah Adams',
          body: 'Staying at ZeroDegree Hotel was a dream come true! The rooms were immaculate, the staff was incredibly attentive, and the amenities were world-class. I can’t wait to return!',
          image: '/images/testimony/avatar10.png',
        },
      ],
    },
  },
  search: {
    section1: {
      title: 'Search Rooms',
      subtitle: 'Redefining Modern Living with Sustainable Luxury',
      image: '',
      body: '',
    },
    section2: {
      title: '',
      body: '',
    },
  },
  restaurant: {
    section1: {
      title: 'Our Restaurant Menu',
      subtitle: 'Redefining Modern Living with Sustainable Luxury',
      image: '/images/climate-apartment-project.jpg',
      body: '',
    },
    section2: {
      title: '',
      body: '',
    },
  },
  blog: {
    section1: {
      title: 'Our Blog',
      subtitle: 'Stay Updated on Real Estate and Sustainable Living',
      image: '/images/climate-apartment-blog.jpg',
      body: '',
    },
  },
  contact: {
    section1: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      image: '/images/climate-apartment-contact.jpg',
      body: '',
    },
    section2: {
      title: 'Get in Touch with Us',
      subtitle: '',
      body: 'We’re here to help and answer any questions you might have. Reach out to us, and we’ll respond as soon as we can.',
      carousel: [
        {
          title: 'Our Address',
          body: '51 Woji Road, GRA, Port Harcourt, Rivers, Nigeria',
          href: 'https://www.google.com/maps/place/51+Woji+Rd,+Trans+Amadi,+Port+Harcourt,+Rivers+500102,+Rivers/@4.8333478,7.0464135,17z/data=!3m1!4b1!4m6!3m5!1s0x1069cda0891f1f85:0x70c793d069e0c697!8m2!3d4.8333478!4d7.0489884!16s%2Fg%2F11nnkvv99m?entry=ttu',
          image: 'mdi:location',
        },
        {
          title: 'Email Us',
          body: 'info@zerodegreehotel.com',
          image: 'ic:outline-alternate-email',
        },
        {
          title: 'Give us a call',
          body: '+234 916 000 9630',
          image: 'mdi:phone-outline',
        },
      ],
    },
  },
  refundPolicy: {
    section1: {
      title: 'Refund Policy',
      subtitle: 'Effective Date: August 17, 2024',
      body: '',
    },
    section2: {
      title: '',
      body: '',
    },
  },
  privacyPolicy: {
    section1: {
      title: 'Privacy Policy',
      subtitle: 'Effective Date: October 21, 2024',
      body: '',
    },
    section2: {
      title: '',
      body: '<h1>Privacy Policy</h1><p>Last Updated: 21, October 2024</p><h2>Introduction</h2><p>At Climate Apartments, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect from users, how we use that information, and the steps we take to ensure your data is secure.</p><h2>Information We Collect</h2><ul><li><strong>Personal Information:</strong> We collect information such as name, email, phone number, and address when you sign up, inquire, or make a booking.</li><li><strong>Usage Data:</strong> We may collect information on how you use our website, such as pages viewed and time spent on our site.</li></ul><h2>How We Use Your Information</h2><ul><li>To provide and maintain our services.</li><li>To respond to your inquiries and process transactions.</li><li>To improve our website, services, and user experience.</li><li>To comply with legal obligations and enforce our policies.</li></ul><h2>Sharing of Information</h2><p>We do not sell or share your personal information with third parties except to comply with legal requirements, facilitate services (such as payment processing), or improve our offerings with trusted partners.</p><h2>Security</h2><p>We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p><h2>Your Rights</h2><p>You have the right to request access to your personal data, request corrections, and request deletion of your data. To exercise these rights, please contact us at [contact info].</p><h2>Changes to This Policy</h2><p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated date.</p><h2>Contact Us</h2><p>If you have any questions about this Privacy Policy, please contact us at:</p><p><strong>Email:</strong> info@climateapartments.com</p><p><strong>Phone:</strong> <a class="text-sm text-gray-300 hover:text-white transition-colors" href="tel:+2348166098269" target="_self">+2348166098269 +2347057635060</a></p>',
    },
  },
  terms: {
    section1: {
      title: 'Terms of Use (EULA)',
      subtitle: 'Effective Date: October 21, 2024',
      body: '',
    },
    section2: {
      title: '',
      body: '<h1>Terms of Service</h1><p>Last Updated: 21 October 2024</p><h2>Introduction</h2><p>Welcome to Climate Apartments! These Terms of Service govern your use of our website and services. By using our services, you agree to these terms in full. If you do not agree with any part of these terms, please do not use our services.</p><h2>Use of Our Services</h2><ul><li>Our services are intended for users who are 18 years or older.</li><li>You agree not to misuse our services or engage in any illegal activities while using them.</li><li>You are responsible for the accuracy of the information you provide on our platform.</li></ul><h2>Account Responsibilities</h2><p>If you create an account with us, you are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.</p><h2>Payments and Fees</h2><p>For any rental or purchase transactions conducted through Climate Apartments, you agree to provide accurate payment information and pay all associated fees in a timely manner.</p><h2>Cancellation and Refund Policy</h2><p>Cancellation policies may vary depending on the specific rental or purchase agreement. Please refer to the terms of your contract for details on cancellations and refunds.</p><h2>Intellectual Property</h2><p>All content on this site, including text, images, logos, and designs, is the intellectual property of Climate Apartments or its licensors. You may not copy, reproduce, or distribute any content without prior written consent.</p><h2>Limitation of Liability</h2><p>Climate Apartments is not liable for any indirect, incidental, or consequential damages arising from the use of our services, including loss of data or financial loss.</p><h2>Termination</h2><p>We reserve the right to terminate or suspend access to our services without notice if you violate these terms or engage in illegal or harmful activities.</p><h2>Changes to These Terms</h2><p>We may update these Terms of Service from time to time. Any changes will be posted on this page with the updated date.</p><h2>Contact Us</h2><p>If you have any questions about these Terms of Service, please contact us at:</p><p><strong>Email:</strong> info@climateapartments.com</p><p><strong>Phone:</strong> +2348166098269 +2347057635060</p>',
    },
  },
  settings: {
    currency: 'usd',
    rate: 1700,
    bankAccounts: [
      {
        accountName: 'Climate Technical',
        accountNumber: '0032112871',
        bankName: 'Access Bank PLC',
      },
    ],
  },
};

export default function lifeCircle(
  state = initialState,
  action: PayloadAction
) {
  switch (action.type) {
    case 'CONTENT/SET_CONTENT': {
      return action.payload;
    }
    case 'CONTENT/UPDATE_CONTENT': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
