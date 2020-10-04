import { NextApiRequest, NextApiResponse } from 'next'
import Generate from '../../../components/Generate'

function generate (length: any) {
  return Generate(parseInt(length))
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { length } = _req.query;

    res.status(200).json(generate(length))
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
