const blocks = document.querySelectorAll(".text-block");
let index = 0;

setInterval(() => {
    blocks[index].classList.remove("active");
    index = (index + 1) % blocks.length;
    blocks[index].classList.add("active");
}, 3000);
