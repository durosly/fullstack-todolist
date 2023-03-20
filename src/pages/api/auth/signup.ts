// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserBase } from '@/lib/connection'
import { UserSignupResponseDataType } from '@/types/shared/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSignupResponseDataType>
) {
  if(req.method === 'POST') {
    
    const { email, username, password } = req.body

    await UserBase.create(
      {
        "Email": email,
        "Username": username,
        "Password": password
      }
    )
    res.status(200).json({ message: 'John Doe', status: true })
  } else {
    res.status(400).json({ status: false, message: "Invalid request method"})
  }
}
