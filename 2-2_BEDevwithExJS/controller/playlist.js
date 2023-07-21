const {Playlist} = require('../db/models');

module.exports = {
     addSong: async (req, res, next) => {
          try{
               const {title} = req.body;
               const {artists} = req.body;
               const {url} = req.body;

               Playlist.create({
                    title: title,
                    artists: artists,
                    url: url,
               });

               res.status(200).json({
                    message: `Successfully Add ${title} by ${artists} to the Playlist`
               });
          } catch (err){
               next(err);
          }
     },
     playSong: async (req, res, next) => {
          try{
               const idSong = req.params.id;
               const data = await Playlist.findByPk(idSong);

               res.status(200).json({
                    message: `Now Playing ${data.title} by ${data.artists}`
               });
          } catch (err){
               next(err);
          }
     },
     getListOfSong: async (req, res, next) => {
          try{
               const songs = await Playlist.findAll();

               res.status(200).json({
                    message: "Successfully Display the Song List from Playlist",
                    playlist: songs
               });
          } catch (err){
               next(err);
          }
     },
}