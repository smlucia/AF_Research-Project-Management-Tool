const members = [];

function memberJoin(id, username, group) {
    const member = { id, username, group };


    members.push(member);

    return member;
}

function getCurrentmember(id) {
    return members.find(member => member.id === id);
}

function memberLeave(id) {
    const i = members.findIndex(member => member.id === id);

    if (i !== -1) {
        return members.splice(i, 1)[0];
    }
}



module.exports = {
    memberJoin,
    getCurrentmember,
    memberLeave

}