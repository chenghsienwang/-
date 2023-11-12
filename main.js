let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

// 抓取HTML元素的變數專區
const ticketCardArea = document.querySelector(".ticketCard-area");
const searchResultText = document.getElementById("searchResult-text");
const regionSearch = document.querySelector(".regionSearch");
const addTicketBtn = document.querySelector(".addTicket-btn");
const ticketName = document.getElementById("ticketName");
const ticketImgUrl = document.getElementById("ticketImgUrl");
const ticketRegion = document.getElementById("ticketRegion");
const ticketPrice = document.getElementById("ticketPrice");
const ticketNum = document.getElementById("ticketNum");
const ticketRate = document.getElementById("ticketRate");
const ticketDescription = document.getElementById("ticketDescription");

//初始化function
function init() {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `<li class="ticketCard">
        <div class="ticketCard-img">
            <a href="#">
                <img src="${data[i].imgUrl}"
                    alt="">
            </a>
            <div class="ticketCard-region">${data[i].area}</div>
            <div class="ticketCard-rank">${data[i].rate}</div>
        </div>
        <div class="ticketCard-content">
            <div>
                <h3>
                    <a href="#" class="ticketCard-name">${data[i].name}</a>
                </h3>
                <p class="ticketCard-description">
                ${data[i].description}
                </p>
            </div>
            <div class="ticketCard-info">
                <p class="ticketCard-num">
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${data[i].group} </span> 組
                </p>
                <p class="ticketCard-price">
                    TWD <span id="ticketCard-price">$${data[i].price}</span>
                </p>
            </div>
        </div>
    </li>`
    }
    ticketCardArea.innerHTML = str
    searchResultText.innerHTML = `本次搜尋共 ${data.length} 筆資料`
}
//篩選function
function filter(area) {
    //搜尋全部地區就直接初始化。
    if(area == "" || area == "地區搜尋"){
        init();
    }
    else{
        let str = "";
        let temp = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].area == area) {
                temp++;
                str += `<li class="ticketCard">
        <div class="ticketCard-img">
            <a href="#">
                <img src="${data[i].imgUrl}"
                    alt="">
            </a>
            <div class="ticketCard-region">${data[i].area}</div>
            <div class="ticketCard-rank">${data[i].rate}</div>
        </div>
        <div class="ticketCard-content">
            <div>
                <h3>
                    <a href="#" class="ticketCard-name">${data[i].name}</a>
                </h3>
                <p class="ticketCard-description">
                ${data[i].description}
                </p>
            </div>
            <div class="ticketCard-info">
                <p class="ticketCard-num">
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${data[i].group} </span> 組
                </p>
                <p class="ticketCard-price">
                    TWD <span id="ticketCard-price">$${data[i].price}</span>
                </p>
            </div>
        </div>
    </li>`
            }
        }
        ticketCardArea.innerHTML = str
        searchResultText.innerHTML = `本次搜尋共 ${temp} 筆資料`
    }
}
//新增景點function
function addNewSpot() {
    data.push({
        "name": ticketName.value,
        "imgUrl": ticketImgUrl.value,
        "area": ticketRegion.value,
        "description": ticketDescription.value,
        "group": ticketNum.value,
        "price": ticketPrice.value,
        "rate": ticketRate.value
    })
    init();
}


init();
regionSearch.addEventListener("change", function(event){
    filter(regionSearch.value)
});
addTicketBtn.addEventListener("click", function(event){
    addNewSpot()
});