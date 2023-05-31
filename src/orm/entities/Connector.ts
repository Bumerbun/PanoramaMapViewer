// import { Point } from "./Point";

// export class Connector{
//     private _points!: Point[]

//     public get Points(): Point[]{
//         if (this._points === undefined){
//             this.fillProperty(arguments.callee.name, "Point")
//             this.setPoints()
//         }
//         return this._points
//     }
//     public set Points(value: Point[]){
//         this._points = value
//     }
//     private async setPoints(){

//         console.log("Set points")
//         var points = new Array<Point>();
//         var response =  await fetch(`http://localhost:3000/table/points`).then(x => x.json())

//         for (let pointResponseId in response){
//             var pointData = response[pointResponseId];
//             var point = new Point();
//             point.id = pointData.id
//             point.ptype = pointData.ptype
//             point.x = pointData.x
//             point.y = pointData.y
//             point.z = pointData.z
//             points.push(point)
//         }

//         this._points = points
//         console.log(this._points.toString())
//     }

//     // private fillProperty(propertyName: string, entityName: string){
//     //     Object.
//     // }
// }