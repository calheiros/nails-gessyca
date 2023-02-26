const curses = [
    {
        name: 'Postiça realistas 2.0',
        url: 'https://go.hotmart.com/Q80089834O?dp=1',
        image: 'https://static-media.hotmart.com/cLengJPDbKyAO_caHeKsREdbnf8=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/6b51a57d-6b27-46bd-88c8-6eb00d07f1f5/Capa.jpg?w=920'
    },
    {
        name: 'Como ser uma Irmã melhor',
        url: ' ',
        image: 'https://img.freepik.com/fotos-gratis/retrato-de-irmao-e-irma-abracando-e-sorrindo_176420-15678.jpg?w=740&t=st=1677378555~exp=1677379155~hmac=cd1879c56fc28a4c131569f938d03f0687c5d8672c4aa40d16e7f7b43c10a31d'
    }, 
    {
        name: 'como vencer a calvicie',
        image: 'https://images7.memedroid.com/images/UPLOADED899/588e905ba5f58.jpeg'
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
    buildCards(materialCards, materials)
}

function buildCards(container, data) {
    for (let i in data) {
        let item = data[i]
        let card = document.createElement('div')
        let title = document.createElement('h4')
        let image = document.createElement('img')

        card.className = 'card'
        card.onclick = function() {
            window.location.assign(item.url)
        }

        image.src = item.image
        image.className = 'card-image'
    
        title.innerHTML = item.name
        title.className = 'card-title'
        
        card.append(image)
        card.append(title)
        container.append(card)
    }
}

init()