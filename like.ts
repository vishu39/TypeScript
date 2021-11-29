export class LikeComponent{
    // likesCount:number;
    // isSelected:boolean;
    constructor(private _likesCount:number,private _isSelected:boolean){
    }
    onClick(){
        // if(this.isSelected){
        //     this.likesCount--;
        //     this.isSelected=false;
        // }
        // else{
        //     this.likesCount++;
        //     this.isSelected=true;
        // }
        this._likesCount+=(this._isSelected)?-1:+1;
        this._isSelected=!this._isSelected;
    }
    get likesCount(){
        return this._likesCount;
    }
    get isSelected(){
        return this._isSelected;
    }
}