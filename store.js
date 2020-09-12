const STORE = [
    {
        // refactored showcase image to include key
        showcaseImage: 
            {
                id: "hero_sg",
                class: "primaryShowcaseImage",
                src: "images/sg_banner.jpg",
                alt: "image showing showcase of Sober Grid mobile app"
            },
        yearCreated: '2017-2019',
        titleOfProject: "Sober Grid",
        techUsed: 
            [
                "Swift", 
                "Kotlin", 
                "Ruby", 
                "AWS", 
                "JIRA"
            ],
        description: "Managed software development and create UI/UX for the company’s flagship iOS, Android, and web apps with overseas software engineers. Achieved 4.9/5 Apple App Store and 4.5/5 Google Play Store rating. First place finish in Robert Wood Johnson Foundation competition (out of 97). Included in Best Alcohol Addiction Recovery Apps of 2019 by Healthline.",
        buttons: [
            // refactored buttons to include title and link key
            // and possible to insert n number of buttons
            {
                title: "View Live",
                link: "https://www.sobergrid.com/"
            }, 
            {
                title: "View on App Store",
                link: "https://apps.apple.com/us/app/sober-grid-social-network/id912632260"
            },
            {
                title: "View on Google Play Store",
                link: "https://apps.apple.com/us/app/sober-grid-social-network/id912632260"
            }
        ]
    },
    {
        showcaseImage: 
            {
                id: "hero_tc",
                class: "primaryShowcaseImage",
                src: "images/tf_noborder.jpg",
                alt: "image showing showcase of Truth Checker web app"
            },
        yearCreated: '2020',
        titleOfProject: 'Truth Checker',
        techUsed: 
            [
                "HTML5", 
                "CSS 3", 
                "ReactJS", 
                "Node.js", 
                "Express", 
                "PostgreSQL"
            ],
        description: "A parody database for the truth. This application is a promotion piece for a music album. Users can submit facts to be approved by the administrator. The admin login is purposely left public to allow for users to approve or disapprove their own facts.",
        buttons: [
            {
                title: "View Live",
                link: "https://truth-checker.vercel.app/"
            },
            {
                title: "Server Repo",
                link: "https://github.com/nick-nack-attack/truth-checker-api"
            },
            {
                title: "Client Repo",
                link: "https://github.com/nick-nack-attack/truth-checker-client"
            }
        ]
    },
    {
        showcaseImage: 
            {
                id: "hero_rm",
                class: "primaryShowcaseImage",
                src: "images/rmbrme_noborder.jpg",
                alt: "image showing showcase of 'remember me' web app"
            },
        yearCreated: '2020',
        titleOfProject: "rmbrme",
        techUsed: 
            [
                "HTML5", 
                "CSS 3", 
                "ReactJS", 
                "Node.js", 
                "Express", 
                "PostgreSQL"
            ],
        description: "This is for remembering stuff about people you care about. You create people and attached rmbrs (notes) to them. Rmbr is the branding name for a note about someone.",
        buttons: [
            {
                title: "View Live",
                link: "https://rmbrme.now.sh/"
            },
            {
                title: "Server Repo",
                link: "https://github.com/nick-nack-attack/rmbr-me-server"
            },
            {
                title: "Client Repo",
                link: "https://github.com/nick-nack-attack/rmbr-me-app"
            }
        ]
    },
    {
        showcaseImage: 
            {
                id: "hero_pq",
                class: "primaryShowcaseImage",
                src: "images/hero_pineapple.jpg",
                alt: "image showing showcase of Pineapple Quiz web app"
            },
        yearCreated: '2020',
        titleOfProject: "The Finest Pineapple Quiz",
        techUsed: 
            [
                "HTML", 
                "CSS", 
                "Javascript"
            ],
        description: "I'm working my way through the Thinkful Software engineering bootcamp. One of the assignments was to create a quiz. Mine is administered by a loquacious pineapple. However incorrigible this fruit may be, nay we forget its indescribable deliciousness.",
        buttons: [
            {
                title: "View Live",
                link: "https://nick-nack-attack.github.io/final-pineapple-quiz/"
            },
            {
                title: "Repo",
                link: "https://github.com/nick-nack-attack/final-pineapple-quiz.git"
            }
        ]
    }
]
