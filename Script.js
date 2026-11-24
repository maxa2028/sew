
let folder = "clothes";

let images = [
    "images1.webp",
    "images2.webp",
    "images3.webp",
    "images4.webp",
    "images5.webp",
    "images6.webp",
    "image2.webp",
    "image.png"
];

let ShirtsPerSecond = 200;
let shirts = [];

let lastSpawn = null;

let spawned = 0;
let deleted = 0;

function spawnShirt() {
    
    let shirt = document.createElement("img");

    let randomImage = images[Math.floor(Math.random() * images.length)];
    shirt.src = `./${folder}/${randomImage}`;

    shirt.style.position = "fixed";
    shirt.style.left = "-10px";
    shirt.style.top = (340 + Math.random() * (window.innerHeight - 400)) + "px";
    shirt.style.width = "4vw";
    shirt.style.height = "4vw";
    shirt.style.objectFit = "contain";
    shirt.style.pointerEvents = "none";

    document.body.appendChild(shirt);

    shirts.push({
        element: shirt,
        x: -60
    });

    spawned++;
}

function animate(time) {

    if (lastSpawn === null) lastSpawn = time;

    let delta = time - lastSpawn;
    let amount = Math.floor(delta * ShirtsPerSecond / 1000);
    if(window.innerHeight > 400) {
        for (let i = 0; i < amount; i++) {
            spawnShirt();
        }
    }
    

    lastSpawn += amount * 1000 / ShirtsPerSecond;

    for (let i = shirts.length - 1; i >= 0; i--) {

        let shirt = shirts[i];

        shirt.x += 400 * delta / 1000;
        shirt.element.style.left = shirt.x + "px";

        if (shirt.x > window.innerWidth) {
            shirt.element.remove();
            deleted++;
            shirts.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}



requestAnimationFrame(animate);
