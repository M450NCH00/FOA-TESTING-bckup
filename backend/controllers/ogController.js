import {
    addOGService,
    getOGService
} from "../models/ogTableService.js"

// Standardized Response Function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const addOG = async(req, res, status) => {
    const {name, score} = req.body;
    try 
    {
        const newOG = await addOGService(name, score);
        handleResponse(res, 201, "New OG added!", newOG);
    } catch(err)
    {
        next(err);
    }
};

export const getOG = async(req, res, status) => {
    try 
    {
        const OG = await getOGService(req.params.id);
        if (!OG) return handleResponse(res, 404, "Not Found!");
        handleResponse(res, 200, "OG details fetched successfully!", OG);
    } catch(err)
    {
        next(err);
    }
};