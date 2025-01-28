const dogimage = document.getElementById("dogimage");
const fetchdogbtn = document.getElementById("fetchdogbtn");

function dog() {
    return new Promise((resolve, reject) => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                console.log("Response received:", response);
                return response.json(); 
            })
            .then((data) => {
                resolve(data); 
            })
            .catch((error) => {
                reject(error); 
            });
    });
}

fetchdogbtn.addEventListener("click",()=>{
    console.log("Fetching a random dog picture...");
    dog()
    .then((date)=>{
        console.log("date fetched from api:",date);
        dogimage.src =date.message

        
    })
    

})
