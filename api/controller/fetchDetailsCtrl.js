import MentorShalaDAO from '../dao/MentorShalaDAO.js'

export default class usersDetailsCtrl{
    static async getapiUsers(){
        try{
            const userlists=await MentorShalaDAO.getUser()
            // console.log(userlists);
            return userlists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
}