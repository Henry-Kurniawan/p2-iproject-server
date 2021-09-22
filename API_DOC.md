# Heknime Planets API

Heknime Planets App is an application to view a lot of animes list including all of their details. This app has :

- RESTful endpoint to view anime list/details, add/remove/update your bookmarks
- JSON formatted response


## Endpoints List :

- GET /animes
- GET /animes/:id

- POST /users/register
- POST /users/login
- GET /users/bookmarks
- POST /users/bookmarks
- PUT /users/:cardId
- DELETE /users/:cardId


<br />

## RESTful endpoints  
<br />


### GET /animes
> get a full list of animes, also acceptS query params as filter such as pages, title, genre, and others


_Request Query Params_  
```
{
    page,
    per_page,
    status 0~6,
    formats: 0~6,
    genres: ["array of string"],
    title: "string"
}
```

> Query details
```
1. status:
"FINISHED": 0,
"RELEASING": 1,
"NOT_YET_RELEASED": 2,
"CANCELLED": 3

2. title
String, case insensitive

3. genres
Array of strings, Case sensitive, example:
arr = ["Tragedy", "War", "Action", "Comedy", "Drama"]

4. formats
"TV": 0,
"TV_SHORT": 1,
"MOVIE": 2,
"SPECIAL": 3,
"OVA": 4,
"ONA": 5,
"MUSIC": 6
```


_Response (200 - OK)_  
> if without queries, default per_page items will be set to 12
```
{
    "status_code": 200,
    "message": "Page 1 contains 20 anime. Last page number is 4 for a total of 67 anime",
    "data": {
        "current_page": 1,
        "count": 67,
        "documents": [
            {
                "anilist_id": 21637,
                "mal_id": 32681,
                "format": 1,
                "status": 0,
                "titles": {
                    "en": "Uchuu Patrol Luluco",
                    "jp": "宇宙パトロールルル子"
                },
                "descriptions": {
                    "en": ""
                },
                "start_date": "2016-04-01T00:00:00Z",
                "end_date": "2016-06-24T00:00:00Z",
                "season_period": 1,
                "season_year": 2016,
                "episodes_count": 13,
                "episode_duration": 8,
                "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21637-6SulVMOqv77m.jpg",
                "cover_color": "#d61a43",
                "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21637-9QQ3iRcjzHLP.png",
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Romance",
                    "Sci-Fi",
                    "Space",
                    "Female Protagonist",
                    "Crossover",
                    "Meta",
                    "Coming of Age",
                    "Henshin",
                    "Surreal Comedy",
                    "Aliens",
                    "Police",
                    "Work",
                    "Guns",
                    "Pirates",
                    "School",
                    "Heterosexual"
                ],
                "score": 74,
                "id": 4420
            },
            {
                "anilist_id": 18523,
                "mal_id": 18523,
                "format": 1,
                "status": 0,
                "titles": {
                    "en": "Senyuu. 2",
                    "jp": "戦勇. 2"
                },
                "descriptions": {
                    "en": "Second season of Senyuu."
                },
                "start_date": "2013-07-03T00:00:00Z",
                "end_date": "2013-09-25T00:00:00Z",
                "season_period": 2,
                "season_year": 2013,
                "episodes_count": 13,
                "episode_duration": 6,
                "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18523-c0Qw0GbwGJvh.jpg",
                "cover_color": "#d6c91a",
                "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18523.jpg",
                "genres": [
                    "Action",
                    "Comedy",
                    "Fantasy",
                    "Shounen",
                    "Parody",
                    "Demons"
                ],
                "score": 71,
                "id": 4255
            },
            ....
        ],
        "last_page": 4
    },
    "version": "1"
}
```

