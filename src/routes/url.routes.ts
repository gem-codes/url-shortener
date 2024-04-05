import { Router } from 'express';
import { shortenURL, redirectURL } from '../controllers/url.controller';

const router = Router();

router.route('/:tinyURL').get(redirectURL)
router.route('/shorten-url').post(shortenURL)

export default router;
