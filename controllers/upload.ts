import { Request, Response } from 'express';
import { uploadToS3 } from '../lib/aws/uploadToS3';

export const singleUpload = async(req: Request, res: Response) => {
    if(!req.file){
        return res.status(400).json({error: 'No file uploaded'});
    }
    else{
        try{
            const result = await uploadToS3(req.file);
            return res.status(200).json({result});
        }
        catch(err){
            return res.status(500).json({error: err});
        }
    }
}