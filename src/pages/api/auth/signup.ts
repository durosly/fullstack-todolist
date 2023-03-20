// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserSignupResponseDataType } from '@/types/shared/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSignupResponseDataType>
) {
  if(req.method === 'POST') {
    

    res.status(200).json({ message: 'John Doe', status: true })
  } else {
    res.status(400).json({ status: false, message: "Invalid request method"})
  }
}
