document.addEventListener('DOMContentLoaded', function(){
    const bg = chrome.extension.getBackgroundPage()
    const kanjiTable = document.createElement('div')
    kanjiTable.style.width = "100%";
    Object.keys(bg.kanjiList).forEach(function (kanji){
        const div = document.createElement('div')
        div.textContent = `${kanji}: ${bg.kanjiList[kanji]}`
        div.style.border = "thick solid #0000FF";
        div.style.height = "50px"
        div.style.fontSize = "30px"
        div.style.textAlign = "center"
        kanjiTable.appendChild(div)
    })
    // kanji table needs to appear on the popup
    document.body.appendChild(kanjiTable)
}, false)