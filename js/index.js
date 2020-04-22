const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add text to nav a
document.querySelector('a').textContent = "Services";
document.querySelector('a:nth-of-type(2)').textContent = "Product";
document.querySelector('a:nth-of-type(3)').textContent = "Vision";
document.querySelector('a:nth-of-type(4)').textContent = "Features";
document.querySelector('a:nth-of-type(5)').textContent = "About";
document.querySelector('a:nth-of-type(6)').textContent = "Contact";

// cta h1 
//document.querySelector('.cta-text h1').textContent = "DOM Is Awesome";

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta.h1; 

// cta button 
// document.querySelector('.cta-text button').textContent = "Get Started";

const button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta.button; 


// Create <br> element 
const br = document.createElement('br');

// Create parent element for break
const parentBr = document.querySelector(".cta-text h1");

// create <br> child element
parentBr.appendChild(br);
const brFirstChild = parentBr.firstChild; 

// Insert another <br> element before the first child
const br2 = document.createElement('br');
parentBr.insertBefore(br2, brFirstChild);

// Refactor h1 text 
//parentBr.insertAdjacentText(brFirstChild, 'DOM');
//parentBr.insertBefore(parentBr.textContent, brFirstChild);
  
 