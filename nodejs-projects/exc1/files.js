const fs = require('fs');
//reading files
/*
READ EXAMPLE

fs.readFile("./docs/blog1.txt", (err,data) => {
    if(err)
    {
        console.log(err);
    }

    console.log(data.toString());
    //  console.log(data); --> returns buffer (a package of data)
})
    

*/

//writing files
/*
WRITE EXAMPLE

fs.writeFile("./docs/blog1.txt", "hello world", () => {
    console.log("file is written");
});

*/
// directories

// if(!fs.existsSync('./assets')){
// fs.mkdir("./assets", (err) => {
//     if(err)
//     {
//         console.log(err);
//     }

//     console.log("created");

// })}
// else{
//     fs.rmdir('./assets', (err) => {
//         if(error)
//         {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files

if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',(err) => {
        if(err)
        {
            console.log(err);
        }

        console.log("file deleted");

    })
}