// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector(`main`);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`; // Setting background color using custom CSS properties

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>Dom Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element with .createElement()
  let newLink = document.createElement(`a`);

  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute(`href`, link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  newLink.textContent = link.text;

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newLink);
});

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList = `flex-around`;

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl;

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener(`click`, handleClick);

// The first line of code of the event listener function should call the event object's preventDefault() method.
function handleClick(event) {
  event.preventDefault();

  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName !== `A`) {
    // Log the content of the <a> to verify the handler is working.
    // console.log(event.target);
    return;
  }
  // Show submenu when 'catalog' is clicked
  if (event.target.textContent === "catalog") {
    subMenuEl.style.display = "block"; // Make submenu visible
  } else {
    subMenuEl.style.display = "none"; // Hide submenu for other items
  }
}
