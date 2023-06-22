import jobService from "../services/job.service.js"

const getAppliedJobsByUserId = async (req, res) => {
    const { userID } = req.params
    const { code, ...data } = await jobService.getAppliedJobsByUserId(userID)

    res.status(code).json(data);

}


const jobController = { getAppliedJobsByUserId }
export default jobController