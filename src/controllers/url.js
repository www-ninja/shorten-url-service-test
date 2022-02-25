import createError from 'http-errors';
import shortid from 'shortid';
import { validateUrl } from '../utils';
import { Url } from '../models';

export const getURL = async (req, res, next) => {
    try {
        const url = await Url.findOne({ where: { urlId: req.params.urlId } })
        if (url) {
            url.visits++;
            url.save();
            return res.redirect(url.originUrl);
        } else res.status(404).json('Not found')
    } catch (error) {
        return next(error);
    }
}

export const createURL = async (req, res, next) => {

    const { originUrl } = req.body;
    const urlId = shortid.generate();
    const SERVER_HOST = process.env.SERVER_HOST;

    try {
        if (!originUrl || !validateUrl(originUrl)) {
            return next(createError(404, 'originUrl is not correct or missed!'));
        }

        let url = await Url.findOne({ where: { originUrl } })
        if (url) {
            return res.status(200).json(url.shortUrl);
        }
        else {
            const shortUrl = `${SERVER_HOST}/url/${urlId}`;
            url = await Url.create({
                originUrl,
                shortUrl,
                urlId
            });
            return res.status(200).json(url.shortUrl);
        }
    } catch (error) {
        return next(error);
    }
}
