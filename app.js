const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
angular.module('movieApp', [])
    .controller('searchController', function($scope) {
        $scope.showSearch = true;
        $scope.showSearchResults = false;
        $scope.movies = [
            { title: 'Her', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.',image: 'img/1.jpg' },
        { title: 'Star Wars', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.' ,image: 'img/2.jpg' },
        { title: 'Storm', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.'  ,image: 'img/3.jpg'},
        { title: '1917', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.' ,image: 'img/4.jpg' },
        { title: 'Avengers', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium.'  ,image: 'img/5.jpg'},
        ];

        $scope.search = function() {
            
            $scope.filteredMovies = $scope.movies.filter(function(movie) {
                return movie.title.toLowerCase().includes($scope.searchQuery.toLowerCase());
            });
            $scope.showSearch = false;
            $scope.showSearchResults = true;
            $scope.showSearchResults = $scope.filteredMovies.length > 0;
        };
    });