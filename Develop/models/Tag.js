const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    module,exports : (sequelize, DataTypes) => {
      const Tag = sequelize.define('Tag', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        tag_name: {
          type: DataTypes.STRING,
          allowNull: false, 
          unique: true, // Tag names should be unique
          validate: {
            notEmpty: true, // Doesn't allow an empty string
          },
        },
      });

      return Tag;
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
