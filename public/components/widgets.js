const createHero = res => {
    return `
        <div class='col s12 m2'>
            <p id='p1' class="flow-text">${res.p1}</p>
            <p id='p2' class="flow-text">${res.p2}</p>
        </div>

        <img id='hero-img' class="responsive-img col s12 m8" src="${res.pic || 'assets/p1.jpg'}" />

        <div class="col s12 m2">
            <h4 id='hero-h'>${res.h}</h4>
            <p id='p3'>${res.p3}</p>
            <a
                class="waves-effect waves-light btn-flat btn-large left" href='#'
                style="border=2px"
            >SEE MORE</a>
        </div>`
}

const createIntro = res => {
    return `
        <h2>${res.h}</h2>
        <p>${res.p}</p>`
}

const createFrameCard = res => {
    return `
        <div class="col s12 m4" id="pro-id-${res.id}">
            <div class="card">
                <div class="card-image">
                    <img src=${res.img || 'assets/p1.jpg'}>
                    <span class="card-title">${res.title.toUpperCase()}</span>
                </div>
            </div>
        </div>`
}

const createTabs = (res, res2) => {
    return `
        <div class="col s12">
            <ul class="tabs">
                <li class="tab col s4">
                    <a class="active" href="#${res[0].tabID}">${res[0].title.toUpperCase()}</a>
                </li>
                <li class="tab col s4">
                    <a href="#${res[1].tabID}">${res[1].title.toUpperCase()}</a>
                </li>
                <li class="tab col s4">
                    <a href="#${res[2].tabID}">${res[2].title.toUpperCase()}</a>
                </li>            
            </ul>
        </div>
        <div id="${res[0].tabID}" class="col s12"></div>
        <div id="${res[1].tabID}" class="col s12"></div>
        <div id="${res[2].tabID}" class="col s12"></div>
        <a class="waves-effect waves-teal btn-flat">${res2.tabs_Btn.id}</a>
        `
}

const createTabContent = res => {
    const tabDisplaying = res.map((item) => {
        return item.cards.map((card) => {
            return `
                <div class="col s12 m4" id="pro-id-${card.title}">
                    <div class="card">
                        <div class="card-image">
                            <img src=${card.img || 'assets/p1.jpg'}>
                        </div>
                        <div class="card-content">
                            <span class="card-title">${card.title}</span>
                            <p>${card.info}</p>
                        </div>
                    </div>
                </div>`
        })
    })

    res.map((item, index) => {
        $(`#${item.tabID}`).append(tabDisplaying[index])
    })    
}

const createCarouselContent = res => {
    for (let item of res) {
        $('#carousel-area').append(`
            <a class="carousel-item" href="${item.href}">
                <img src="${item.img || 'assets/p1.jpg'}">
            </a>`)
    }
}

const createSlideContent = res => {
    for (let item of res) {
        $('.slides').append(`
            <li>
                <img src="${item.img}">
            </li>`)
    }
}

const createAmenitiesContent = res => {
    for (let item of res) {
        $('#amenities-area').append(`
            <div class="col s12 m4">
                <div class="card-panel grey lighten-3 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s3">
                            <img
                                src="${item.img || 'assets/p1.jpg'}" 
                                alt="${item.title}"
                                class="circle responsive-img" />
                        </div>
                        <div class="col s9 left-align">
                            <h4>${item.title.toUpperCase()}</h4>
                            <span class="black-text">${item.info}</span>
                        </div>
                    </div>
                </div>
            </div>`)
    }
}