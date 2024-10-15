module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("company", {
        company_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_name: {
            type: DataTypes.STRING

        },
        company_address: {
            type: DataTypes.STRING

        },
        contact_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'contacts',
                key: 'id'
            },
            onDelete: 'CASCADE'
        }
    });
    return Company;
};
