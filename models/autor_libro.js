const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autor_libro', {
    idautor_libro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    autor_idautor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'autor',
        key: 'idautor'
      }
    },
    libro_idlibro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'libro',
        key: 'idlibro'
      }
    }
  }, {
    sequelize,
    tableName: 'autor_libro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idautor_libro" },
        ]
      },
      {
        name: "fk_autor_libro_libro1_idx",
        using: "BTREE",
        fields: [
          { name: "libro_idlibro" },
        ]
      },
      {
        name: "fk_autor_libro_autor1_idx",
        using: "BTREE",
        fields: [
          { name: "autor_idautor" },
        ]
      },
    ]
  });
};
