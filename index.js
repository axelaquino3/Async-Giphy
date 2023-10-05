require('dotenv').config()
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}d5hK1KotZTTYXWkY3XBhJpuCEI1QBZV7&${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

//asynch function
async function getImage(query){
    const newImage = await fetch(endpoint)
    const data = await response.json()
    const singleImage = ""
    console.log(data)
    return data
    
}

getImage

