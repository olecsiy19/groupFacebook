
    var str = "fgdfgsdg,dgrefeerf";
    var t;

    console.time('test');
    for(var k = 0; k<10000; ++k) {
        t = '';
        for(var j = 0; j < str.length; ++j) {
            if(str[j] != ',') {
                t += str[j];
            }
        }
    }
    console.timeEnd('test');

    console.time('test');
    for(var k = 0; k<10000; ++k) {
        t = str.replace(/,/g,"")
    }
    console.timeEnd('test');

    console.time('test');
    for(var k = 0; k<10000; ++k) {
        t.members = str.replace(",","")
    }
    console.timeEnd('test');

    console.time('test');
    for(var k = 0; k<10000; ++k) {
        t.members = str.replace(/(\w+)\,(\w+)/,"$1$2")
    }
    console.timeEnd('test');