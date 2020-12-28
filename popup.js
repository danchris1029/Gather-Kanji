document.addEventListener('DOMContentLoaded', function(){
    const bg = chrome.extension.getBackgroundPage()
    //Object.keys(bg.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${bg.matches}`
    document.body.appendChild(div)
}, false)