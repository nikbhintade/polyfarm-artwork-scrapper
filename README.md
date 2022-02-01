# Scrapping Polyfarm (NFT game)

This is just basic scrapper which gets all the images uploaded to polyfarm smart contract. Polyfarm is a fork of wolfgame.

Used ethers.js to connect with plygon network. Alchemy is used as a rpc provider.

`index.js` collects all the data and `convert.js` converts the base64 images to png.

Note: I am just trying to fork this on my local network. I didn't had any artwork so I scrapped their artwork.


Also, If you haven't used alchemy go and [sign up for alchemy](https://alchemy.com/?r=58df9983ef4a2d69).

Go send some ETH my way if you think this was very useless. My address is 0xd61767541c6DA0c233Fe728909FfE22ae75491AE

## Run scripts

First clone the project and create `.env` file and save your alchemy url in that.

```
URL=<YOUR_ALCHEMY_URL>
```

Then, run following command in terminal:

```
npm install 

or

yarn
```

To collect the data:

```
node index.js
```

to convert the data

```
node convert.js
```

## License

MIT