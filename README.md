# Pug To Image

Takes a [Pug template](https://pugjs.org) file and associated options as inputs and outputs an image.

## Installation

`npm install pug-to-image`

## Example

```
const pugToImage = require("pug-to-image");
const fs = require("fs");

const imageType = "PNG"; // Any PhantomJS image type
const width = 512;
const height = 512;
const filename = "filename.pug";
const destination = "image.png";
const options = { name: "Jordan" }; // Just example variables which are going to be passed off to pug to be rendered

pugToImage(imageType, width, height, filename, options).then((buffer) => {
    // Write the buffer to a file
    fs.writeFile("image.png", buffer, () => console.log("Saved :)"));

    // Or maybe tweet the image, using an example function `tweetImage`
    tweetImage(buffer, () => console.log("Tweeted :)"));
});
```

- `pugToImage` is also curried

## Author

Jordan Lord

## License

Apache License 2.0
