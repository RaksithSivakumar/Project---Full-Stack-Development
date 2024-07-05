const readline = require('readline');
const fs = require('fs');
const http = require('http');


/*const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ",(name) => {
        console.log("You entered: "+name);
        rl.close();
})

rl.on("close", () => {
    console.log("Interface closed");
    process.exit(0);
})*/


/*const content = 'This is some content to write to the file.';

const store = " ";

let data = fs.readFileSync('example.txt','utf-8'); // Read the file 'example.txt' with UTF-8 encoding
    console.log(data);

let abc = "Data read from input.txt: ${data} \nData created ${new Date()}"
 
fs.writeFileSync("example.txt","utf-8");*/



// Read file asynchronously
/*fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log('File content:', data);

    // Prepare new content
    const newContent = `${data}\nData created: ${new Date()}`;

    // Write new content to file asynchronously
    fs.writeFile('example.txt', newContent, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        
        console.log('File has been written successfully.');
    });
});*/

// CREATE A SERVER ---- 1

const Server = http.createServer((request,Response) => {
    Response.end("Hello from the server!")
    console.log('A new request received');
    console.log(Response);

});

// START THE SERVER ---- 2

Server.listen(8000,'127.0.0.1', () =>{
    console.log('Server has started!');
})


