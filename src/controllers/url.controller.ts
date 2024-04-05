import { Request, Response } from "express"
import { URL } from "../models/url.model"
import { nanoid } from "nanoid"
import { validateURL } from "../utils/validator"


export const shortenURL = async (req: Request, res: Response) => {
  try {
    const { originalURL } = req.body
    if (!originalURL) {
      throw new Error('Please enter a URL')
    }
    if (!validateURL(originalURL)) {
      throw new Error('Please enter a VALID URL')
    }

    const tinyURL = nanoid(10)
    await URL.create({ originalURL, tinyURL })
    const url = await URL.findOne({ tinyURL })
    res.status(200).json({ tinyURL: `${process.env.DOMAIN}/${url?.tinyURL}` })
  } catch (error: any) {
    res.status(401).json({ error: error.message })
  }
}

export const redirectURL = async (req: Request, res: Response) => {
  const { tinyURL } = req.params;

  try {
    const url = await URL.findOne({ tinyURL });
    if (url) {
      url.clicks++;
      await url.save()
      res.redirect(url.originalURL);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

