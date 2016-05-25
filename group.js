    var nameGroup = [];
    var elements = document.querySelectorAll('._gll a');
    for (var i = 0; i < elements.length; i++) {
    nameGroup.push(elements[i].innerHTML);
    }
    var group = [];
    elements = document.querySelectorAll('div ._pac');
    for (var i = 0; i < elements.length; i++) {
        group.push(elements[i].innerHTML);
    }
    var members = [];
    elements = document.querySelectorAll('._glo div ._ajw ._52eh');
    for (var i = 0; i < elements.length; i++) {
        members.push(elements[i].innerHTML);
    }
    var partner = [];
    elements = document.querySelectorAll('._ohf ._42ft');
    for (var i = 0; i < elements.length; i++) {
        partner.push(elements[i].innerHTML);
    }
     var jsonArray = [];
    for(var i= 0; i < nameGroup.length; ++i){
        var t = new Object();
        t.nameGroup = nameGroup[i];
        t.group = group[i]
        t.members = members[i]
        if(partner[i] == 'Joined'){
            t.partner = '+'
        }
        else{
            t.partner = '-'
        }
        jsonArray.push(t);
    }
    JSON.stringify(jsonArray); 