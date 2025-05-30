import pool from "../config/db.js";

const createOGTable = async() => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS og (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    score INT NOT NULL)`;

    try 
    {
        pool.query(queryText);
        console.log("Successfully created table!");
    } catch (error)
    {
        console.log("Error creating table: ", error);
    };
};

export default createOGTable;