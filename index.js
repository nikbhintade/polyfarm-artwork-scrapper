const ethers = require("ethers");
const fs = require("fs");

require("dotenv").config();

const ABI = require("./abi.json");

const address = "0xFFD7D5B6877310f65E356F095F5f0bC2D5cc20E9";
const URL = process.env.URL;

async function main() {

    const provider = new ethers.providers.JsonRpcProvider(URL)

    const _contract = new ethers.Contract(address, ABI, provider);
    
    let k = 0;
    for (let i = 0; i < 8; i++ ) {
        let _json = [];
        for (let j = 0; j < 17; j++ ) {
            console.log(k);
            let _response = await _contract.traitData(i, j);

            let _res = _json.push(_response);
            console.log(_response[0])
            console.log(_json.length);
            k++;
        }

        fs.mkdir(path.join(__dirname, 'traits'), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
        })

        fs.writeFile(`./traits/trait${i}.json`, JSON.stringify(Object.fromEntries(_json), null, 4), (e) => {
            console.log(e);
        })
    }

}

main();