// const file = 'youtube.json';
//   async function getData() {
//       const response = await fetch(file);
//       const data = await response.json(); 
//       return data;
//   }
  
//   getData().then(data => {
//       const videos = data.videos;
  
//       const thumbnail = document.querySelector('.thumbnail');
//       const artist = document.querySelector('.artist');
//       const name = document.querySelector('.name');
//       const pfp = document.querySelector('.pfp');

//       artist.textContent = videos[0].artist;
//       name.textContent = videos[0].name;
//       thumbnail.src = videos[0].thumbnail;
//       pfp.src = videos[0].pfp;

//       const article = document.querySelector('.grid-videos');
//         const nodesToClone = document.querySelectorAll('.video-container')   

//         let counter = 10; 

//         for (let i = 0; i < counter; i++) {
//             const clone = nodesToClone[0].cloneNode(true);
//             article.appendChild(clone);
//         }
      
//     })

//     .catch(err => console.log('errors ' + err.message));
