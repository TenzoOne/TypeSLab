export class Post {
    constructor(public id: string,public title:string,public description:string,public date:string) {
    }


    setId(id:string):void
    {
        this.id = id;
    }
}