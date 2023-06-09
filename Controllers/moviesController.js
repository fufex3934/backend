
const Movie = require('./../Models/movieModels')

exports. getAllMovies = async (req,res)=>{
   try{
    const movies = await Movie.find();
    res.status(200).json({
        status:"success",
        length:movies.length,
        data:{
            movies
        }
    })
   }catch(err){
     res.status(404).json({
        status:"fail",
        message:err.message
     })
   }
}
exports.getMovie = async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json({
            status:"success",
            data:{
                movie
            }
        })
       }catch(err){
         res.status(404).json({
            status:"fail",
            message:err.message
         })
       }
}
exports.createMovie = async (req,res)=>{
    try{
       const movie = await Movie.create(req.body); 
       res.status(201).json({
        status:"success",
        data:{
            movie
        }
       })
    }catch(err){
       res.status(400).json({
        status:'failed',
        message:err.message
       })
    }
    
}
exports.updateMovie = async (req,res)=>{
    try{
      const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
      res.status(200).json({
        status:"success",
        data:{
            movie
        }
      })
    }catch(error){
       res.status(404).json({
        status:"fail",
        message:error.message
       })
    }

}
exports.deleteMovie = async (req,res)=>{
   try{
       const movie = await Movie.findByIdAndDelete(req.params.id);
       res.status(204).json({
        status:"success",
        data:null
       })
   }catch(error){
      res.status(404).json({
        status:"fail",
        message:error.message
      })
   }
}