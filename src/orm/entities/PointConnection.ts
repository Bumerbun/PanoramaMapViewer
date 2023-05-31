import { Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class PointConnection{
    @PrimaryGeneratedColumn()
    Point1!: number;

    @PrimaryGeneratedColumn()
    Point2!: number;
}