import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse, } from 'next';
import { ObjectId } from 'bson';

const getOnePost = async (req:NextApiRequest, res:NextApiResponse) => {
    const id = req.query.id;

    const { db } = await connectToDatabase(); 

    const posts = await db.collection('posts').find({ _id: new ObjectId(String(id))})
    .project({ _id: 1, coverImage: 1, Titulo: 1, Conteudo: 1 }).toArray();

    return res.status(200).json({ posts });
}

export default getOnePost;