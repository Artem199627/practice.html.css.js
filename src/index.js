// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const gallery = document.querySelector(".gallery");
// const img = images.map(({ url, alt }) => `<li class="img-list"><img src=${url} alt${alt}></li>`).join("");
// gallery.insertAdjacentHTML("beforeend", img);
// console.log(img);
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
openModalBtn.addEventListener("click", openModal);


const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
overlay.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);



document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
        
})