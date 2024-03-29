import * as express from "express"
import * as bodyParser from "body-parser"
import {Routes} from "./routes/crmRoutes";
import * as mongoose from "mongoose"
class App {
    public mongoUrl: string = 'mongodb://localhost/CRMdb'
    public app: express.Application
    public routePrv: Routes = new Routes()

    constructor(){
        this.app = express()
        this.config()
        this.mongoSetup()
        this.routePrv.routes(this.app)
    }

    private mongoSetup():void{
        mongoose.Promise = global.Promise
        mongoose.connect(this.mongoUrl)
    }
    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json())
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}))
    }
}

export default new App().app