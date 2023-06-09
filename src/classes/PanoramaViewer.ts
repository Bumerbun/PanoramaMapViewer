import {
    WebGLRenderer, 
    Scene, 
    PerspectiveCamera, 
    TextureLoader, 
    Color
} from "three";
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { SphereImage } from "./SphereImage";
import { Connector } from "../databaseEntities/Connector";

export class PanoramaViewer {
    private _width: number = 0;
    public get width() : number {
        return this._width
    };
    private _height: number = 0;
    public get height() : number {
        return this._height
    }
    private window: Window;
    private readonly renderer: WebGLRenderer = new WebGLRenderer();
    private readonly scene: Scene = new Scene();
    private readonly camera: PerspectiveCamera = new PerspectiveCamera();
    private readonly controls: OrbitControls = new OrbitControls(this.camera, this.element);
    private readonly loader: TextureLoader = new TextureLoader();

    private readonly sphere: SphereImage = new SphereImage();

    private panoramaPoint: any;

    public get element() : HTMLCanvasElement {
        return this.renderer.domElement;
    }

    constructor(width: number, height: number, window: Window){
        this.setSize(width, height);
        this.window = window;
        this.renderer.setClearColor(new Color(0x500000));

        this.camera.fov = 20;
        this.camera.position.z = -20;
        this.controls.minDistance = 0.1;
		this.controls.maxDistance = 13;
        this.controls.zoomSpeed = 2
		this.controls.rotateSpeed = 0.5;

        this.scene.add(this.camera);

        this.scene.add(this.sphere.mesh)

        this.animate()
    }

    public setSize(width: number, height: number){
        this._width = width;
        this._height = height;

        this.renderer.setSize(width, height)
        this.camera.aspect = width / height
    }

    public setImage(imagePath : string){
        var texture = this.loader.load(`http://localhost:3000/assets/${imagePath}` ,() => this.render())
        this.sphere.texture = texture
        this.render();
    }

    public async setPoint(pointID: number | string){
        var response = await fetch(`http://localhost:3000/table/panoramas/selectRows?columnname=point&value=${pointID}`)
        var response1 = await fetch(`http://localhost:3000/table/points/selectRows?columnname=id&value=${pointID}`)
        if (!response.ok && !response1.ok){
            return
        }
        var pointData = {
            ...((await response.json())[0]),
            ...((await response1.json())[0])
        }
        this.panoramaPoint = pointData
        console.log(this.panoramaPoint)
        console.log(1)
        var connector = new Connector()
        console.log(connector)
        console.log(connector.Points)
        this.setImage(pointData.imagepath)
        

    }

    private render(): void{
        this.renderer.render(this.scene, this.camera)
    }

    private animate(): void{
        this.window.requestAnimationFrame(() => this.animate());
        this.camera.updateProjectionMatrix();
        this.controls.update();
        this.render();
    }
}