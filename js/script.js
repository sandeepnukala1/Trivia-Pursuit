let apiData;

const URL =
  "https://cdn.contentful.com/spaces/tgp7uzkwkoer/environments/master/entries?access_token=7Mk1mGkO7qdF4JFqDQztUdD9K1p2WlfNP6HLiQnp-Oc&content_type=triviaq";
$.ajax(URL).then((data) => {
  console.log(data);
  apiData = data;
});

$("#single-player").on("click", handleSinglePlayerLinkClick);

function handleSinglePlayerLinkClick(event) {
  event.preventDefault();
  redirectSinglePlayer();
}

function redirectSinglePlayer() {
  $.ajax({
    url: "single-player.html",
    dataType: "html",
  }).then((response) => {
    $(".single-player-content").html(response);
    console.log(apiData.items[0].fields.question);
    $(".show-question").text(apiData.items[0].fields.question);
  });
}
