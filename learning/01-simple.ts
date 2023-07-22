// Greeting and welcome to Deno 🦕
console.log("Hello from Deno 🦕")

// Make first request to the server
const res = await fetch("https://deno.com")
const body = await res.text()
console.log(body)

// You will see the external call protected by the permission prompt
