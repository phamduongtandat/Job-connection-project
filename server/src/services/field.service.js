import { Field } from "../models/field.model.js";

//       _____ GET BY ID _____

const getFieldById = async (id) => {
    const result = await Field.findById(id);

    if (!result) {
        return {
            code: 404,
            status: 'fail',
            message: 'Can not find field with provided id'
        }
    }

    return {
        code: 200,
        status: 'success',
        data: result,
    }
}

//       _____ GET ALL _____

const getFields = async (page, pageSize, skip = 0, limit = 10, filter = {}) => {
    const matchingResults = await Field.countDocuments(filter);
    const totalPages = Math.ceil(matchingResults / limit);


    const result = await Field.find(filter)
        .skip(skip)
        .limit(limit);
    return {
        code: 200,
        status: 'success',
        pagination: {
            matchingResults,
            totalPages,
            currentPage: page,
            pageSize: limit,
            returnedResults: result.length,
        },
        data: result,
    }
}


//       _____ CREATE A NEW _____

const createField = async (name, _id) => {
    const result = await Field.create({
        name,
        creator: _id
    });

    return {
        code: 201,
        status: 'success',
        message: 'A new field has been created',
        data: result,
    }
}


//       _____ UPDATE _____ 

const updateField = async (_id, reqBody, email) => {
    const result = await Field.findByIdAndUpdate(_id, { ...reqBody, creator: email }, {
        new: true,
    });

    if (!result) {
        return {
            code: 400,
            status: 'fail',
            message: 'Can not find field with provided id'
        }
    }

    return {
        code: 200,
        status: 'success',
        data: result,
    }
}

const fieldService = { getFields, createField, updateField, getFieldById }
export default fieldService