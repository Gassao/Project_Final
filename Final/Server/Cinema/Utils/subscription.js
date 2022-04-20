const subDAL=require( '../DAL/DALSubcription')



const getAllSubs = async () => {
    const subs = (await subDAL.GetALSub()).data;
    return subs;
}

const getSubById = async (id) => {
    const sub = (await subDAL.GetByIdSub(id)).data;
    return sub;
}

const addSub = async (newSub) => {
    await subDAL.Addsub(newSub );
}

const updateSub = async (id, sub) => {
    await subDAL.updateSUB(id, sub)
}

const deleteSub = async (id) => {
    await subDAL.deleteSub(id);
}


module.exports = { getAllSubs, getSubById,addSub,updateSub,deleteSub
}