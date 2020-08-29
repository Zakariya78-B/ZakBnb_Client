export interface Bungalow{
    id:number;
    name:string;
    description:string;
    currentPrice:number;
    photoName:string;

    _links : {
        self : {
          href :string;
        },
        bungalow:{
          href:string;
        },
        category:{
          href:string;
        }
    }
}