import { Recruitment } from "../models/recruitment.model.js";
import mongoose from 'mongoose'

const getAppliedJobsByUserId = async (userID) => {

    const result = await Recruitment.find({ 'candidateList.user': new mongoose.Types.ObjectId(userID) });

    if (!result) {
        return {
            code: 200,
            status: 'success',
            message: `Sorry!! No job applied by ${userID}`
        }
    }

    return {
        code: 200,
        status: 'success',
        pagination: {
            returnedResults: result.length,
        },
        data: result,
    }
}


const jobService = { getAppliedJobsByUserId }

export default jobService