import express from 'express';
import { getURL, createURL } from '../controllers/url';

const router = express.Router();

router.get('/:urlId', getURL);
router.post('/', createURL);

module.exports = router;