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
    //<a class="active" href="#${res[0].tabID}">${res[0].title.toUpperCase()}</a>
    return `
        <div class="col s12">
            <ul class="tabs">
                <li class="tab col s4">
                    <a ${res[0].active && `class="active"`} href="#${res[0].tabID}">${res[0].title.toUpperCase()}</a>
                </li>
                <li class="tab col s4">
                    <a ${res[1].active && `class="active"`} href="#${res[1].tabID}">${res[1].title.toUpperCase()}</a>
                </li>
                <li class="tab col s4">
                    <a ${res[2].active && `class="active"`} href="#${res[2].tabID}">${res[2].title.toUpperCase()}</a>
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
    //console.log(res)
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

const createSlideContent = res => {
    //console.log('---> slide ssss')
    //console.log(res)
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

//booking 

const createBookingModal = (res) => {
    $('#bookModal').append(`
        <div class="modal-content">
        <h4>${res.header}</h4>
        <div class='row'>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name">${res.input_box.first_name}</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">${res.input_box.last_name}</label>
                </div>
            </div>      
            <div class="row">
                <div class="input-field col s6">
                    <input id="phone" type="tel" class="validate">
                    <label for="phone">${res.input_box.phone}</label>
                </div>
                <div class="input-field col s6">
                    <input id="email" type="email" class="validate">
                    <label for="email">${res.input_box.email}</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 m6">
                    <select id="room_options" class="icons">
                        <option value="" disabled selected>${res.input_box.choose}:</option>
                        </select>
                    <label>Images in select</label>
                </div>
            </div>
        </form>
        </div>
    </div>
    <div class="modal-footer">
        <a id="book_cancel" href="#!" class="modal-close waves-effect red waves-red btn">
            ${res.btns.cancel}
        </a>
        <a id="book_ok" href="#!" class="modal-close waves-effect waves-green btn">
            ${res.btns.ok}
        </a>
    </div>`)
    
    for (let i of res.options) {
        $('#room_options').append(`
            <option value="${i.id}" data-icon="${i.img_url}">${i.option_id}</option>`)
    }

    const clearInput = () => {
        $('#first_name').val('')
        $('#last_name').val('')
        $('#phone').val('')
        $('#email').val('')
        $('#room_options').val('')
        //$('#room_options').prop('selectedIndex', 0)
    }

    $('#book_cancel').click(() => {
        clearInput()
    })
    
    $('#book_ok').click(() => {
        const data = {
            firstName: $('#first_name').val(),
            lastName: $('#last_name').val(),
            email: $('#email').val(),
            option: $('#room_options option:selected').val()
            //option: $('#room_options').formSelect('getSelectedValues')
        }

        const setting = {
            "url": "/bookReq",
            "type": "POST",
            "timeout": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(data)
        }

        $.ajax(setting).done((res) => {console.log(res)})
        //$.post('/bookReq', JSON.stringify(data))
        clearInput()
    })
}