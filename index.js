// console.log("welcome to node js")
// console.log("hello")
// console.log("hi")
// console.log("helloo")


const http = require("http")
const server = http.createServer((req,res)=>{
res.write("hello world")
res.end("response provided")
})
server.listen("3101", ()=>{
    console.log("server is running")
})  