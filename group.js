var GroupGraber = function() {
    window.scrollBy(0,10);
    var informationAboutGroups = [];

    function searchGroups(resolve) {
        var facebookGroups = document.getElementsByClassName('_gli');
        var endOfResults = document.getElementsByClassName('phm').length;

        pushAndRemoveGroupsOnScreen(facebookGroups);

        if(endOfResults == 0 || facebookGroups.length != 0) {
            setTimeout( function() {
                searchGroups(resolve);
            }, 100);
        } else {
            resolve(informationAboutGroups);
        }
    }

    function pushAndRemoveGroupsOnScreen(facebookGroups) {

        for (var i = 0; i < facebookGroups.length; ++i) {
            informationAboutGroups.push( getInformationAboutGroup(facebookGroups[i]));
            facebookGroups[i].outerHTML = '';
        }
    }

    function getInformationAboutGroup(facebookGroup) {
        var informationAboutGroup = new Object();

        informationAboutGroup.ID = getId(facebookGroup);
        informationAboutGroup.nameGroup = facebookGroup.querySelector('._gll a').textContent;
        informationAboutGroup.group = facebookGroup.querySelector('div ._pac').textContent;
        informationAboutGroup.members = getMembers(facebookGroup);
        informationAboutGroup.follower = getFollower(facebookGroup);
        
        return informationAboutGroup;
    }

    function getMembers(facebookGroup) {
        var members = facebookGroup.querySelector('._glo div ._ajw:first-child ._52eh').textContent;
        members.replace(/,/g,"");

        return parseInt(members);
    }

    function getId(facebookGroup) {
        var searchIdByDataAtribute = facebookGroup.querySelector('div');
        var ID = JSON.parse(searchIdByDataAtribute.parentNode.dataset.bt);

        return ID.id;
    }

    function getFollower(facebookGroup) {
        var follower = facebookGroup.querySelector('._glj ._42ft').textContent;

        return (follower == 'Joined');
    }

    return { getGroups : function() {

        return new Promise( function(resolve, reject) {
            searchGroups(resolve);
        });
    }};
}

GroupGraber().getGroups().then( function(groupsArray) {
    console.log(groupsArray);
});