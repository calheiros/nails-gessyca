const curses = [
    {
        name: 'Postiça realista 2.0',
        url: 'https://go.hotmart.com/Q80089834O?dp=1',
        image: 'https://static-media.hotmart.com/cLengJPDbKyAO_caHeKsREdbnf8=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/6b51a57d-6b27-46bd-88c8-6eb00d07f1f5/Capa.jpg?w=920'
    },
    {
        name: 'Excelência em Unhas',
        url: 'https://go.hotmart.com/R80141857U?dp=1',
        image: 'https://static-media.hotmart.com/LiHw61CY-_BpEcgnQe83sxHRscI=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/450acb2e-50ed-4508-8c3a-c0adc1b45a87/001.jpg?w=920'
    }
]

const materials = [
    {
        name: 'Top coat',
        url: ' ',
        image: 'https://m.media-amazon.com/images/I/41pyDhu9T7L._AC_SL1000_.jpg'
    },
    {
        name: 'Boneca Annabelle',
        url: 'teste urls',
        image: 'https://s2.glbimg.com/hmPuJN2Z2Vnpd7cG0EVOw9aAKJ4=/e.glbimg.com/og/ed/f/original/2020/08/14/annabelle-doll-boneca-filme.jpg'
    },
    {
        name: 'Vassoura de Bruxa real',
        url: ' ',
        image: 'https://img.elo7.com.br/product/main/1504922/vassoura-de-bruxa-bruxa.jpg'
    },
    {
        name: 'Oleo de Peroba',
        url: ' ',
        image: 'https://images.tcdn.com.br/img/img_prod/791033/oleo_de_peroba_king_tradicional_100ml_4813_1_c2f1686a6627345f267da3465cfb34df.jpg'
    }
]

function init() {
    let curseCards = document.getElementById("curse-cards")
    let materialCards = document.getElementById("material-cards")
    
    buildCards(curseCards, curses)
    buildCards(materialCards, null)
}

function buildCards(container, data) {
    if (!data) {
        container.className = 'coming-soon-parent'
        container.innerHTML = "<h2 class='coming-soon'>Em breve...</h2>"
        return
    }

    for (let i in data) {
        let item = data[i]
        let card = document.createElement('div')
        let title = document.createElement('h4')
        let image = document.createElement('img')
        let descriptionDiv = document.createElement("div")

        card.className = 'card'
        card.onclick = function() {
            window.location.assign(item.url)
        }
        image.src = item.image
        image.className = 'card-image'
       
        title.innerHTML = item.name
        title.className = 'card-title'

        descriptionDiv.className = "card-description-parent"
        descriptionDiv.append(title)
        card.append(image)
        card.append(descriptionDiv)
        container.append(card)
    }
}

init()