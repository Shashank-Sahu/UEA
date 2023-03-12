import db from "../dbConnection.js";

const categorySchema = new db.Schema({
    categoryType: {
        type: String,
        required: true
    },
    subCategorTypes: [{
        subCategorType: String,
        subCategories: [String]
    }]
});

const Category = new db.model("Category", categorySchema);

export default Category;
