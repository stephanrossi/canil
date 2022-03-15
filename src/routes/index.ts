import { Router } from "express";
import * as PetController from '../controllers/petsController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', PetController.Home)
router.get('/dogs', PetController.Dogs)
router.get('/cats', PetController.Cats)
router.get('/fishes', PetController.Fishes)

router.get('/search', SearchController.search)

export default router