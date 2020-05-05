export class Binnacle {
    constructor(
        Id = 0,
        Id_LastOperator = 0,
        Id_NewOperator = 0,
        FirstName = '',
        LastName = '',
        News = '',
        SpecialProcess = '',
        PendingProcess = '',
        Id_Schedule = 0,
        Schedule = '',
        ) {
        this.Id = Id;
        this.Id_LastOperator = Id_LastOperator;
        this.Id_NewOperator = Id_NewOperator;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.News = News;
        this.SpecialProcess = SpecialProcess;
        this.PendingProcess = PendingProcess;
        this.Id_Schedule = Id_Schedule;
        this.Schedule = Schedule;
    }
    Id: number;
    Id_LastOperator: number;
    Id_NewOperator: number;
    FirstName: string;
    LastName: string;
    News: string;
    SpecialProcess: string;
    PendingProcess: string;
    Id_Schedule: number;
    Schedule: string;
}