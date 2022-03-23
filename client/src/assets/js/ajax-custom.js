var substringMatcher = function (strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
    matches = [];
    substrRegex = new RegExp(q, "i");
    $.each(strs, function (i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });
    cb(matches);
  };
};

var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: [{
      name: "Tomato",
      image: "assets/images/vegetable/fresh/1.jpg",
      price: "$48.25",
    },
    {
      name: "Onion",
      image: "assets/images/vegetable/fresh/2.jpg",
      price: "$35.67",
    },
    {
      name: "Potato",
      image: "assets/images/vegetable/fresh/3.jpg",
      price: "$48.25",
    },
    {
      name: "Turnip",
      image: "assets/images/vegetable/fresh/4.jpg",
      price: "$35.67",
    },
    {
      name: "White Goose Foot",
      image: "assets/images/vegetable/fresh/5.jpg",
      price: "$35.67",
    },
    {
      name: "Turmeric",
      image: "assets/images/vegetable/fresh/6.jpg",
      price: "$48.25",
    },
    {
      name: "Garlic",
      image: "assets/images/vegetable/fresh/1.jpg",
      price: "$35.67",
    },
    {
      name: "Spring Onion",
      image: "assets/images/vegetable/fresh/2.jpg",
      price: "$48.25",
    },
    {
      name: "Spinach",
      image: "assets/images/vegetable/fresh/3.jpg",
      price: "$35.67",
    },
    {
      name: "Pumpkin",
      image: "assets/images/vegetable/fresh/4.jpg",
      price: "$48.25",
    },
  ],
});

states.initialize();

$(".the-basics .typeahead").typeahead({
  hint: true,
  highlight: true,
  minLength: 1,
}, {
  name: "states",
  display: "name",
  source: states.ttAdapter(),
  templates: {
    empty: [
      '<div class="empty-message">',
      "No Record Found !",
      "</div>",
    ].join("\n"),
    suggestion: function (data) {
      return (
        '<a href="product-page.html" class="man-section"><div class="image-section"><img src=' +
        data.image +
        '></div><div class="description-section"><h4>' +
        data.name +
        "</h4><span>" +
        data.price +
        "</span></div></a>"
      );
    },
  },
});