// Part 1
let headEl = document.querySelector("head")
let css_link = document.createElement("link")
css_link.setAttribute("rel", "stylesheet")
css_link.setAttribute("href", "src/styles.css")
headEl.appendChild(css_link)
let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
let h1El = document.createElement("h1")
h1El.innerHTML = "DOM Manipulation"
h1El = mainEl.appendChild(h1El)
mainEl.classList.add("flex-ctr")
