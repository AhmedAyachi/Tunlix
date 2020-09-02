module.exports = {
    siteMetadata:{
        title:"Gatsby App",
        description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
        author:"Ahmed Ayachi",
    },
    plugins:[
        {
            resolve:"gatsby-plugin-manifest",
            options:{
                icon:"src/Assets/Images/MyLogo_0.png",
            }
        },
        {
            resolve:"gatsby-plugin-alias-imports",
            options:{
                alias:{
                    "assets":`${__dirname}/src/Assets`,
                    "estate":`${__dirname}/src/Estate.js`,
                    "actions":`${__dirname}/src/Store/Actions`,
                },
            }
        },
    ],
}
