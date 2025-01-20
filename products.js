const menu = [
    {
        id: 1,
        title: "Bryggkaffe",
        desc: "En klassisk och pålitlig kopp kaffe, bryggd på månadens utvalda bönor.",
        longer_desc:
            "Bryggkaffe är en av de mest populära kaffedryckerna runt om i världen. Med sin enkla tillredningsmetod och välbalanserade smak är det det perfekta valet för kaffedrickare som vill njuta av en ren kaffesmak utan krångel.",
        price: 29,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        title: "Caffè Doppio",
        desc: "En dubbel espresso för de dagar då en enkel kopp inte riktigt räcker till.",
        longer_desc:
            "Caffè Doppio är en kraftfull och koncentrerad kaffedryck som är perfekt för de dagar då du behöver en extra boost av energi. Den dubbla dosen espresso ger dig en intensiv smakupplevelse som kommer att väcka dina sinnen.",
        price: 59,
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1621884946220-6dd5e2ad51a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvcHBpb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        title: "Cappuccino",
        desc: "En balanserad blandning av espresso, ångad mjölk och krämigt skum.",
        longer_desc:
            "Cappuccino är en klassisk italiensk kaffedryck som består av lika delar espresso, ångad mjölk och mjölkskum. Den är känd för sin perfekta balans mellan styrka och sötma samt sitt krämiga skum på toppen.",
        price: 49,
        rating: 4.3,
        image: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcHVjaGlub3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        title: "Latte Macchiato",
        desc: "Ett konstnärligt lager av mjölk och espresso, med en skvätt av kärlek.",
        longer_desc:
            "Latte Macchiato är en elegant kaffedryck som består av varmt skummad mjölk som hälls över en espresso. Den mjuka smaken av mjölken balanseras perfekt av den kraftfulla smaken av espresso, vilket ger en harmonisk och njutbar upplevelse.",
        price: 49,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpYXRvfGVufDB8fDB8fHww",
    },
    {
        id: 5,
        title: "Kaffe Latte",
        desc: "En harmonisk förening av kaffe och mjölk, för en len och krämig smakupplevelse.",
        longer_desc:
            "Kaffe Latte är en mjuk och len kaffedryck som består av en perfekt balans mellan espresso och ångad mjölk. Den är känd för sin lena och krämiga konsistens samt sin milda och behagliga smak.",
        price: 59,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1604313803931-169516ec5498?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        title: "Cortado",
        desc: "En kort men kraftfull espresso med en liten mängd ångad mjölk för att mjuka upp smaken.",
        longer_desc:
            "Cortado är en spansk kaffedryck som består av en enkel espresso som är skuren med en liten mängd ångad mjölk. Den har en stark och intensiv smak som balanseras perfekt av mjölkens krämighet, vilket ger en kraftfull men ändå len smakupplevelse.",
        price: 55,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ydGFkb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 7,
        title: "Santos Special",
        desc: "Som en omfamning från din favoritfilt, fast i dryckesform.",
        longer_desc:
            "Santos Special är en exklusiv kaffedryck som är perfekt för kaffedrickare som vill unna sig något extra. Med sin rika och komplexa smakprofil är det som att få en varm kram från din favoritfilt varje gång du tar en klunk.",
        price: 69,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjY2hpYXRvfGVufDB8fDB8fHww",
    },
];

function addCoffeeSort(menu) {
    console.log(menu);

    let menuContainerRef = document.querySelector(".menu-container");

    for (let i = 0; i < menu.length; i++) {
        let articleCardRef = document.createElement("article");
        let cardFigRef = document.createElement("figure");
        let cardImgRef = document.createElement("img");
        let divCardContentRef = document.createElement("div");
        let cardTitleRef = document.createElement("h2");
        let cardDescRef = document.createElement("p");
        let cardLongerDescRef = document.createElement("p");
        let divPriceRef = document.createElement("div");
        let addBtnRef = document.createElement("button");

        cardTitleRef.textContent = menu[i].title;
        cardImgRef.src = menu[i].image;
        cardDescRef.textContent = menu[i].desc;
        cardLongerDescRef.textContent = menu[i].longer_desc;
        divPriceRef.textContent = menu[i].price + "kr";
        addBtnRef.textContent = "Add to cart";

        articleCardRef.classList.add("card");
        cardFigRef.classList.add("card-imgcontainer");
        cardImgRef.classList.add("card-img");
        divCardContentRef.classList.add("card-content");
        cardTitleRef.classList.add("card-title");
        cardDescRef.classList.add("card-desc");
        cardLongerDescRef.classList.add("card-longerdesc");
        divPriceRef.classList.add("price");
        addBtnRef.classList.add("add-btn");

        cardFigRef.appendChild(cardImgRef);
        articleCardRef.appendChild(cardFigRef);
        articleCardRef.appendChild(divCardContentRef);
        divCardContentRef.appendChild(cardTitleRef);
        divCardContentRef.appendChild(cardTitleRef);
        divCardContentRef.appendChild(cardDescRef);
        articleCardRef.appendChild(divPriceRef);
        articleCardRef.appendChild(addBtnRef);
        menuContainerRef.appendChild(articleCardRef);
    }
}

addCoffeeSort(menu);

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("mouseenter", () =>
        button.classList.toggle("add-btn-hover")
    );

    button.addEventListener("mouseleave", () =>
        button.classList.remove("add-btn-hover")
    );
});
