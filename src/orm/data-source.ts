import "reflect-metadata"
import { DataSource } from "typeorm"

import { Panorama } from "./entities/Panorama"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "main",
    database: "PanoramaMap",
    entities: [Panorama],
    synchronize: true
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))