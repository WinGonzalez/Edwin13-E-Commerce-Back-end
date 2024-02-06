const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    module, exports: (sequelize, DataTypes) => {
      const ProductTag = sequelize.define('ProductTag', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false, // the product-tag association must always have a product
          references: {
            model: 'Products', // Sequelize will handle the naming convention
            key: 'id',
          },
        },
        tag_id: {
          type: DataTypes.INTEGER,
          allowNull: false, // Assuming a product-tag association must always have a tag
          references: {
            model: 'Tags', // Assuming the model name is 'Tags', and Sequelize handles the naming convention
            key: 'id',
          },
        },
      }, {
        // will add additional options
      });

      // will define relationships 
      ProductTag.belongsTo(sequelize.models.Product, { foreignKey: 'product_id' });
      ProductTag.belongsTo(sequelize.models.Tag, { foreignKey: 'tag_id' });

      return ProductTag;
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
