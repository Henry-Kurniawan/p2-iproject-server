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
            genres = ['Action']
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

            console.log(queryParams)
            /*

            filter: 
            1. status:
            "FINISHED": 0,
            "RELEASING": 1,
            "NOT_YET_RELEASED": 2,
            "CANCELLED": 3

            2. title
            // case insensitive

            3. genres
            // querynya itu or, case sensitive 
            // let arr = ["Tragedy", "War", "Action", "Comedy", "Drama"]
                let result = arr.join(',')
            4. formats
            "TV": 0,
            "TV_SHORT": 1,
            "MOVIE": 2,
            "SPECIAL": 3,
            "OVA": 4,
            "ONA": 5,
            "MUSIC": 6

            */
            let result = await axios({
                    url: "https://api.aniapi.com/v1/anime",
                    method: "get",
                    // params: {
                    //     page: 1,
                    //     per_page: 20,
                    //     title: "", 
                    //     genres: "War,Action,Comedy" 
                    // },
                    params: queryParams,
                    headers: {
                        'Authorization': process.env.ANIME_API_KEY,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
            // console.log(result.data)
            res.status(200).json(result.data)
        } catch (err) {
            res.status(500).json(err.message)
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

        res.status(200).json(result.data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
} 
module.exports = ControllerAnime