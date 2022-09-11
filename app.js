const get = Element => document.getElementById(Element)

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');

})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})