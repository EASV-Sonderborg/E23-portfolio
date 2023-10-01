document.addEventListener("DOMContentLoaded", () => {
    // Wait for the page to fully load
  
    const skeletonGrid = document.querySelector(".skeleton-grid");
    const videoContainer = document.querySelector(".grid-videos");
  
    // Create and append skeleton elements
    const createSkeleton = () => {
      const skeleton = document.createElement("div");
      skeleton.className = "skeleton";
  
      const skeletonLink = document.createElement("a");
      skeletonLink.className = "skeleton--link";
      skeletonLink.href = "#";
  
      const skeletonImg = document.createElement("div");
      skeletonImg.className = "skeleton--img";
  
      const skeletonGridXs = document.createElement("section");
      skeletonGridXs.className = "skeleton-grid-xs";
  
      const skeletonPfp = document.createElement("div");
      skeletonPfp.className = "skeleton--pfp";
  
      const skeletonName = document.createElement("h2");
      skeletonName.className = "skeleton--name";
  
      const skeletonArtist = document.createElement("h5");
      skeletonArtist.className = "skeleton--artist";
  
      skeletonGridXs.appendChild(skeletonPfp);
      skeletonGridXs.appendChild(skeletonName);
      skeletonGridXs.appendChild(skeletonArtist);
  
      skeletonLink.appendChild(skeletonImg);
      skeletonLink.appendChild(skeletonGridXs);
  
      skeleton.appendChild(skeletonLink);
  
      return skeleton;
    };
  
    const addSkeletonsToGrid = (count) => {
      for (let s = 0; s < count; s++) {
        const skeleton = createSkeleton();
        skeletonGrid.appendChild(skeleton);
      }
    };
  
    addSkeletonsToGrid(10); // Add 10 skeleton elements to the grid initially
  
    // Function to load actual content
    const loadContent = () => {
      // Hide the skeleton grid
      skeletonGrid.style.display = "none";
  
      // Show the actual content (videoContainer)
    // videoContainer.style.display = "block";
  
      // You can add your code here to load the actual content.
      // For example, fetch data from an API and populate the videoContainer.
      const file = 'youtube.json';
     async function getData() {
      const response = await fetch(file);
      const data = await response.json(); 
      return data;
  }
  
  getData().then(data => {
      const videos = data.videos;
  
      const thumbnail = document.querySelector('.thumbnail');
      const artist = document.querySelector('.artist');
      const name = document.querySelector('.name');
      const pfp = document.querySelector('.pfp');

      artist.textContent = videos[0].artist;
      name.textContent = videos[0].name;
      thumbnail.src = videos[0].thumbnail;
      pfp.src = videos[0].pfp;

      const article = document.querySelector('.grid-videos');
        const nodesToClone = document.querySelectorAll('.video-container')   

        let counter = 10; 

        for (let i = 0; i < counter; i++) {
            const clone = nodesToClone[0].cloneNode(true);
            article.appendChild(clone);
        }
      
    })

    .catch(err => console.log('errors ' + err.message));
    };
  
    // Simulate content loading after a delay (you can replace this with your actual content loading logic)
    setTimeout(loadContent, 2000); // Delay for 2 seconds to simulate loading
  
  });
  