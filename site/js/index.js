const curses = [
    {
        name: 'Unhas realistas',
        url: 'nsme odii',
        image: 'path to images'
    },
    {
        name: 'Teste name',
        url: 'teste urls',
        image: 'image url'
    }
]

function init() {
    let curseCards = document.getElementById("curse-cards")
    let materialCards = document.getElementById("material-cards")
    
    buildCards(curseCards, curses)
    buildCards(materialCards, curses)
}

function buildCards(container, data) {
    for (let item in data) {
        let curse = data[item]
        let title = document.createElement('h2')

        title.className = 'card'
        container.append(title)
    }
    //container.append()
}

init()