chrome.runtime.onMessage.addListener(function(request,sender,sendRequest){
    window.count = request.count
    window.kanjiList = request.kanjiList
})

chrome.browserAction.onClicked.addListener(function (tab){
    chrome.tabs.create({url: 'popup.html'})
})