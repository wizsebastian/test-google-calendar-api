import {
    DataTypes,
    Sequelize
} from "sequelize";

import db from "../config/db.js";

const Users = db.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN
})



export default Users;