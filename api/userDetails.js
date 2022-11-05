import express from "express"
import MentorShalaDAO from './dao/MentorShalaDAO.js'
import fetchDetailsCtrl from './controller/fetchDetailsCtrl.js'
const router=express.Router()

const getMentorShalaUsers=async()=>{
    const list=await MentorShalaDAO.getUser()
    console.log(list);
    return list
}

router.route("/getUsers").get(async(req,res)=>{
    const data=await fetchDetailsCtrl.getapiUsers()
    console.log(data);
    res.send(data)
})
export default router