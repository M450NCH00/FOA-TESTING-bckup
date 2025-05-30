import pool from "../config/db.js";

export const addOGService = async(name, score) => {
    const result = await pool.query(
        "INSERT INTO og (name, score) VALUES ($1, $2) RETURNING *",
        [name, score]
    );
    return result.rows;
};

export const getOGService = async(id) => {
    const result = await pool.query(
        "SELECT name, score FROM og WHERE id = $1",
        [id]
    );
    return result.rows[0];
};