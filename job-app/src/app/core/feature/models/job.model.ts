export enum WorkType {
 HYBRID = 'Hybrid',
 REMOTE = 'Remote',
 ON_SITE = 'Onsite'
}

export interface JobApplication {
   id: number;
    company: string;
    expires: string;
    position: string;
    startingSalary?: number;
    workType: WorkType;
    // Show the below in the details expanding element
    location: string;
    country: string;
    qualifications: string;
    description: string;
    isApplied: boolean;
   
}