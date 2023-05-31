class Connector{
    private _points!: Point[]
    public get Points(): Point[]{
        if (this._points != null)
            return this._points
        this.setPoints();
        return this._points;
    }
    private async setPoints(){
        var points = new Array<Point>();
        var response =  await fetch(`http://localhost:3000/table/panoramas/selectRows?columnname=point`).then(x => x.json())

        for (let pointResponseId in response){
            var pointData = response[pointResponseId];
            var point = new Point();

            point.id = pointData.id
            point.ptype = pointData.ptype
            point.x = pointData.x
            point.y = pointData.y
            point.z = pointData.z
            points.push(point)
        }
        this._points = points
    }
}