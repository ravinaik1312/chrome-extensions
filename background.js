 var id2 = chrome.contextMenus.create({"title": "Search Player for '%s'", "contexts":['selection'],
                                       "onclick": function(info, tab) {
                                           chrome.tabs.create({
                                               url: 'https://www.google.com/#q='+info.selectionText
                                           })
                                       }
                                     });