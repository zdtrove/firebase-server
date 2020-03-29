let db = {
    users: [
        {
            userId: 'jtSaTXwVhAUhi3dkIAaN2vC9r8J3',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-03-27T03:35:48.529Z',
            imageUrl: 'image/lskdflksdlf/sldkflskdfl',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-03-27T02:28:19.424Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'lskdlfksldkflksdlfksd',
            body: 'nice one mate!',
            createdAt: '2020-03-27T02:28:19.424Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'lksjdlfkjsdlkflsdkf',
            type: 'like | comment',
            createdAt: '2020-03-27T02:28:19.424Z'
        }
    ]
}

const userDetails = {
    // Redux data
    credentials: {
        userId: 'jtSaTXwVhAUhi3dkIAaN2vC9r8J3',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2020-03-27T03:35:48.529Z',
        imageUrl: 'image/lskdflksdlf/sldkflskdfl',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'lksdlfkjslkdflksdflks'
        },
        {
            userHandle: 'user',
            screamId: ';lsjdl;fkjsldkfskd;sdl'
        }
    ]
}