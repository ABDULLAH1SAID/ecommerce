import joi from "joi"
import { isValidObjectId } from "../../middlwares/validation.middlware.js"

export const createSubcategory = joi.object({
    name: joi.string().min(5).max(20),
    category: joi.string().custom(isValidObjectId).required(),
}).required()

export const updateSubcategory = joi.object({
    name: joi.string().min(5).max(20),
    id: joi.string().custom(isValidObjectId).required(),
    category: joi.string().custom(isValidObjectId).required()
}).required()

export const deleteSubcategory = joi.object({
    id: joi.string().custom(isValidObjectId).required(),
    category: joi.string().custom(isValidObjectId).required()
}).required()

export const getAllSubcategories = joi.object({
    category:joi.string().custom(isValidObjectId)
}).required()