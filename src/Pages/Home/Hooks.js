import {useStaticQuery,graphql} from "gatsby";


export const useData=()=>(useStaticQuery(graphql`query{
    site{
        siteMetadata{
            title
        }
    }
}`));