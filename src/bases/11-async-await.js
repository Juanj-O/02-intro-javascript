// const getImagesPromesa = () => {
//     return new Promise(resolve => resolve('https://asdasd.com'))
// }
// getImagesPromesa().then(console.log);

const getImage = async() => {

    const apiKey = 'FmMH382WokZrPnQqKrzYx5ciGe4HfKW8';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const { url } =  data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
}

getImage();

