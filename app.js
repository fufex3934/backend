    // import express package

    const express = require('express')
    const morgan = require('morgan')
    const moviesRouter = require('./routes/moviesRoutes')
    const app = express()
  


    const logger = function(req,res,next){
        console.log('Custom Middleware Called')
        next()
    }
    app.use(express.json())
    if(process.env === "development"){
        app.use(morgan('dev'))
    }
    app.use(express.static('./public'))
    app.use(logger)
    app.use((req,res,next)=>{
        req.requestedAt = new Date().toISOString()
        next()
    })

    //using routes
    app.use('/api/v1/movies',moviesRouter)
    
    module.exports = app