_Response (200 - OK)_  
> example queries /animes?title=Piece&status=1&formats=0&page=1&per_page=20
```
{
    "status_code": 200,
    "message": "Page 1 contains 1 anime. Last page number is 1 for a total of 1 anime",
    "data": {
        "current_page": 1,
        "count": 1,
        "documents": [
            {
                "anilist_id": 21,
                "mal_id": 21,
                "format": 0,
                "status": 1,
                "titles": {
                    "en": "One Piece",
                    "jp": "ワンピース",
                    "it": "One Piece"
                },
                "descriptions": {
                    "en": "",
                    "it": "Monkey D. Luffy (Nel doppiaggio italiano, Rubber) è un pirata diciassettenne che da bambino ha mangiato il frutto del diavolo Gom Gom che gli ha permesso di diventare un uomo gomma perdendo però la facoltà di nuotare. Il suo sogno è quello di diventare il Re dei pirati trovando il leggendario One Piece, tesoro nascosto da Gol D. Roger, il vecchio Re dei pirati. Per riuscire nell'impresa Rufy dovrà formare la sua ciurma formata da amici e abili combattenti del quali il pirata potrà fidarsi ciecamente. Nasce così la Ciurma di Cappello di Paglia, legata dall'indissolubile legame dell'amicizia."
                },
                "start_date": "1999-10-20T00:00:00Z",
                "end_date": "1970-01-01T00:00:00Z",
                "season_period": 3,
                "season_year": 1999,
                "episodes_count": 992,
                "episode_duration": 24,
                "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg",
                "cover_color": "#e4a15d",
                "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy",
                    "Pirates",
                    "Ensemble Cast",
                    "Shounen",
                    "Super Power",
                    "Male Protagonist",
                    "Conspiracy",
                    "Ships",
                    "Tragedy",
                    "Time Skip",
                    "Politics",
                    "War",
                    "Lost Civilization",
                    "Swordplay",
                    "Shapeshifting",
                    "Henshin",
                    "Animals",
                    "Primarily Adult Cast",
                    "Real Robot",
                    "Gender Bending",
                    "Anachronism",
                    "Primarily Male Cast",
                    "Skeleton",
                    "Anti-Hero",
                    "Ninja",
                    "Espionage",
                    "Guns",
                    "Cyborg",
                    "Nudity",
                    "Mermaid",
                    "Kuudere",
                    "Tanned Skin",
                    "Time Manipulation",
                    "Zombie",
                    "Battle Royale",
                    "Assassins",
                    "Adoption"
                ],
                "score": 86,
                "id": 11
            }
        ],
        "last_page": 1
    },
    "version": "1"
}
```

_Response (500 - internal server error)_  

```
{
  "message": "Internal Server Error"
}
```

### GET /animes/genres
> Get all anime genres available for search


_Response (200)_  
```
[
    {
        "id": 1,
        "name": "Action"
    },
    {
        "id": 2,
        "name": "Adventure"
    },
    {
        "id": 3,
        "name": "Comedy"
    },
]
```


_Response (500 - internal server error)_  

```
{
  "message": "Internal Server Error"
}
```

### GET /animes/:id
> Get an anime by their ID


_Request Params_  

```
anime id as
:id
```



_Response (200)_  
> example request: /animes/745

```
{
    "status_code": 200,
    "message": "Anime found",
    "data": {
        "anilist_id": 1735,
        "mal_id": 1735,
        "format": 0,
        "status": 0,
        "titles": {
            "en": "Naruto: Shippuuden",
            "jp": "ナルト- 疾風伝"
        },
        "descriptions": {
            "en": "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki. <br><br>\n(Source: Anime News Network)"
        },
        "start_date": "2007-02-15T00:00:00Z",
        "end_date": "2017-03-23T00:00:00Z",
        "season_period": 0,
        "season_year": 2007,
        "episodes_count": 500,
        "episode_duration": 23,
        "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1735-80JNLAlnxrKj.png",
        "cover_color": "#e4865d",
        "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1735.jpg",
        "genres": [
            "Action",
            "Comedy",
            "Ninja",
            "Shounen",
            "Super Power",
            "Male Protagonist",
            "Tragedy",
            "War",
            "Coming of Age",
            "Revenge",
            "Martial Arts",
            "Cultivation",
            "Aliens",
            "Ensemble Cast",
            "Philosophy",
            "Politics",
            "Swordplay",
            "Time Skip",
            "Heterosexual",
            "Female Harem",
            "Gods",
            "Cosmic Horror",
            "Conspiracy",
            "Anachronism"
        ],
        "sequel": 2976,
        "prequel": 10,
        "score": 82,
        "id": 745
    },
    "version": "1"
}
```

_Response (404 - Not Found)_  

```
{
    "message": "Anime not found",
}

```

_Response (500 - internal server error)_  

```
{
    "message": "Internal Server Error"
}
```


### POST /users/register
> Register a user, and logged in immedately if success
  
_Request Body_  

```
{
    "email",
    "password,
    "phoneNumber",
    "address"
}
```


