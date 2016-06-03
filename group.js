function searchAndRemoveGroups() {
    var facebookGroups = document.getElementsByClassName('_gli');
    var endOfResults = document.getElementsByClassName('phm').length;
    pushGroupsOnScreen(facebookGroups);
    if(endOfResults == 0) {
        for(var i = 0; i < facebookGroups.length; ++i) {
            facebookGroups[i].outerHTML = '';
        }
        window.scrollBy(0,10);
        window.scrollBy(0,-10);
        setTimeout(searchAndRemoveGroups, 100);
    }
    else {
       console.log(JSON.stringify(informationAboutGroups));
    }
}

function pushGroupsOnScreen(facebookGroups) {
    var informationAboutGroupsOnScreen = [];
    for (var i = 0; i < facebookGroups.length; ++i) {
        informationAboutGroupsOnScreen.push(parseGroupInformationByElement(facebookGroups[i]));
    }
   if(informationAboutGroupsOnScreen.length !=0) {
        for(var i = 0; i <informationAboutGroupsOnScreen.length; ++i) {
            informationAboutGroups.push(informationAboutGroupsOnScreen[i]);
        }
    }
}

function parseGroupInformationByElement(facebookGroup) {
    var informationAboutGroup = new Object();
    var searchIdByDataAtribute = facebookGroup.querySelector('div');
    informationAboutGroup.ID = JSON.parse(searchIdByDataAtribute.parentNode.dataset.bt);
    informationAboutGroup.ID = informationAboutGroup.ID.id;
    informationAboutGroup.nameGroup = facebookGroup.querySelector('._gll a').textContent;
    informationAboutGroup.group = facebookGroup.querySelector('div ._pac').textContent;
    informationAboutGroup.members = facebookGroup.querySelector('._glo div ._ajw:first-child ._52eh').textContent;
    informationAboutGroup.members = informationAboutGroup.members.replace(/,/g,"")
    informationAboutGroup.members = parseInt(informationAboutGroup.members);
    informationAboutGroup.follower = facebookGroup.querySelector('._glj ._42ft').textContent;
    if(informationAboutGroup.follower == 'Joined') {
        informationAboutGroup.follower = true;
    }
    else {
        informationAboutGroup.follower = false;
    }
    return informationAboutGroup;
}

var informationAboutGroups = [];
searchAndRemoveGroups();