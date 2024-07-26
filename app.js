
const imageArr = ["https://plus.unsplash.com/premium_photo-1673329271082-365e038a1efd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1665321756782-8a3c434fdd90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709182360963-2253f009172e?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1637419567748-6789aec01324?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/Knowhere-Guardians-of-the-Galaxy-screenshot.png?q=50&fit=crop&w=825&dpr=1.5",
    "https://i.redd.it/llcym7nqx5d11.png",
    "https://images.unsplash.com/photo-1495833066942-79abe24b0c1f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]


const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;
const imgElement = document.getElementById("img");

const nextImage = () => {
    currentIndex = (currentIndex + 1) % imageArr.length;
    imgElement.src = imageArr[currentIndex];
}

const previousImage = () => {
    currentIndex = (currentIndex - 1 + imageArr.length) % imageArr.length;
    imgElement.src = imageArr[currentIndex];
}
const slider = () => {
    nextImage();
    setTimeout(slider, 5000);

}


const addHoverEffect = (button) => {
    button.classList.add('hover-effect');
    setTimeout(() => {
        button.classList.remove('hover-effect');
    }, 500); // Remove the effect after 500ms
}

document.body.addEventListener("keyup", (e) => {
    if (e.keyCode === 39) {
        nextImage();
        addHoverEffect(nextBtn);

    }
    else if (e.keyCode === 37) {
        previousImage();
        addHoverEffect(previousBtn);

    }
});



nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", previousImage);
setTimeout(slider, 5000);