_Response (201)_  

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0NUBtYWlsLmNvbSIsInRyZWxsb0xpc3RJZCI6IjYxNDliMTgxM2Y4M2M3MjVkOTkzNTFkYSIsImlhdCI6MTYzMjIxOTUyMX0.tx99Uw1X_oqseA181sNh-vl3sUyNK6UBghhxOwtXCx8",
    "email": "test5@mail.com",
    "id": 7,
    "trelloListId": "6149b1813f83c725d99351da"
}
```

_Response (400 - Bad Request)_  

```
[
    "Email is required",
    "Invalid Email format",
    "Password is required",
    "Email already registered",
]
```

_Response (500 - internal server error)_  

```
{
  "message": "Internal Server Error"
}
```


### POST /users/login  
> Login as a user  


_Request Body_  

```
{
    "email",
    "password"
}
```

_Response (200)_  

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0NUBtYWlsLmNvbSIsInRyZWxsb0xpc3RJZCI6IjYxNDliMTgxM2Y4M2M3MjVkOTkzNTFkYSIsImlhdCI6MTYzMjIxOTUyMX0.tx99Uw1X_oqseA181sNh-vl3sUyNK6UBghhxOwtXCx8",
    "email": "test5@mail.com",
    "id": 7,
    "trelloListId": "6149b1813f83c725d99351da"
}
```

_Response (401 - Unauthorized)_  

```
{
  "message": "Invalid Username or Password"
}

```

_Response (500 - internal server error)_  

```
{
  "message": "Internal Server Error"
}
```


### GET /users/bookmarks/
> Users can see their own bookmarked Animes

_Request Header_  

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYzMDQzMDY0OH0.NCB6RcXEK6IlBzzSYIkWOzlCHJ7aQvoQCAVHvenb4eI"
}
```

_Response (200)_  

```
[
    {
        "id": "6149ef707c64c94c84c64dd0",
        "name": "Demon Slayer",
        "dueComplete": false
    },
    {
        "id": "614a08dac567c77d8890dbe9",
        "name": "One Piece",
        "dueComplete": false
    },
    {
        "id": "614a099d9b05941df832e40d",
        "name": "Fairy Tail",
        "dueComplete": false
    },
    {
        "id": "614a0b1b1c2453737dc48100",
        "name": "Soma",
        "dueComplete": true
    }
]
```

_Response (401 - Unauthorized)_  

```
{
  "message": "Invalid Token"
}

```

_Response (500 - Internal server error)_  

```
{
   message: "Internal server error"
}

```

### POST /users/bookmarks 

> Users can add their choosen anime to their bookmark list

_Request Header_  

```
{
    "Accept": "application/json",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYzMDQzMDY0OH0.NCB6RcXEK6IlBzzSYIkWOzlCHJ7aQvoQCAVHvenb4eI"
}
```

_Request Query Params_ 
```
{
    title: "string"
}
```

_Response (201 - Created)_  

```
{
    "id": "614a0b1b1c2453737dc48100",
    "name": "Soma",
    "dueComplete": false
}
```

_Response (401 - Unauthorized)_  

```
{
  "message": "Invalid Token"
}

```

_Response (500 - Internal server error)_  

```
{
   message: "Internal server error"
}

```

### PUT /users/bookmarks/:cardId

> Users can update the status of bookmarked item

_Request Header_  

```
{
    "Accept": "application/json",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYzMDQzMDY0OH0.NCB6RcXEK6IlBzzSYIkWOzlCHJ7aQvoQCAVHvenb4eI"
}
```

_Request Params_ 
```
the card or bookmark id
:cardId
```

_Request Query Params_ 
```
{
    status: boolean
}
```

_Response (200)_  

```
{
    "id": "614a0b1b1c2453737dc48100",
    "name": "Soma",
    "dueComplete": true
}
```

_Response (401 - Unauthorized)_  

```
{
  "message": "Invalid Token"
}

```

_Response (500 - Internal server error)_  

```
{
   message: "Internal server error"
}

```

### DELETE /users/bookmarks/:cardId

> Users can delete a bookmark item

_Request Header_  

```
{
    "Accept": "application/json",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJ0ZXN0ZW1haWwyQGdtYWlsLmNvbSIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYzMDQzMDY0OH0.NCB6RcXEK6IlBzzSYIkWOzlCHJ7aQvoQCAVHvenb4eI"
}
```

_Request Params_ 
```
the card or bookmark id
:cardId
```


_Response (200)_  

```
{
    "message": "Bookmark has been deleted"
}
```

_Response (401 - Unauthorized)_  

```
{
  "message": "Invalid Token"
}

```

_Response (500 - Internal server error)_  

```
{
   message: "Internal server error"
}

```