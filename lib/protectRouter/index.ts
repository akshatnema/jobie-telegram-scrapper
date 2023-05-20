import { Request, Response, NextFunction } from 'express'
import { IncomingHttpHeaders } from 'http'
import Logger from '../../lib/winston'

const protectRouter = async (req: Request, res: Response, next: NextFunction) => {
    const headers: IncomingHttpHeaders = req.headers
    const query = req.query
    if(process.env.ROUTE_SECRET!=undefined && (headers['route-secret'] === process.env.ROUTE_SECRET || query['routeSecret'] === process.env.ROUTE_SECRET)){
        next()
    }else{
        Logger.warn('User not verified')
        res.status(401).send('You are not an authenticated user.')
    }
}

export default protectRouter