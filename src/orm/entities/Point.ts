import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Point{
    id!: number;
    ptype!: number;
    x!: number;
    y!: number;
    z!: number;
}