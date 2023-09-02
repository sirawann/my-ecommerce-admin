import mongoose, { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    properties: { type: Object },
    category: {type:mongoose.Types.ObjectId, ref:'Category'},
}, {
    timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);
