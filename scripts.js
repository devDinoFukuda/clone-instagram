/**/
//puxei a imagem do Dom
const imgUnsplash = document.querySelector('.img-unsplash-random');
console.log(imgUnsplash);

// criar uma variável para refresh da imagem
const imgRefresh = () => {location.reload(imgUnsplash)};

//criando o refresh a cada 6 segundos
const interval = setInterval(imgRefresh, 6000);
