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
                    playCount: 0
               });

               res.status(200).json({
                    message: `Successfully Add ${title} by ${artists} to the Playlist`
               });
          } catch (err){
               next(err);
          }
     },
     playSong: async (req, res, next) => {
          try {
               const playlistId = req.params.id;
               const playlist = await Playlist.findByPk(playlistId);
          
               if (!playlist) {
                    return res.status(404).json({ message: 'Playlist not found' });
               }
          
               playlist.playCount += 1;
               await playlist.save();
               return res.json({ message: `Now Playing ${playlist.title} by ${playlist.artists}` });

          } catch (err) {
               next(err);
               }
     },
     getListOfSong: async (req, res, next) => {
          try{
               const songs = await Playlist.findAll({
                    order: [['playCount', 'DESC']],
               });

               res.status(200).json({
                    message: "Successfully Display the Song List from Playlist",
                    playlist: songs
               });
          } catch (err){
               next(err);
          }
     },
}