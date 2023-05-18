import { Request, Response } from "express";
import Pool from "pg";

const pool = new Pool.Pool({
  user: 'main',
  host: 'localhost',
  database: 'PanoramaMap',
  port: 5432,
})

export const getTable = (request: Request, response: Response) => {
    var tableName = request.params.name;
    pool.query(`SELECT * FROM ${tableName}`, (error, results) => {
        if (error) {
          console.log(error)
          return
        }
        response.status
        response.status(200).json(results.rows)
      })
    
}

