import { Field } from "../models/field.model.js";


//       _____ GET ALL _____

const getFields = async () => {

    const result = await Field.find();

    return {
        code: 200,
        status: 'success',
        pagination: {
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

const fieldService = { getFields, createField, updateField }
export default fieldService