// const dogimage = document.getElementById("dogimage");
// const fetchdogbtn = document.getElementById("fetchdogbtn");

// function dog() {
//     return new Promise((resolve, reject) => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//             .then((response) => {
//                 console.log("Response received:", response);
//                 return response.json(); 
//             })
//             .then((data) => {
//                 resolve(data); 
//             })
//             .catch((error) => {
//                 reject(error); 
//             });
//     });
// }

// fetchdogbtn.addEventListener("click",()=>{
//     console.log("Fetching a random dog picture...");
//     dog()
//     .then((date)=>{
//         console.log("date fetched from api:",date);
//         dogimage.src =date.message

        
//     })
    

// })


// const errmessage = document.getElementById("errmessage");
// const container = document.getElementById("container");
// const btn = document.getElementById("btn");
// const url="https://dog.ceo/api/breeds/image/random";
// function getdogpic(num) {
//     return new Promise ((resolve,reject)=>{
//         const response =fetch(`${url}/${num}`);
//         response .then ((response)=>{
//             const data =response.json();
//             resolve (data);
//         }).catch((error)=>{
//             reject("FAILED TO FATCH IN ERROR ")
//         })
//     })
// }

// btn.addEventListener("click",()=>{
//     getdogpic(10).then((data)=>{
//         data.message.foeeach(()=>{
//             const newImage =document.createElement("img");
//             newImage.setAttribute("src",imgurl);
//             container.appendChild(newImage);
//         })
//     }).catch((error)=>{
//         errmessage.textContent=error
//     })
    
// }) 



const errmessage = document.getElementById("errmessage");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const url="https://dog.ceo/api/breeds/image/random";

async function getdogpic(num) {
    try{
        const response =await fatch(`${url}/${num}`);
        console.log(response);
        const data = await response.json();
        return data; 
    } catch(error){
        throw new error("failed to fetch data")
    }
}

btn.addEventListener("click",async ()=>{
    try{
        const data =await getdogpic(10);
        data.message.foreach((imgurl)=>{
            const newImage =document.createElement("img");
            newImage.setAttribute("src",imgurl)
            container.appendChild(newImage)
        })
    }catch (error){
        
    }
})