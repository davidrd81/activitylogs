export class Operator {
    constructor( Id = 0, CC = 0, FirstName = '', LastName = '', Email = '', UserName = '', Id_Area = 0 ) {
        this.Id = Id;
        this.CC = CC;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.UserName = UserName;
        this.Id_Area = Id_Area;
    }
    Id: number;
    CC: number;
    FirstName: string;
    LastName: string;
    Email: string;
    UserName: string;
    Id_Area: number;
}
