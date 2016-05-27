function facebookGroup() {
    var facebookGroup = document.getElementsByClassName('_gli');
    var jsonArray = [];
    for (var i = 0; i < facebookGroup.length; ++i) {
        var t = new Object();
        t.nameGroup = facebookGroup[i].querySelector('._gll a').textContent;
        t.group = facebookGroup[i].querySelector('div ._pac').textContent;
        var str = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
        t.members = '';
        for(var j = 0; j < str.length; ++j) {
            if(str.charAt(j) <= 9) {
                t.members += str[j];
            }
            else if(str[j] == ',') {
                t.members += '.';
            }
        }
        t.members = parseFloat(t.members);
        t.follower = facebookGroup[i].querySelector('._glj ._42ft').textContent;
        if(t.follower == 'Joined') {
            t.follower = true;
        }
        else {
            t.follower = false;
        }
        jsonArray.push(t);
    }
    console.log(jsonArray);
    return JSON.stringify(jsonArray);
}
facebookGroup();