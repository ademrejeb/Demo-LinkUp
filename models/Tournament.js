const mongo =require('mongoose')
const Schema = mongo.Schema
const TournamentStatus =require('./TournamentStatus')
const TournamentType = require ('./TournamentType')

const Tournament = new Schema({
    title : String,
    startDate : Date,
    endDate : Date,
    tournamentstatus: {
        type: String,
        enum: [TournamentStatus.ACTIVE, TournamentStatus.INACTIVE, TournamentStatus.PENDING, TournamentStatus.FINISHED],
    
      },

      tournamenttype: {
        type: String,
        enum: [TournamentType.KNOCKOUT, TournamentType.LEAGUE, TournamentType.GROUPSTAGETHENKNOCKOUT],
    
      }  
    });

    module.exports=mongo.model("tournaments",Tournament)