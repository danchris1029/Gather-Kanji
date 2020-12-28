chrome.runtime.onMessage.addListener(function(request,sender,sendRequest){
    window.count = request.count
    window.matches = request.matches
})

chrome.browserAction.onClicked.addListener(function (tab){
    chrome.tabs.create({url: 'popup.html'})
})