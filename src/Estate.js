export const apikey="aae71d5d8af4086bbd44a5c4602200a5";

export const guestsessionid="658c6fe570030590b466e8161795e685";

export class Movie{
    constructor(title="Movie Title",poster,rate=2){
        this.title=title;
        this.poster_path=poster;
        this.rate=rate;
    }
}