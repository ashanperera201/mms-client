export interface IJobRequest {
    id: number;
    jobRequestType: string;
    jobRequestUniqueId: string;
    mainHeader: string;
    imgSource: string;
    jobRequests: IJobRequestTypes[];
}


export interface IJobRequestTypes {
    id: number;
    className: string;
    clockImgSource: string;
    dateAndTime: string;
    requestType: string;
    requestDescription: string;
    progress: number;
    rId: number;
    commentIcon: string;
    attachIcon: string;
    totalComments: number;
    totalAttaches: number;
}