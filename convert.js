const fs = require("fs");
const path = require('path');

function main() {
    fs.mkdir(path.join(__dirname, 'images'), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    })

    for (let i = 0; i < 8; i++) {
        fs.readFile(`./traits/trait${i}.json`, 'utf8', (err, data) => {
            if(err) {console.log(err)}
            fs.mkdir(path.join(__dirname, 'images' ,`image-${i}`), (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log('Directory created successfully!');
            })
            let trait = JSON.parse(data);

            let keys = Object.keys(trait);

            for ( let j = 0; j < keys.length - 1; j++) {
                let _buffer = Buffer.from(trait[keys[j]], 'base64');
                fs.writeFile(`./images/image-${i}/${keys[j]}.png`, _buffer, (e) => {
                    if (err) throw err;
                });
            }
        });
    }
}

main();