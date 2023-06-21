const Furniture = require('../models/Furniture');

exports.create = async (furnitureData) => Furniture.create(furnitureData);

exports.getAll = async (query) => {

    let qs = Furniture.find();

    if(query.where){
        let [field, ownerId] = query.where.split('=');
        ownerId = ownerId.replaceAll('"', '');
        qs = qs.where('_ownerId').eq(ownerId);
    }

    const result = await qs;

    return result;
}

exports.getById = async (id) => Furniture.findById(id).lean();

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);