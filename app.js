// text in diffrent directions
let didScroll = false;
function scrollBanner() {
  let scrollPos;
  let headerText = document.querySelector('.header-parallax h1');
  let headerTextTwo = document.querySelector('.header-parallax h2');
  scrollPos = window.scrollY;

  if (scrollPos <= 1000) {
    headerText.style.transform = 'translateX(' + -scrollPos / 1 + 'px' + ')';
    headerText.style.opacity = 1 - scrollPos / 600;
    headerTextTwo.style.transform =
      'translateX(' + -scrollPos / -1 + 'px' + ')';
    headerTextTwo.style.opacity = 1 - scrollPos / 600;
  }
}
window.addEventListener('scroll', scrollBanner);

//scroll onclick
const buttonScroll = document.querySelector('.airplane');
buttonScroll.addEventListener('click', () => {
  window.scrollTo({
    top: 400,
    left: 0,
    behavior: 'smooth',
  });
});

const vehicles = [
  {
    type: 'helicopter',
    color: 'black',
    svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
 <style type="text/css">
   .st0{fill:#2980B9;}
   .st1{fill:#037CC6;}
   .st2{fill:#9B59B6;}
   .st3{fill:#27AE60;}
   .st4{fill:#E74C3C;}
   .st5{fill:#34495E;}
   .st6{fill:#D35400;}
   .st7{fill:#E22D2D;}
   .st8{fill:#1ABC9C;}
   .st9{fill:#F39C12;}
   .st10{fill:#E67E22;}
   .st11{fill:url(#SVGID_1_);}
   .st12{fill:url(#SVGID_2_);}
   .st13{fill:url(#SVGID_3_);}
   .st14{fill:url(#SVGID_4_);}
   .st15{fill:url(#SVGID_5_);}
   .st16{fill:url(#SVGID_6_);}
   .st17{fill:url(#SVGID_7_);}
   .st18{fill:url(#SVGID_8_);}
   .st19{fill:url(#SVGID_9_);}
   .st20{fill:url(#SVGID_10_);}
   .st21{fill:url(#SVGID_11_);}
   .st22{fill:url(#SVGID_12_);}
   .st23{fill:url(#SVGID_13_);}
   .st24{fill:url(#SVGID_14_);}
   .st25{fill:url(#SVGID_15_);}
   .st26{fill:url(#SVGID_16_);}
   .st27{fill:url(#SVGID_17_);}
   .st28{fill:url(#SVGID_18_);}
   .st29{fill:url(#SVGID_19_);}
   .st30{fill:url(#SVGID_20_);}
   .st31{fill:url(#SVGID_21_);}
   .st32{fill:url(#SVGID_22_);}
   .st33{fill:url(#SVGID_23_);}
   .st34{fill:url(#SVGID_24_);}
   .st35{fill:url(#SVGID_25_);}
   .st36{fill:url(#SVGID_26_);}
   .st37{fill:url(#SVGID_27_);}
   .st38{fill:url(#SVGID_28_);}
   .st39{fill:url(#SVGID_29_);}
   .st40{fill:url(#SVGID_30_);}
   .st41{fill:url(#SVGID_31_);}
   .st42{fill:url(#SVGID_32_);}
   .st43{fill:#0C0C0C;}
   .st44{fill:none;stroke:#0C0C0C;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
   .st45{fill:#FFFFFF;stroke:#0C0C0C;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
   .st46{fill:#FB0101;}
   .st47{fill:url(#SVGID_33_);}
   .st48{fill:url(#SVGID_34_);}
   .st49{fill:#403D3D;}
   .st50{fill:#926DDE;}
   .st51{fill:#33CABB;}
 </style>
 <g>
   <g>
     <g>
       <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="4.4706" y1="24.7361" x2="47.5293" y2="24.7361">
         <stop  offset="8.379889e-03" style="stop-color:#FB0101"/>
         <stop  offset="1" style="stop-color:#403D3D"/>
       </linearGradient>
       <path class="st11" d="M23.1,43.8h-5c-0.3,0-0.6-0.2-0.8-0.4c-0.2-0.3-0.2-0.6-0.1-0.9l5-13.9h-8.6l-4.3,5.2
         C9,34.1,8.4,34.2,8,33.9l-3-1.8c-0.4-0.3-0.6-0.8-0.4-1.3l2.9-6.1l-2.9-6.1c-0.2-0.5-0.1-1,0.4-1.3l3-1.8c0.4-0.3,1-0.2,1.3,0.2
         l4.3,5.2h8.6L17.2,7c-0.1-0.3-0.1-0.6,0.1-0.9c0.2-0.3,0.5-0.4,0.8-0.4h5c0.4,0,0.7,0.2,0.9,0.5l7.3,13.9h11.7
         c2.5,0,4.6,2.1,4.6,4.6c0,2.5-2.1,4.6-4.6,4.6H31.2L24,43.3C23.8,43.6,23.4,43.8,23.1,43.8z M19.5,41.8h2.9l7.3-13.9
         c0.2-0.3,0.5-0.5,0.9-0.5h12.3c1.4,0,2.6-1.2,2.6-2.6s-1.2-2.6-2.6-2.6H30.6c-0.4,0-0.7-0.2-0.9-0.5L22.5,7.6h-2.9l5,13.9
         c0.1,0.3,0.1,0.6-0.1,0.9c-0.2,0.3-0.5,0.4-0.8,0.4H13.1c-0.3,0-0.6-0.1-0.8-0.4l-4.1-4.9l-1.5,0.9l2.6,5.6
         c0.1,0.1,0.1,0.3,0.1,0.4v0.1c0,0.1,0,0.3-0.1,0.4l-2.6,5.6l1.5,0.9l4.1-4.9c0.2-0.2,0.5-0.4,0.8-0.4h10.5c0.3,0,0.6,0.2,0.8,0.4
         c0.2,0.3,0.2,0.6,0.1,0.9L19.5,41.8z"/>
     </g>
   </g>
 </g>
 </svg>`,
  },
  {
    type: 'ambulance',
    color: 'green',
    svg: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M61 29.4798C60.9944 29.3872 60.9741 29.2961 60.94 29.2098C60.94 29.2098 60.94 29.1398 60.94 29.0998C60.9068 29.0442 60.87 28.9908 60.83 28.9398L60.72 28.7798L47.92 16.7798C47.8262 16.697 47.7176 16.6326 47.6 16.5898C47.5636 16.584 47.5264 16.584 47.49 16.5898C47.4103 16.5802 47.3297 16.5802 47.25 16.5898H37.75V14.0898C37.75 13.8246 37.6446 13.5703 37.4571 13.3827C37.2696 13.1952 37.0152 13.0898 36.75 13.0898H4C3.73478 13.0898 3.48043 13.1952 3.29289 13.3827C3.10536 13.5703 3 13.8246 3 14.0898V44.2498C3 44.5151 3.10536 44.7694 3.29289 44.957C3.48043 45.1445 3.73478 45.2498 4 45.2498H11.25C11.4844 46.8729 12.2957 48.3572 13.5354 49.4308C14.7751 50.5043 16.3601 51.0952 18 51.0952C19.6399 51.0952 21.2249 50.5043 22.4646 49.4308C23.7043 48.3572 24.5156 46.8729 24.75 45.2498H41.25C41.4844 46.8729 42.2957 48.3572 43.5354 49.4308C44.7751 50.5043 46.3601 51.0952 48 51.0952C49.6399 51.0952 51.2249 50.5043 52.4646 49.4308C53.7043 48.3572 54.5156 46.8729 54.75 45.2498H60C60.2652 45.2498 60.5196 45.1445 60.7071 44.957C60.8946 44.7694 61 44.5151 61 44.2498V29.4798ZM5 14.9198H35.67V43.2498H24.75C24.5156 41.6268 23.7043 40.1425 22.4646 39.0689C21.2249 37.9954 19.6399 37.4045 18 37.4045C16.3601 37.4045 14.7751 37.9954 13.5354 39.0689C12.2957 40.1425 11.4844 41.6268 11.25 43.2498H5V14.9198ZM18 49.0798C16.7233 49.0772 15.4993 48.5703 14.5946 47.6693C13.69 46.7684 13.1779 45.5466 13.17 44.2698V44.2698C13.17 42.9888 13.6789 41.7603 14.5847 40.8545C15.4905 39.9487 16.719 39.4398 18 39.4398C19.281 39.4398 20.5095 39.9487 21.4153 40.8545C22.3211 41.7603 22.83 42.9888 22.83 44.2698V44.2698C22.8221 45.5466 22.31 46.7684 21.4054 47.6693C20.5007 48.5703 19.2767 49.0772 18 49.0798V49.0798ZM48 49.0798C46.7233 49.0772 45.4993 48.5703 44.5946 47.6693C43.69 46.7684 43.1779 45.5466 43.17 44.2698V44.2698C43.17 42.9888 43.6789 41.7603 44.5847 40.8545C45.4905 39.9487 46.719 39.4398 48 39.4398C49.281 39.4398 50.5095 39.9487 51.4153 40.8545C52.3211 41.7603 52.83 42.9888 52.83 44.2698V44.2698C52.8221 45.5466 52.31 46.7684 51.4054 47.6693C50.5007 48.5703 49.2767 49.0772 48 49.0798V49.0798ZM54.75 43.2498C54.5156 41.6268 53.7043 40.1425 52.4646 39.0689C51.2249 37.9954 49.6399 37.4045 48 37.4045C46.3601 37.4045 44.7751 37.9954 43.5354 39.0689C42.2957 40.1425 41.4844 41.6268 41.25 43.2498H37.67V18.4198H46.77L59 29.9298V43.2498H54.75Z" fill="url(#paint0_linear_180_3436)"/>
  <path d="M49.92 24.3399C49.8721 24.2286 49.8043 24.1269 49.72 24.0399V24.0399L46.28 20.5899C46.1858 20.4953 46.0736 20.4204 45.95 20.3699C45.8291 20.3221 45.7 20.2983 45.57 20.2999H40C39.7348 20.2999 39.4804 20.4052 39.2929 20.5928C39.1054 20.7803 39 21.0347 39 21.2999V34.0799C39 34.3451 39.1054 34.5994 39.2929 34.787C39.4804 34.9745 39.7348 35.0799 40 35.0799H49C49.2652 35.0799 49.5196 34.9745 49.7071 34.787C49.8946 34.5994 50 34.3451 50 34.0799V24.7299C50.0038 24.5954 49.9765 24.4619 49.92 24.3399V24.3399ZM45.15 22.2699L48 25.1399V33.0799H41V22.2699H45.15Z" fill="url(#paint1_linear_180_3436)"/>
  <path d="M18 42.0898C17.6044 42.0898 17.2178 42.2071 16.8889 42.4269C16.56 42.6467 16.3036 42.959 16.1522 43.3245C16.0009 43.6899 15.9613 44.0921 16.0384 44.48C16.1156 44.868 16.3061 45.2244 16.5858 45.5041C16.8655 45.7838 17.2219 45.9742 17.6098 46.0514C17.9978 46.1286 18.3999 46.089 18.7654 45.9376C19.1308 45.7862 19.4432 45.5299 19.6629 45.201C19.8827 44.8721 20 44.4854 20 44.0898C20 43.5594 19.7893 43.0507 19.4142 42.6756C19.0391 42.3006 18.5304 42.0898 18 42.0898Z" fill="url(#paint2_linear_180_3436)"/>
  <path d="M48 42.0898C47.6044 42.0898 47.2178 42.2071 46.8889 42.4269C46.56 42.6467 46.3036 42.959 46.1522 43.3245C46.0009 43.6899 45.9613 44.0921 46.0384 44.48C46.1156 44.868 46.3061 45.2244 46.5858 45.5041C46.8655 45.7838 47.2219 45.9742 47.6098 46.0514C47.9978 46.1286 48.3999 46.089 48.7654 45.9376C49.1308 45.7862 49.4432 45.5299 49.6629 45.201C49.8827 44.8721 50 44.4854 50 44.0898C50 43.5594 49.7893 43.0507 49.4142 42.6756C49.0391 42.3006 48.5304 42.0898 48 42.0898Z" fill="url(#paint3_linear_180_3436)"/>
  <path d="M14 26.0801H17V29.0801C17 29.3453 17.1054 29.5996 17.2929 29.7872C17.4804 29.9747 17.7348 30.0801 18 30.0801C18.2652 30.0801 18.5196 29.9747 18.7071 29.7872C18.8946 29.5996 19 29.3453 19 29.0801V26.0801H22C22.2652 26.0801 22.5196 25.9747 22.7071 25.7872C22.8946 25.5996 23 25.3453 23 25.0801C23 24.8149 22.8946 24.5605 22.7071 24.373C22.5196 24.1854 22.2652 24.0801 22 24.0801H19V21.0801C19 20.8149 18.8946 20.5605 18.7071 20.373C18.5196 20.1854 18.2652 20.0801 18 20.0801C17.7348 20.0801 17.4804 20.1854 17.2929 20.373C17.1054 20.5605 17 20.8149 17 21.0801V24.0801H14C13.7348 24.0801 13.4804 24.1854 13.2929 24.373C13.1054 24.5605 13 24.8149 13 25.0801C13 25.3453 13.1054 25.5996 13.2929 25.7872C13.4804 25.9747 13.7348 26.0801 14 26.0801V26.0801Z" fill="url(#paint4_linear_180_3436)"/>
  <defs>
  <linearGradient id="paint0_linear_180_3436" x1="3" y1="31.9998" x2="61" y2="31.9998" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FD2411"/>
  <stop offset="0.31" stop-color="#DE170C"/>
  <stop offset="0.76" stop-color="#B70606"/>
  <stop offset="1" stop-color="#A80004"/>
  </linearGradient>
  <linearGradient id="paint1_linear_180_3436" x1="468.014" y1="429.412" x2="589.018" y2="429.412" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FD2411"/>
  <stop offset="0.31" stop-color="#DE170C"/>
  <stop offset="0.76" stop-color="#B70606"/>
  <stop offset="1" stop-color="#A80004"/>
  </linearGradient>
  <linearGradient id="paint2_linear_180_3436" x1="80" y1="218.41" x2="96" y2="218.41" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FD2411"/>
  <stop offset="0.31" stop-color="#DE170C"/>
  <stop offset="0.76" stop-color="#B70606"/>
  <stop offset="1" stop-color="#A80004"/>
  </linearGradient>
  <linearGradient id="paint3_linear_180_3436" x1="230" y1="218.41" x2="246" y2="218.41" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FD2411"/>
  <stop offset="0.31" stop-color="#DE170C"/>
  <stop offset="0.76" stop-color="#B70606"/>
  <stop offset="1" stop-color="#A80004"/>
  </linearGradient>
  <linearGradient id="paint4_linear_180_3436" x1="143" y1="270.88" x2="243" y2="270.88" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FD2411"/>
  <stop offset="0.31" stop-color="#DE170C"/>
  <stop offset="0.76" stop-color="#B70606"/>
  <stop offset="1" stop-color="#A80004"/>
  </linearGradient>
  </defs>
  </svg>`,
  },
  {
    type: 'motorcycle',
    color: 'red',
    svg: `<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<g>
 <path d="M27,17c-0.2,0-0.4,0-0.6,0.1l-0.6-1.9C26.2,15,26.6,15,27,15c0.7,0,1.4,0.1,2.1,0.3c0.5,0.2,1.1-0.1,1.3-0.6
   c0.2-0.5-0.1-1.1-0.6-1.3C28.9,13.1,27.9,13,27,13c-0.6,0-1.3,0.1-1.9,0.2l-2.2-6.5C22.8,6.3,22.4,6,22,6h-4c-0.6,0-1,0.4-1,1
   s0.4,1,1,1h3.3l0.7,2H17c-0.4,0-0.7,0.2-0.9,0.5l-0.4,0.6c-1.4,2.3-4,3.4-6.6,2.9c0,0,0,0,0,0c-1.2-0.6-2.7-1-4.1-1
   c-0.6,0-1,0.4-1,1s0.4,1,1,1c3.9,0,7,3.1,7,7c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1c0-2.7,1.6-5.1,3.9-6.2l0.6,1.9
   C23,18.6,22,20.2,22,22c0,2.8,2.2,5,5,5s5-2.2,5-5S29.8,17,27,17z"/>
 <path d="M5,17c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S7.8,17,5,17z"/>
</g>
</svg>
`,
  },
  {
    type: 'boat',
    color: 'blue',
    svg: `<svg  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch -->
  <title>icon 43 sailing boat</title>
  <desc>Created with Sketch.</desc>
  <defs></defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
      <g id="icon-43-sailing-boat" sketch:type="MSArtboardGroup" fill="#000000">
          <path d="M17,22 L26.9047619,22 L27,22 C27,24.2046438 25.2094214,26 23.0006308,26 L9.99936922,26 C7.79044819,26 6,24.209139 6,22 L6.0952381,22 L16,22 L16,7 L17,7 L17,22 L17,22 Z M27,21 L18,21 L18,12 L27,21 L27,21 Z M9,12.5 C6,17.5 6,21 6,21 L15,21 C15,21 14,19.5 14,15 C14,10.5 15,7 15,7 C15,7 12,7.5 9,12.5 L9,12.5 Z" id="sailing-boat" sketch:type="MSShapeGroup"></path>
      </g>
  </g>
</svg>`,
  },
];

const wrapper = document.querySelector('.vehicle-wrapper');
vehicles.forEach((vehicle) => {
  const div = document.createElement('div');
  div.setAttribute('data-color', vehicle.color);
  wrapper.appendChild(div);
  div.innerHTML = `${vehicle.svg}`;
});

// BUTTON PIC

const button = document.querySelector('button');
const imageWrapper = document.querySelector('.image-wrapper');

// button.addEventListener('click', () => {
//   const image = document.createElement('div');
//   imageWrapper.appendChild(image);
//   image.innerHTML = 'Hej';
// });
