import type { UserResponse } from '../model/api-user';

export const response_user: UserResponse = {
    user: {
        avatarUrl:
            'https://static.wixstatic.com/media/68d3a9_a9372f08e00c4a44ab575bbdd42a51ee~mv2.png',
        bio: null,
        login: 'AnnieW',
        name: 'Annie Williams',
        location: 'Boston MA USA',
        email: 'anniew@codux.com',
        twitterUsername: null,
        websiteUrl: 'http://codux.com/anniewilliams',
        techs: {
            technologies: ['react', 'html', 'node', 'python', 'js', 'csharp'],
        },
        company: 'Codux',
        following: {
            totalCount: 68,
        },
        followers: {
            totalCount: 4319,
        },
        status: null,
        organizations: {
            edges: [
                {
                    node: {
                        login: 'wix',
                        avatarUrl: 'https://i.pravatar.cc/150?img=wix',
                    },
                },
            ],
        },
    },
};
