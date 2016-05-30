console.time('test');
for(var k = 0; k<10000; ++k) {
    function facebookGroup() {
        var facebookGroup = document.getElementsByClassName('_gli');
        var jsonArray = [];
        for(var i = 0; i < facebookGroup.length; ++i) {
            var t = new Object();
            var str = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
            t.members = '';
            for(var j = 0; j < str.length; ++j) {
                if(str[j] != ',') {
                    t.members += str[j];
                }
            }
            t.members = parseInt(t.members);
            jsonArray.push(t);
        }
       // console.log(jsonArray);
    }
    facebookGroup();
}
console.timeEnd('test');

console.time('test');
for(var k = 0; k<10000; ++k) {
    function facebookGroup() {
        var facebookGroup = document.getElementsByClassName('_gli');
        var jsonArray = [];
        for(var i = 0; i < facebookGroup.length; ++i) {
            var t = new Object();
            t.members = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
            t.members = t.members.replace(/,/g,"")
            t.members = parseInt(t.members);
            jsonArray.push(t);
        }
        //console.log(jsonArray);
    }
    facebookGroup();
}
console.timeEnd('test');

console.time('test');
for(var k = 0; k<10000; ++k) {
    function facebookGroup() {
        var facebookGroup = document.getElementsByClassName('_gli');
        var jsonArray = [];
        for(var i = 0; i < facebookGroup.length; ++i) {
            var t = new Object();
            t.members = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
            t.members = t.members.replace(",","")
            t.members = parseInt(t.members);
            jsonArray.push(t);
        }
       // console.log(jsonArray);
    }
    facebookGroup();
}
console.timeEnd('test');

console.time('test');
for(var k = 0; k<10000; ++k) {
    function facebookGroup() {
        var facebookGroup = document.getElementsByClassName('_gli');
        var jsonArray = [];
        for(var i = 0; i < facebookGroup.length; ++i) {
            var t = new Object();
            t.members = facebookGroup[i].querySelector('._glo div ._ajw:first-child ._52eh').textContent;
            t.members = t.members.replace(/(\w+)\,(\w+)/,"$1$2")
            t.members = parseInt(t.members);
            jsonArray.push(t);
        }
        //console.log(jsonArray);
    }
    facebookGroup();
}
console.timeEnd('test');