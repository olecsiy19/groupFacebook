function removeGroup() {
    searchGroup();
    var group = document.getElementsByClassName('_1yt');
    if(document.getElementsByClassName('phm').length == 0) {
        for(var i = 0; i < group.length; ++i) {
            group[i].innerHTML = '';
        }
        window.scrollBy(0,10);
        window.scrollBy(0,-10);
        setTimeout(removeGroup, 100);
    }
    else {
        console.log(JSON.stringify(J));
    }
}

function searchGroup() {
    var facebookGroup = document.getElementsByClassName('_gli');
    var jsonArray = [];
    for (var i = 0; i < facebookGroup.length; ++i) {
        var t = new Object();
        var data = facebookGroup[i].querySelector('div');
        t.ID = JSON.parse(data.parentNode.dataset.bt);
        t.ID = t.ID.id;
        t.nameGroup = facebookGroup[i].querySelector('._gll a').textContent;
        t.group = facebookGroup[i].querySelector('div ._pac').textContent;
        t.members = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
        t.members = t.members.replace(/,/g,"")
        t.members = parseInt(t.members);
        t.follower = facebookGroup[i].querySelector('._glj ._42ft').textContent;
        if(t.follower == 'Joined') {
            t.follower = true;
        }
        else {
            t.follower = false;
        }
        jsonArray.push(t);
    }
   if(jsonArray.length !=0) {
        for(var i = 0; i <jsonArray.length; ++i) {
            J.push(jsonArray[i]);
        }
    }
}
var J = [];
removeGroup();

