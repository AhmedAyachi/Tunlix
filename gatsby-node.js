exports.onCreatePage=({page})=>{
    if(page.path.includes("/404")){
        page.layout="404/404";
    }
}