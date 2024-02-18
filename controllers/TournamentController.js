const Tournament = require("../models/Tournament")

async function  addTournament(req,res){
    try{
     console.log(req.body);
     const u = new Tournament(req.body);
     await u.save();
     
     res.status(200)
    }
    catch(err){
     res.status(400).json({error:err})
 }}


 async function  getallTournaments(req,res){
    try{
      const data =await Tournament.find();
      res.status(200).send(data)
      
  }catch(err){
  res.status(400).json({error : err})
  }
  }

  async function getTournamentbytitle(req,res){
    try {
      let name = req.params.name
      const data =await Tournament.findOne({title})
      res.status(201).send(data);
    }catch(err){
  res.status(400).json({error :err});
    }
  }

  async function updateTournament(req,res){
    try {
  //const newuser =  user(req.body)
  const updatedObject = await Tournament.findByIdAndUpdate( req.params.id , req.body);
  res.status(200).send(updatedObject);
    }
      catch(err) {
        res.status(400).json({error :err});
    }
  }

  async function deleteTournament(req,res){
    try {
  //const newuser =  user(req.body)
  const updatedObject = await Tournament.findByIdAndDelete( req.params.id );
  res.status(200).send("deleeted");
    }
      catch(err) {
        res.status(400).json({error :err});
    }
  }

  async function getTournamentbyid(req,res){
    try {
      const data =await Tournament.findById(req.params.id)
      res.status(201).send(data);
    }catch(err){
  res.status(400).json({error :err});
    }
  }
  module.exports={addTournament,getallTournaments,getTournamentbyid,updateTournament,deleteTournament,getTournamentbytitle}