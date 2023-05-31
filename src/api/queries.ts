import { Request, Response } from "express";
import Pool from "pg";

const pool = new Pool.Pool({
  user: 'main',
  host: 'localhost',
  database: 'PanoramaMap',
  port: 5432,
})


// /table/:name
export const getTable = (request: Request, response: Response) => {
  var tableName = request.params.name;
  pool.query(`SELECT * FROM ${tableName}`, (error, results) => {
      if (error) {
        console.log(error)
        response.status(400).send({error: "Table not found or not available"})
        return
      }
      response.status(200).json(results.rows)
    })    
}
// /table/:name/selectRows?columnname=,value=
export const selectRows = (request: Request, response: Response) => {
  var tableName = request.params.name;
  var query = request.query
  pool.query(`SELECT * FROM ${tableName} WHERE ${query.columnname} = ${query.value}`, (error, results) => {
    if (error){
      console.log(error)
      response.status(400).send({error: "Requested values was not found"})
      return
    }
    response.status(200).json(results.rows)
  })
}

