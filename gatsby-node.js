exports.onCreatePage=({page})=>{
    if(page.path.startsWith("/404")){
        page.layout="404/404";
    }
}