import fieldService from "../services/field.service.js";
//       _____ GET BY ID _____

const getFieldById = async (req, res) => {
    const { id } = req.params

    const { code, ...data } = await fieldService.getFieldById(id)

    res.status(code).json(data);
};

//       _____ GET ALL _____

const getFields = async (req, res) => {
    const {
        page,
        pageSize,
        skip = 0,
        limit = 10,
        filter = {},
    } = req.query;

    const { code, ...data } = await fieldService.getFields(page, pageSize, skip, limit, filter)

    res.status(code).json(data);
};


//       _____ CREATE A NEW _____ 

const createField = async (req, res) => {
    const { name } = req.body;
    const { _id } = req.user

    const { code, ...data } = await fieldService.createField(name, _id)

    res.status(code).json(data);
};


//       _____ UPDATE _____ 

const updateField = async (req, res) => {
    const reqBody = req.body
    const { _id } = req.user
    const { id } = req.params

    const { code, ...data } = await fieldService.updateField(id, reqBody, _id)

    res.status(code).json(data);
};


const fieldController = { getFields, createField, updateField, getFieldById }
export default fieldController