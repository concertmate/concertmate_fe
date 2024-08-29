interface User {
    id: number;
    email: string;
    friends: number[]
}
export const user:User[] = [{
    id: 1,
    email: 'peterkim.pk1@gmail.com',
    friends: [2,3,4]
},
{
    id: 2,
    email: 'konber3@gmail.com',
    friends: [1,3,4]
},
{
    id: 3,
    email: 'kylemboomer@gmail.com',
    friends: [1,2,4]
},
{
    id: 4,
    email: 'baileyjarvis2814@gmail.com',
    friends: [1,2,3]
}
]