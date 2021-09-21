GET animes?query
query:
title=&status=&formats=1&genres=&page=1&per_page=20

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

GET animes/:id
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

POST users/register
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0NUBtYWlsLmNvbSIsInRyZWxsb0xpc3RJZCI6IjYxNDliMTgxM2Y4M2M3MjVkOTkzNTFkYSIsImlhdCI6MTYzMjIxOTUyMX0.tx99Uw1X_oqseA181sNh-vl3sUyNK6UBghhxOwtXCx8",
    "email": "test5@mail.com",
    "id": 7,
    "trelloListId": "6149b1813f83c725d99351da"
}

POST users/login
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ0ZXN0NUBtYWlsLmNvbSIsInRyZWxsb0xpc3RJZCI6IjYxNDliMTgxM2Y4M2M3MjVkOTkzNTFkYSIsImlhdCI6MTYzMjIzNjAzM30.j02vRHopYUUIms3Tma7CqqQ64bt-WocKOAerJF7KJ7E",
    "id": 7,
    "email": "test5@mail.com",
    "trelloListId": "6149b1813f83c725d99351da"
}


GET users/bookmarks
[
    {
        "id": "6149ef6af001da81162b94da",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2021-09-21T14:42:50.495Z",
        "desc": "",
        "descData": {
            "emoji": {}
        },
        "dueReminder": null,
        "idBoard": "614962b09ee4587531200408",
        "idList": "6149b1813f83c725d99351da",
        "idMembersVoted": [],
        "idShort": 6,
        "idAttachmentCover": null,
        "idLabels": [],
        "manualCoverAttachment": false,
        "name": "One Piece",
        "pos": 65535,
        "shortLink": "56CBWORJ",
        "isTemplate": false,
        "cardRole": null,
        "badges": {
            "attachmentsByType": {
                "trello": {
                    "board": 0,
                    "card": 0
                }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null,
            "dueComplete": false,
            "start": null
        },
        "dueComplete": false,
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/56CBWORJ",
        "start": null,
        "subscribed": false,
        "url": "https://trello.com/c/56CBWORJ/6-one-piece",
        "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "dark",
            "idPlugin": null
        }
    },
    {
        "id": "6149ef707c64c94c84c64dd0",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2021-09-21T14:42:56.279Z",
        "desc": "",
        "descData": {
            "emoji": {}
        },
        "dueReminder": null,
        "idBoard": "614962b09ee4587531200408",
        "idList": "6149b1813f83c725d99351da",
        "idMembersVoted": [],
        "idShort": 7,
        "idAttachmentCover": null,
        "idLabels": [],
        "manualCoverAttachment": false,
        "name": "Demon Slayer",
        "pos": 131071,
        "shortLink": "GRH0fWjQ",
        "isTemplate": false,
        "cardRole": null,
        "badges": {
            "attachmentsByType": {
                "trello": {
                    "board": 0,
                    "card": 0
                }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null,
            "dueComplete": false,
            "start": null
        },
        "dueComplete": false,
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/GRH0fWjQ",
        "start": null,
        "subscribed": false,
        "url": "https://trello.com/c/GRH0fWjQ/7-demon-slayer",
        "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "dark",
            "idPlugin": null
        }
    }
]


POST users/bookmarks
{
    "id": "614a0b1b1c2453737dc48100",
    "name": "Soma",
    "dueComplete": false
}

PUT users/bookmarks/:cardId
{
    "id": "614a0b1b1c2453737dc48100",
    "name": "Soma",
    "dueComplete": true
}

DELETE users/bookmarks/:cardID
{
    message: "Bookmark has been deleted"
}