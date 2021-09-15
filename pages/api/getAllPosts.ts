import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const getPosts = async (req:NextApiRequest, res:NextApiResponse) => {
    const {db, client} = await connectToDatabase(); 

    const posts = await db.collection('posts').find({}).project({ coverImage: 1, Titulo: 1}).toArray();

    return res.status(200).json({ posts });
}

export default getPosts;