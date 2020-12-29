
//const re = new RegExp(/[\u4E00-\u9FAF\u3040-\u3096\u30A1-\u30FA\uFF66-\uFF9D\u31F0-\u31FF]/, 'g')
// regular expression to grab unified ideographs (chinese characters)
const re = new RegExp(/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/, 'g')
    const matches = document.documentElement.innerHTML.match(re)
    kanjiList = {}
    // kanjis repeat so we have to remove duplicates
    // and add frequency count for each kanji
    if(matches != null){
        matches.forEach(function(kanji){
            if(!(kanjiList.hasOwnProperty(kanji))){
                var pair = {}
                pair[kanji] = 1
                kanjiList = {...kanjiList, ...pair}
            }
            else{
                kanjiList[kanji] = kanjiList[kanji]+1
            }
            
        })
        kanjiList = Object.fromEntries(
            Object.entries(kanjiList).sort(([,a],[,b]) => b-a)
        )
        console.log(kanjiList)
        chrome.runtime.sendMessage({
            kanjiList: kanjiList
        })
    }
    