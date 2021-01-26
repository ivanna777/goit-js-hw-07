const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');
  const urls = images.map(image => image.url);
  const alts = images.map(image => image.alt);

  galleryRef.insertAdjacentHTML("afterbegin", 
  `<li><img url='${urls[0]}', alt='${alts[0]}'/></li>
  <li><img url='${urls[1]}', alt='${alts[1]}'/></li>
  <li><img url='${urls[2]}', alt='${alts[2]}'/></li>`)
  

  console.log(galleryRef)