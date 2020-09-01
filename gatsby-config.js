module.exports = {
    siteMetadata:{
        title:"created with create-gatsby-app repository",
        description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
        author:"Ahmed Ayachi",
    },
    plugins:[
        {
            resolve:"gatsby-plugin-manifest",
            options:{
                name:"gatsby-starter-default",
                short_name:"starter",
                start_url:"./Home/Home",
            }
        }
    ],
}
