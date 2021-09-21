const axios = require("axios")

class ControllerAnime {
    static async getAnimeList(req, res, next) {
        try {
            let {title, status, genres, formats, page, per_page} = req.query
            
            if(!page || page < 1) {
                page = 1
            } else {
                page = Number(page)
            }
            if(!per_page || per_page < 0) {
                per_page = 9
            } else {
                per_page = Number(per_page)
            }
            
            // =============== FILTERING ============ //
            let queryParams = {
                page,
                per_page
            }

            // testing genres
            // genres = ['Action']
            /////////////////
            
            if(title) {
                queryParams.title = title
            }

            if(status) {
                queryParams.status = Number(status)
            }

            if(formats) {
                queryParams.formats = Number(formats)
            }

            if(genres.length > 0) {
                genres = genres.join(",")
                queryParams.genres = genres
            }

            let result = await axios({
                    url: "https://api.aniapi.com/v1/anime",
                    method: "get",
                    params: queryParams,
                    headers: {
                        'Authorization': process.env.ANIME_API_KEY,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                
            res.status(200).json(result.data)
        } catch (err) {
            next(err)
        }
    }
    
    static async getAnimeDetail(req, res, next) {
        try {
            const id = req.params.id

            let result = await axios({
                url: `https://api.aniapi.com/v1/anime/${id}`,
                method: "get",
                headers: {
                    'Authorization': process.env.ANIME_API_KEY,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })


            if(result.data.status_code === 404) {
                next({
                    name: "NotFound",
                    code: 404,
                    message: "Anime not Found"
                })
            } else {
                res.status(200).json(result.data)
            }

        } catch (err) {
            next(err)
        }
    }
} 
module.exports = ControllerAnime