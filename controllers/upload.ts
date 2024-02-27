import { Request, Response } from 'express';
import { uploadToS3 } from '../lib/aws/uploadToS3';

export const singleUpload = async(req: Request, res: Response) => {

    const { key, acl } = req.body;
    console.log(req.file);
    console.log(req.body);

    if(!req.file || !key || !acl){
        return res.status(400).json({error: 'Read the docs you moron!'});
    }
    else{
        try{
            const result = await uploadToS3(req.file, acl, key);
            return res.status(200).json({result});
        }
        catch(err){
            return res.status(500).json({error: err});
        }
    }
}