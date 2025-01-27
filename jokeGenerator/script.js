const jokeElement = document.getElementById('joke');
const btn = document.getElementById('btn');

function getJoke() {
    const jokes = [
        "What does a storm cloud wear under his raincoat? Thunderwear!",
        "What do you call an ant who fights crime? A vigilANTe!",
        "Why are snails slow? Because they're carrying a house on their back!",
        " What's the smartest insect? A spelling bee!",
        " What is fast, loud and crunchy? A rocket chip",
        " How does the ocean say hi? It waves!",
        " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates"
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const randomJoke = jokes[randomIndex];

            if (randomJoke) {
                resolve(randomJoke); 
            } else {
                reject("Failed to fetch joke..."); 
            }
        }, 2000);
    });
}

btn.addEventListener("click", () => {
    jokeElement.textContent = "Fetching joke..."; 
    getJoke()
        .then((joke) => {
            jokeElement.textContent = joke; 
            localStorage.setItem("latestJoke", joke); 
        })
        .catch((error) => {
            jokeElement.textContent = error; 
        });
});
