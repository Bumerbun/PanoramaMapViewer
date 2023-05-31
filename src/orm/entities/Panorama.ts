import { Entity, Column} from "typeorm"

@Entity()
export class Panorama{
    @Column()
    Point: number

    @Column()
    ImagePath!: string

    @Column()
    PointName: string | null = null

    @Column()
    Description: string | null = null;

}