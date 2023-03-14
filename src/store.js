import { reactive } from 'vue'

const store = reactive({ 
    foodieJournal: [
        {
            articleName: 'Food corner: top japanese restaurants for sushi',
            articleCover: '/images/foodie-1.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 78,
        },
        {
            articleName: 'Roundup: My New Favourite Recipes For Healthy Living',
            articleCover: '/images/foodie-2.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 32,
        },
        {
            articleName: 'Why These Toasts with Tea are My New Favorite',
            articleCover: '/images/foodie-3.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 14,
        },
        {
            articleName: 'Food corner: top japanese restaurants for sushi',
            articleCover: '/images/foodie-1.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 113,
        },
        {
            articleName: 'Roundup: My New Favourite Recipes For Healthy Living',
            articleCover: '/images/foodie-2.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 67,
        },
        {
            articleName: 'Why These Toasts with Tea are My New Favorite',
            articleCover: '/images/foodie-3.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 89,
        },
        {
            articleName: 'Food corner: top japanese restaurants for sushi',
            articleCover: '/images/foodie-1.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 0,
        },
        {
            articleName: 'Roundup: My New Favourite Recipes For Healthy Living',
            articleCover: '/images/foodie-2.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 2,
        },
        {
            articleName: 'Why These Toasts with Tea are My New Favorite',
            articleCover: '/images/foodie-3.jpg',
            articleDate: 'March 25, 2019',
            articleAuthor: 'Admin',
            articleDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum repudiandae autem maxime dolorem tempora facere fugiat molestiae voluptatem nihil? Incidunt nemo tenetur temporibus voluptatibus necessitatibus dolorum sit modi ea.',
            totalReads: 56,
        },
    ],
    navLinks: [
        {
            linkName: 'Home',
            externalLink: '#',
        },
        {
            linkName: 'Recipes',
            externalLink: '#',
        },
        {
            linkName: 'Places',
            externalLink: '#',
        },
        {
            linkName: 'Blog',
            externalLink: '#',
        },
        {
            linkName: 'About',
            externalLink: '#',
        },
        {
            linkName: 'Contact',
            externalLink: '#',
        },
    ]
})

export default store 