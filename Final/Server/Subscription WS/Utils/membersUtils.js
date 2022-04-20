
const membersDAL = require('../DAL/memberFromDB');
const membrsAPI = require('../DAL/MemberAPI_DAL');



//--> All functions called by Server  when it Activing and fetch API  and put them in to BD
const getAllMembers = async () => {
    const members = await membersDAL.getAllMembers();
    return members;
}

const getMemberbyId = async (id) => {
    const member = await membersDAL.getMemberByid(id);
    return member;
}

const addMember = async (obj) => {
    await membersDAL.addMember(obj);
}

const updateMember = async (id, obj) => {
    await membersDAL.updateMember(id, obj);
}

const deleteMember = async (id) => {
    await membersDAL.deleteIdMember(id);
}

// check it if the flag is true , if the flag true then put itemes from data base else put null
const loadMembers = async () =>
{
    const members =  (await membrsAPI.GetMembers()).data;
 
    const membersFromDB = await membersDAL.getAllMembers();

    membersFromDB == '' ? members.forEach(member => {
        const newMember = {
            name: member.name,
            email: member.email,
            city: member.address.city
        }
        membersDAL.addMember(newMember)
    }) : null;
 

}

module.exports = { loadMembers, getAllMembers, deleteMember, updateMember, getMemberbyId, addMember }

