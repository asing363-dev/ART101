let environmentTitle = "The Invincible universe";

let environmentElements = ["mark", "eve", "spaceship", "title"];

let mainEntity = {
    name: "The Viltrumite ship",
    type: "interstellar spaceship",
    Incomingtransmission: "Viltrumite invasion!",
    Guns: "laser cannons",
    Armamentstatus: "fully armed",
    mood: "ominous",
    isMoving: true,
    favoriteElement: environmentElements[2]
};

let maincharacter = {
    name: "Mark Grayson",
    type: "half-human, half-Viltrumite superhero",
    mood: "",
    isMoving: true,
    status: "ready for action",
    favoriteElement: environmentElements[0]
};

let supportingcharacter = {
    name: "Eve Wilkins",
    type: "human journalist/superhero",
    mood: "concerned",
    isMoving: true,
    status: "investigating the Viltrumite threat",
    favoriteElement: environmentElements[1]
};


let shipImages = [
    "images2/ship.png",
    "images2/shipglow.png",
    "images2/shipglow2.png",
];

let shipImageNumber = 0;

let shipInfo = `
    <div class="info-card">
        <h2>The Viltrumite Ship</h2>
        <p><strong>Type:</strong> interstellar spaceship</p>
        <p><strong>Transmission:</strong> Viltrumite invasion!</p>
        <p><strong>Weapons:</strong> laser cannons</p>
        <p><strong>Status:</strong> fully armed</p>
        <p><strong>Mood:</strong> ominous</p>
    </div>
`;

$("#ship").click(function () {
    $("#environment-output").html(shipInfo);

    shipImageNumber++;

    if (shipImageNumber >= shipImages.length) {
        shipImageNumber = 0;
    }

    $("#ship").attr("src", shipImages[shipImageNumber]);
});

$("#ship").click(function () {
    $("#environment-output").html(shipInfo);
});

let markInfo = `
    <div class="info-card">
        <h2>Mark Grayson</h2>
        <p><strong>Type:</strong> half-human, half-Viltrumite superhero</p>
        <p><strong>Status:</strong> ready for action</p>
    </div>
`;

$("#mark").click(function () {
    $("#environment-output").html(markInfo);
});

let eveInfo = `
    <div class="info-card">
        <h2>Eve Wilkins</h2>
        <p><strong>Type:</strong> human superhero</p>
        <p><strong>Status:</strong> investigating the Viltrumite threat</p>
    </div>
`;

$("#eve").click(function () {
    $("#environment-output").html(eveInfo);
});

let backgrounds = [
    "url('images2/dragon-ball-super-planet-vegeta-and-its-two-moons.jpeg')",
    "url('images2/nebula.png')",
    "url('images2/nebula2.png')",
    "url('images2/nebula3.png')",
    "url('images2/nebula4.png')"
];

let backgroundNumber = 0;

$("#INVINCIBLE").click(function () {
    backgroundNumber++;

    if (backgroundNumber >= backgrounds.length) {
        backgroundNumber = 0;
    }

    $("body").css("background-image", backgrounds[backgroundNumber]);
});

$("#ship").hover(
    function () {
        $("#ship").addClass("ship-glow");
    },
    function () {
        $("#ship").removeClass("ship-glow");
    }
);

$("#mark").dblclick(function () {
    $("#mark").addClass("power-up");

    setTimeout(function () {
        $("#mark").removeClass("power-up");
    }, 1000);
});

$("#eve").dblclick(function () {
    $("#eve").addClass("eve-power-up");

    setTimeout(function () {
        $("#eve").removeClass("eve-power-up");
    }, 1000);
});