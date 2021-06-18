// 'use strict';

// Load data

fetch("./data/new-releases.json")
  .then((response) => response.json())
  .then(header);

fetch("./data/new-releases.json")
  .then((response) => response.json())
  .then(newReleasesLoaded);

fetch("./data/playlists.json")
  .then((response) => response.json())
  .then(playlistsLoaded);

// Your code

 function header(data) {    
//   //  const Header = document.querySelector('#header');
//   //  const HeaderElemNav = document.createElement('nav');
//   //  HeaderElemNav.className = 'navigation';
//  const HeaderElemUl = document.createElement();



const logoBox = document.querySelector("#logo-box");
const logoBoxName = document.createElement("h5");
const UserName = "Eugene"; // Потім потрібно буде додати document.getElementById('#id').value;
logoBoxName.textContent = UserName;
logoBoxName.className = "UserName";
logoBox.appendChild(logoBoxName);


const logoBoxImg = document.createElement("img");
logoBoxImg.src = './images/dark.jpg';
logoBoxImg.className = "UserImg";
logoBoxImg.width = 36;
logoBoxImg.height = 36;
logoBox.appendChild(logoBoxImg);
}

function newReleasesLoaded(data) {
  const NewReleases = document.querySelector('#Titile-Realeases-divider');
  const NewRelasesTitleIco = document.createElement('img');
NewRelasesTitleIco.src = './images/icons/thunder.svg';
NewRelasesTitleIco.className = 'NewReleasesIco';
 NewReleases.appendChild(NewRelasesTitleIco);
const NewRelasesTitleName = document.createElement('h2');
  NewRelasesTitleName.className = 'section__title_section__title_playlists';
NewRelasesTitleName.textContent = 'New Releases';
NewReleases.appendChild(NewRelasesTitleName);

    const releasesElem = document.querySelector('#featuredPlaylists');
  const arr = [];
    for(const vall of data.albums.items){
      const releasesItemElem = document.createElement('li');
      releasesItemElem.className = 'release';
      releasesElem.appendChild(releasesItemElem);
      const imageUrl = vall.images[1].url;
      const releasesItemImageElem = document.createElement('img');
      releasesItemImageElem.src = imageUrl;
    releasesItemImageElem.className = 'RelaseImg';
       releasesItemImageElem.width = 150 ;
     releasesItemElem.appendChild(releasesItemImageElem);
     const releasesItemNameElem = document.createElement('h6');
     releasesItemNameElem.className = 'ReleaseNameSong';
    //  const releasesItemNameElemText =  data.albums.items[0].[1].url;;
     releasesItemNameElem.textContent =  vall.name;
     releasesItemElem.appendChild(releasesItemNameElem);
    //  const releasesItemElemButton = document.createElement('button');
    //  releasesItemElemButton.className = 'releasesItemElemButton';
    //  releasesItemElem.appendChild(releasesItemElemButton);
     const releasesItemArtistElem = document.createElement('a');
     releasesItemArtistElem.href = vall.external_urls.spotify;
     releasesItemArtistElem.target='__blank';
     releasesItemArtistElem.textContent = vall.artists[0].name;
     releasesItemArtistElem.className = 'ReleaseArtistName';
     releasesItemElem.appendChild(releasesItemArtistElem);
     const releasesItemButtonElem = document.createElement('a');
     releasesItemButtonElem.href = vall.external_urls.spotify; 
     releasesItemButtonElem.className = 'releasesItemButtonElem';
     releasesItemElem.appendChild(releasesItemButtonElem)
     releasesItemButtonElemImg = document.createElement('img');
     releasesItemButtonElemImg.className = 'releasesItemButtonElemImg';
     releasesItemButtonElemImg.src = './images/icons/play-button.png';
     releasesItemButtonElemImg.height = 50;
     releasesItemButtonElemImg.width = 50;
     releasesItemButtonElem.appendChild(releasesItemButtonElemImg);


     
     arr.push(releasesItemElem);    
    
    }
       
        //  NewReleases.appendChild(NewRelasesTitleName);
  // const imageUrl = data.albums.items[vall].images[1].url;
   const releasesItemElem1 = document.createElement('li').cloneNode(true);
   releasesItemElem1.className = 'release';
  //  releasesElem1.appendChild(releasesItemElem);
       const releasesItemImageElem1 = document.createElement('img');
    // releasesItemImageElem1.src = imageUrl;
  releasesItemImageElem1.className = 'RelaseImg';
     releasesItemImageElem1.width = 150 ;
  //  releasesItemElem1.appendChild(releasesItemImageElem);
   const releasesItemNameElem1 = document.createElement('h6');
   releasesItemNameElem1.className = 'ReleaseNameSong';
   // const releasesItemNameElemText =  data.albums.items[0].[1].url;;
   releasesItemNameElem1.textContent =  'SongName';
  //  releasesItemElem1.appendChild(releasesItemNameElem);
   const releasesItemArtistElem1 = document.createElement('a');
   releasesItemArtistElem1.href = releas_item.external_urls.spotify;
   releasesItemArtistElem1.text = 'Artist';
   releasesItemArtistElem1.className = 'ReleaseArtistName';
  //  releasesItemElem.appendChild(releasesItemArtistElem1);
  // const releasesItemElem1 = releasesItemElem.cloneNode(true);
  // const releasesItemElem2 = releasesItemElem.cloneNode(true);
  // const releasesItemElem3 = releasesItemElem.cloneNode(true);
  // releasesElem.appendChild(releasesItemElem1);
  // releasesElem.appendChild(releasesItemElem2);
  // releasesElem.appendChild(releasesItemElem3);
  releasesElem.append(...arr);
}

