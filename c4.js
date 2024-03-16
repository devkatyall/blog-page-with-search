const template = document.querySelector("[data-template]")
const blogSection = document.querySelector(".blog")
const inputValue = document.querySelector("#input")
let post =[];

inputValue.addEventListener("input",(search)=>{
    const input = search.target.value.toLowerCase()
    post.forEach(
        (user)=>{
            const isTrue = user.title.includes(input) || user.about.includes(input)
            user.element.classList.toggle("hide", !isTrue)
        }
    )
})

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(dost=>dost.json())
    .then(ghost =>{ 
        post = ghost.map(user => {
            const card = template.content.cloneNode(true).children[0]
            const title = card.querySelector(".title")
            const description = card.querySelector(".about")
            title.textContent = user.title;
            description.textContent = user.body
            blogSection.append(card)
            return {title: user.title, about: user.body, element: card}
        });
})
