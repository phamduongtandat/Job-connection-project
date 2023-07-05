import { Field } from "../models/field.model.js";
import { Job } from "../models/job.model.js";

//       _____ FIELDS _____ 

const searchField = async (name) => {
    const result = await Field.find({ name: { '$regex': name, '$options': 'i' } });

    if (!result) {
        return {
            code: 200,
            status: 'success',
            message: `Sorry!! No finding with keyword ${name}`
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


//       _____ JOBS _____ 

const searchJobs = async (filter, field = null, sort = ['deadlineDate', 'desc']) => {

    if (!field) {
        const result = await Job
            .find({ '$or': [{ title: { '$regex': filter } }, { position: { '$regex': filter } }] })
            .sort([sort])
        return {
            code: 200,
            status: 'success',
            pagination: {
                returnedResults: result.length,
            },
            data: result,
        }
    } else {
        const result = await Job
            .find({ '$or': [{ title: { '$regex': filter } }, { position: { '$regex': filter } }] })
            .find({ field })
            .sort([sort])
        return {
            code: 200,
            status: 'success',
            pagination: {
                returnedResults: result.length,
            },
            data: result,
        }
    }
}
const searchService = { searchField, searchJobs }
export default searchService