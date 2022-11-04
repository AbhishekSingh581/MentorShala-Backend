import express from "express"
import MentorShalaDAO from './dao/MentorShalaDAO.js'
const router=express.Router()

const getMentorShalaUsers=async()=>{
    const list=await MentorShalaDAO.getUser()
    console.log(list);
}

router.route("/").get((req,res)=>{getMentorShalaUsers()})
export default router