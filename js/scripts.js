
var karate = {
    name: "Martial Arts",
    description:"4-week Tae Kwon Do Course",
    price: "$199.00",
    URL: "/images/karate-01.jpg"
}

var art = {
    name: "Painting",
    description:"4-week Painting Course",
    price: "$199",
    URL: "/images/art-01.jpg"
}

var canoeing = {
    name: "Canoeing",
    description:"Canoeing Weekend Adventure",
    price: "$199",
    URL: "/images/canoe-01.jpg"
}

var dance = {
    name: "Dance",
    description:"4-week Pop Music Dance Class",
    price: "$199",
    URL: "/images/dance-01.jpg"
}

var kickball = {
    name: "Kickball",
    description:"8-week Kickball League",
    price: "$199",
    URL: "/images/kickball-01.jpg"
}

var woodworking = {
    name: "Woodworking",
    description:"6-week Woodworking Course",
    price: "$199",
    URL: "/images/wood-01.jpeg"
}

var ropes = {
    name: "Ropes Course",
    description:"1-day Ropes Course Adventure",
    price: "$49",
    URL: "/images/ropes-01.jpg"
}

var stem = {
    name: "S.T.E.M.",
    description:"4-week Science, Technology, and Math Course",
    price: "$99",
    URL: "/images/stem-01.jpg"
}

var products = [karate, woodworking, art, dance, kickball, canoeing, stem, ropes]

var desc;

for ( var i = 0; i < 8; i += 1 ) {
    desc += `<div id="cards"><img class="card_img" src="${products[i].URL}"><br><p>${products[i].name}<br>${products[i].description}<br>${products[i].price}</p></div>`;
}


document.getElementById("container").innerHTML = desc; 
