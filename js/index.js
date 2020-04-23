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

// Add content to nav links
document.querySelector('a').textContent = siteContent["nav"]["nav-item-1"];
document.querySelector('a:nth-of-type(2)').textContent = siteContent["nav"]["nav-item-2"];
document.querySelector('a:nth-of-type(3)').textContent = siteContent["nav"]["nav-item-3"];;
document.querySelector('a:nth-of-type(4)').textContent = siteContent["nav"]["nav-item-4"];;
document.querySelector('a:nth-of-type(5)').textContent = siteContent["nav"]["nav-item-5"];;
document.querySelector('a:nth-of-type(6)').textContent = siteContent["nav"]["nav-item-6"];;

// Add content header (cta h1) 
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta.h1; 

// Add cta button text
const button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta.button; 


// Create break <br> element 
const br1 = document.createElement('br');

// Create parent element for break
const parentBr = document.querySelector("h1");

// Refactor cta-text h1 content 
parentBr.textContent=""
let text1 = parentBr.textContent;

// cta text part 1
text1 = "DOM"

// Append text1 to parent
parentBr.append(text1); 

// Append child <br> to parent 
parentBr.appendChild(br1); 

// cta text part 2 
let text2 = parentBr.textContent;
text2 = "Is"; 

// Append text2 to parent
parentBr.append(text2); 

// Append 2nd <br> to parent 
const br2 = document.createElement('br'); 
parentBr.appendChild(br2); 

// cta text part 3
let text3 = parentBr.textContent;
text3 = "Awesome";

// Append text 3 to parent
parentBr.append(text3);


// Add source to header image
const imgHeader = document.querySelector('#cta-img');
imgHeader.setAttribute('src', siteContent["cta"]["img-src"]);

// Features title and content 
const featuresTitle = document.querySelector('.top-content h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector('.top-content p');
featuresContent.textContent = siteContent["main-content"]["features-content"];


// Create a node list for the main-content h4 and p 
const titles = document.querySelectorAll('h4');
const content = document.querySelectorAll('p'); 

// About Title and content 
titles[1].textContent = siteContent["main-content"]["about-h4"];
content[1].textContent = siteContent["main-content"]["about-content"];

// Add source to middle img 
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Services title and content 
titles[2].textContent = siteContent["main-content"]["services-h4"];
content[2].textContent = siteContent["main-content"]["services-content"]; 

// Product title and content 
titles[3].textContent = siteContent["main-content"]["product-h4"];
content[3].textContent = siteContent["main-content"]["product-content"]; 

// Vision title and content 
titles[4].textContent = siteContent["main-content"]["vision-h4"];
content[4].textContent = siteContent["main-content"]["vision-content"]; 


// Add content to contact 

titles[5].textContent = siteContent["contact"]["contact-h4"];

// Create node list on Contact <p> contents 
const contactInfo = document.querySelectorAll('.contact p');

// Add contact address, phone, and email 
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];


// Add content to footer 
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];


// Create <br> element  
const newBreak = document.createElement('br'); 

// Create parent element for the new element br to append to 
const parentContact = contactInfo[0]; 

// Refactor contact address: 
parentContact.textContent = "";
let address1 = parentContact.textContent; 

// 1st part of the contact address
address1 = "123 Way 456 Street";

// Append address1 to parent 
parentContact.append(address1); 

// Append child <br> to parent
parentContact.appendChild(newBreak);

// Add 2nd part of the contact address
let address2 = parentContact.textContent; 
address2 = "Somewhere, USA";

// Append 2nd part of the contact address 
parentContact.append(address2);