function playlistsLoaded(data) {

  const playlistsLoadedTitle = document.querySelector(
    "#PlaylistsLoaded-divider"
  );
  const playlistsLoadedTitleIco = document.createElement("img");
  playlistsLoadedTitleIco.src = "./images/icons/heart.svg";
  playlistsLoadedTitleIco.className = "playlistsLoadedIco";
  const playlistsLoadedTitleName = document.createElement("h2");
  // playlistsLoadedTitleName.className =
    "playlistsLoaded_section__title_playlists";
  playlistsLoadedTitleName.textContent = "New Releases";
  


  playlistsLoadedTitle.appendChild(playlistsLoadedTitleIco);
  playlistsLoadedTitle.appendChild(playlistsLoadedTitleName);

for(vallf of data.playlists.items){


  const arrf = [];

 
  const playlistsLoaded = document.querySelector("#LoadedPlaylists");
  const playlistsLoadedElem = document.createElement("li");
  playlistsLoadedElem.className = "playlistsLoadedElem";
  playlistsLoaded.appendChild(playlistsLoadedElem);


  
  const playlistsLoadedElemImg = document.createElement("img");
 
  const imageUrl = vallf.images[0].url;

  playlistsLoadedElemImg.className = "playlistsLoadedElemImg";
  playlistsLoadedElemImg.src = imageUrl;
  playlistsLoadedElemImg.width = 60;
  playlistsLoadedElemImg.height = 60;

   playlistsLoadedElem.appendChild(playlistsLoadedElemImg);

  const playlistsLoadedElemDivider = document.createElement("div");
  playlistsLoadedElemDivider.className = "playlistsLoadedElemDivider";
  playlistsLoadedElem.appendChild(playlistsLoadedElemDivider);

  const playlistsLoadedElemDividerDescriptname = vallf.name;

  const playlistsLoadedElemDividerName = document.createElement("h5")
  playlistsLoadedElemDividerName.className = "playlistsLoadedElemDividerName";
  playlistsLoadedElemDividerName.textContent = playlistsLoadedElemDividerDescriptname;
  playlistsLoadedElemDivider.appendChild(playlistsLoadedElemDividerName);

  const playlistsLoadedElemDividerDescripttext = vallf.description;

  const playlistsLoadedElemDividerDescript = document.createElement('p');
  playlistsLoadedElemDividerDescript.className = 'playlistsLoadedElemDividerDescript';
  playlistsLoadedElemDividerDescript.textContent = playlistsLoadedElemDividerDescripttext;
  playlistsLoadedElemDivider.appendChild(playlistsLoadedElemDividerDescript);

  const playlistsLoadedElemtot = document.createElement('p');
  playlistsLoadedElemtot.textContent = vallf.tracks.total + '  tracks';
  playlistsLoadedElemtot.className = 'playlistsLoadedElemTotal';
   
    
  
  playlistsLoadedElem.appendChild(playlistsLoadedElemtot);
  
  
  playlistsLoaded.append(...arrf);
 
  }
}

