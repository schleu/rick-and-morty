// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const baseUrl = "https://rickandmortyapi.com/api/character"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch(baseUrl).then(resp => console.log('Rick and Mory',resp))
  res.status(200).json({ name: 'John Doe' })
}
