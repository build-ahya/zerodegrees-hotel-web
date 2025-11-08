(()=>{var e={};e.id=953,e.ids=[953],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},80582:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>o.a,__next_app__:()=>d,pages:()=>u,routeModule:()=>h,tree:()=>c});var s=i(70260),a=i(28203),r=i(25155),o=i.n(r),l=i(67292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);i.d(t,n);let c=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,72239)),"/Users/senator/Developer/zerodegrees-hotel-web/src/app/blog/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,71354)),"/Users/senator/Developer/zerodegrees-hotel-web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/senator/Developer/zerodegrees-hotel-web/src/app/blog/[slug]/page.tsx"],d={require:i,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},16241:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,71066,23)),Promise.resolve().then(i.t.bind(i,94303,23)),Promise.resolve().then(i.t.bind(i,66690,23)),Promise.resolve().then(i.bind(i,85257))},6513:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,41902,23)),Promise.resolve().then(i.bind(i,65771)),Promise.resolve().then(i.bind(i,86054)),Promise.resolve().then(i.bind(i,15933))},95303:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var s=i(45512);let a=function({data:e}){return(0,s.jsx)("article",{className:"prose lg:prose-md max-w-screen-2xl",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})})}},15933:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var s=i(45512),a=i(58009),r=i(45103),o=i(28531),l=i.n(o),n=i(15843),c=i(96415),u=i(95303);function d({post:e}){let[t,i]=(0,a.useState)(e.likes.length);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:"relative h-[60vh]",children:[(0,s.jsx)(r.default,{src:e.image,alt:e.title,layout:"fill",objectFit:"cover",priority:!0}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-primary-800/70 via-primary-800/50 to-transparent"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/70"}),(0,s.jsx)(n.A,{className:"absolute inset-0 flex items-end",children:(0,s.jsxs)("div",{className:"mb-8 space-y-2 text-white",children:[(0,s.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,s.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:e.title})}),(0,s.jsxs)("div",{className:"flex items-center text-gray-300 mb-2",children:[(0,s.jsx)(c.A,{name:"mdi:calendar",size:20,color:"mr-2"}),(0,s.jsx)("time",{dateTime:new Date(e.createdAt).toISOString(),children:new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,s.jsx)("span",{className:"mx-2",children:"•"}),(0,s.jsx)(c.A,{name:"mdi:tag",size:20,color:"mr-2"}),(0,s.jsx)("span",{children:e.category})]})]})})]}),(0,s.jsxs)(n.A,{maxWidth:"max-w-screen-lg",className:"py-16",children:[(0,s.jsx)("div",{children:(0,s.jsx)(u.A,{data:e.content})}),(0,s.jsxs)("footer",{className:"border-t border-gray-200 pt-8 mt-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)("button",{onClick:()=>{i(e=>e+1)},className:"flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors",children:[(0,s.jsx)(c.A,{name:"mdi:heart",size:24}),(0,s.jsxs)("span",{children:[t," likes"]})]}),(0,s.jsxs)("button",{className:"flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors",children:[(0,s.jsx)(c.A,{name:"mdi:share",size:24}),(0,s.jsx)("span",{children:"Share"})]})]}),(0,s.jsx)("div",{className:"flex space-x-4",children:e.tags.map(e=>(0,s.jsx)("span",{className:"bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm",children:e},e))})]}),(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)(l(),{href:"/blog",className:"text-primary-600 hover:text-primary-700 transition-colors",children:"← Back to all posts"})})]})]})]})}},72239:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,viewport:()=>c});var s=i(62740),a=i(76301),r=i(84237),o=i(63402),l=i(79413);let n=[{id:"1",title:"Transcorp Hilton, Abuja",slug:"transcorp-hilton-abuja",summary:"A luxury haven in the heart of Nigeria's capital, ideal for business and leisure.",category:"Luxury",highlighted:!0,tags:["luxury","business","abuja","hotel"],content:`
      <h2>Transcorp Hilton, Abuja</h2>
      <p>Located in the heart of Nigeria's capital city, Transcorp Hilton Abuja stands as a symbol of luxury and excellence. This 5-star hotel offers an unparalleled experience for both business and leisure travelers.</p>
      
      <h3>Accommodation</h3>
      <p>670 luxuriously appointed rooms and suites featuring:</p>
      <ul>
        <li>Contemporary d\xe9cor with African touches</li>
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
      </ul>`,image:"/images/blog/Transcorp Hilton, Abuja.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"2",title:"Eko Hotel and Suites, Lagos",slug:"eko-hotel-and-suites-lagos",summary:"An iconic hotel in Lagos with stunning views of the Atlantic Ocean.",category:"Iconic",tags:["iconic","lagos","hotel"],content:`
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
      </ul>`,image:"/images/blog/Eko Hotel and Suites, Lagos.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"3",title:"Radisson Blu Anchorage Hotel, Lagos",slug:"radisson-blu-anchorage-hotel-lagos",summary:"A serene retreat on Victoria Island with a modern design and waterfront views.",category:"Modern Luxury",tags:["modern","luxury","lagos","hotel"],content:`
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

      <p class="location-note">Strategic location: 10 minutes from business district, 45 minutes from airport. Walking distance to major corporate offices and entertainment spots.</p>`,image:"/images/blog/Radisson Blu Anchorage Hotel, Lagos.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"4",title:"Le M\xe9ridien Ibom Hotel & Golf Resort, Uyo",slug:"le-meridien-ibom-hotel-and-golf-resort-uyo",summary:"An oasis of tranquility with lush greenery and an 18-hole golf course.",category:"Resort",tags:["resort","uyo","golf"],content:`
      <h2>Le M\xe9ridien Ibom Hotel & Golf Resort, Uyo</h2>
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

      <p class="location-note">20 minutes from Uyo city center, surrounded by pristine nature and golf greens.</p>`,image:"/images/blog/Le M\xe9ridien Ibom Hotel & Golf Resort, Uyo.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"5",title:"The Wheatbaker, Lagos",slug:"the-wheatbaker-lagos",summary:"A boutique hotel offering art-inspired luxury in the heart of Ikoyi.",category:"Boutique",tags:["boutique","luxury","lagos","hotel"],content:`
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

      <p class="location-note">Prime Ikoyi location: 5 minutes to business district, near diplomatic quarters.</p>`,image:"/images/blog/The Wheatbaker, Lagos.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"6",title:"Sheraton Lagos Hotel",slug:"sheraton-lagos-hotel",summary:"A classic choice near the international airport, perfect for business travelers.",category:"Business",tags:["business","lagos","hotel"],content:`
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

      <p class="location-note">10 minutes from international airport, easy access to major business districts.</p>`,image:"/images/blog/Sheraton Lagos Hotel.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"7",title:"Federal Palace Hotel, Lagos",slug:"federal-palace-hotel-lagos",summary:"A historic hotel overlooking the Atlantic Ocean with premium amenities.",category:"Historic Luxury",tags:["historic","luxury","lagos","hotel"],content:`
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

      <p class="location-note">Beachfront location on Victoria Island, 45 minutes from airport, near major attractions.</p>`,image:"/images/blog/Federal Palace Hotel, Lagos.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"8",title:"Protea Hotel by Marriott, Enugu",slug:"protea-hotel-by-marriott-enugu",summary:"A stylish yet affordable option in Enugu for exploring the cultural heart of Nigeria.",category:"Affordable Luxury",tags:["affordable","luxury","enugu","hotel"],content:`
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

      <p class="location-note">Central Enugu location, walking distance to Polo Park Mall and Golf Club.</p>`,image:"/images/blog/Protea Hotel by Marriott, Enugu.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"9",title:"Ibom Icon Hotel & Golf Resort, Uyo",slug:"ibom-icon-hotel-and-golf-resort-uyo",summary:"A serene eco-tourism destination with a world-class golf course.",category:"Eco-Tourism",tags:["eco-tourism","uyo","golf"],content:`
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

      <p class="location-note">Nestled in Uyo's rainforest, 30 minutes from airport, perfect for nature retreats.</p>`,image:"/images/blog/Ibom Icon Hotel & Golf Resort, Uyo.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a},{id:"10",title:"Lilygate Hotel, Lagos",slug:"lilygate-hotel-lagos",summary:"A contemporary hotel in Lekki, perfect for modern travelers.",category:"Modern Comfort",tags:["modern","comfort","lagos","hotel"],content:`
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

      <p class="location-note">Prime Lekki location, near Nike Art Gallery and Conservation Centre.</p>`,image:"/images/blog/Lilygate Hotel, Lagos.jpg",likes:[],views:[],favorites:[],createdAt:0x1948caee15a,updatedAt:0x1948caee15a}],c={themeColor:"#0C3150"},u=(0,r.default)(()=>Promise.resolve().then(i.bind(i,85257)),{loadableGenerated:{modules:["app/blog/[slug]/page.tsx -> @/components/sections/blog/BlogDetails"]},loading:()=>(0,s.jsx)(l.A,{})});async function d(e){let{slug:t}=await e.params,i=n.find(e=>e.slug===t);return i?(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)(l.A,{}),children:(0,s.jsx)(u,{post:i})}):(0,s.jsx)(o.A,{})}},63402:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var s=i(62740),a=i(35635),r=i(13673),o=i(47317);function l({children:e,maxWidth:t="max-w-screen-xl",className:i}){return(0,s.jsx)("div",{className:function(...e){return(0,o.QP)((0,r.$)(e))}("container mx-auto px-4 sm:px-0 grow",t,i),children:e})}function n({image:e="/images/empty.svg",message:t="No content available"}){return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-[400px] py-16",children:[(0,s.jsx)("div",{className:"relative w-64 h-64 mb-8",children:(0,s.jsx)(a.default,{src:e,alt:"Empty state",layout:"fill",objectFit:"contain"})}),(0,s.jsx)("p",{className:"text-xl text-gray-600 text-center",children:t})]})})}},79413:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var s=i(62740),a=i(38162);function r({name:e,color:t,size:i}){return(0,s.jsx)(a.In,{icon:e,className:t||"text-black dark:text-white",style:{fontSize:`${i||24}px`}})}function o(){return(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-primary-800 bg-opacity-50 z-50",children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg flex flex-col items-center",children:[(0,s.jsx)(r,{name:"eos-icons:loading",size:48,color:"text-primary-600 animate-spin"}),(0,s.jsx)("p",{className:"mt-4 text-lg font-semibold text-gray-700",children:"Loading..."})]})})}},85257:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s=(0,i(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/senator/Developer/zerodegrees-hotel-web/src/components/sections/blog/BlogDetails.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/senator/Developer/zerodegrees-hotel-web/src/components/sections/blog/BlogDetails.tsx","default")},70440:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var s=i(88077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[638,300,77,162,854,80],()=>i(80582));module.exports=s})();