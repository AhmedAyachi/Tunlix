

export class Movie{
    constructor(props){
        Object.assign(this,props);
        this.poster_path=`https://image.tmdb.org/t/p/w500/${this.poster_path}`;
        this.backdrop_path=`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.backdrop_path}`;
        this.keywords=this.title+this.original_title+this.overview;
    }
}