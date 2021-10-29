//You can edit ALL of the code here
// function setup() {
// const allEpisodes = getAllEpisodes();
// makePageForEpisodes(allEpisodes);
// }
const allEpisodes = getAllEpisodes();
console.log(allEpisodes);
function onloadShow() {
  allEpisodes.forEach((show) => {
    //Zeropadded utility function
    function zeroPadded(number) {
      return number.toString().padStart(2, "0");
    }
 
    if (show.image) {
      results.innerHTML += `
                  <div class="show">
                         <div class="show-preview">
                          <h2>${show.name} - S${zeroPadded(
        show.season
      )}E${zeroPadded(show.number)}</h2>
                         <img src="${show.image.medium}">
                         <a href="#">View all Episodes <i class="fas fa-chevron-right"></i></a>
                       </div>

                        <div class="show-info">
                        <h6>${show.name}</h6>
                        ${show.summary}</div>
                  </div>
         `;
    }
  });
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  console.log(episodeList);

  function onloadShow() {
    allShows.forEach((show) => {
      if (show.image) {
        results.innerHTML += `
                  <div class="show">
                         <div class="show-preview">
                         <h2>${show.name}</h2>
                         <img src="${show.image.medium}">
                         <a href="#">View all Episodes <i class="fas fa-chevron-right"></i></a>
                       </div>

                        <div class="show-info">
                        <h6>${show.name}</h6>
                        ${show.summary}</div>
                  </div>
         `;
      }
    });
  }
}

window.onload = onloadShow;

const search = document.createElement("input");
search.type = "text";
rootElem.appendChild(search);
//Search box event listener
search.addEventListener("keyup", (e) => {
  term = e.target.value;
  makePageForEpisodes(term);
});
