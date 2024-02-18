const express =require('express')
const routerclass = express.Router()
const  tournamentController= require('../controllers/TournamentController')

routerclass.get('/getall', tournamentController.getallTournaments )


routerclass.post('/add', tournamentController.addTournament)

routerclass.get('/:id',tournamentController.getTournamentbyid)


routerclass.put('/:id',tournamentController.updateTournament)

routerclass.delete('/:id',tournamentController.deleteTournament)
routerclass.get('/get/:name',tournamentController.getTournamentbytitle)

module.exports=routerclass


