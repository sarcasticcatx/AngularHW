export interface JobApplication {
   id: number;
    company: string;
    expires: string;
    position: string;
    startingSalary?: number;
    workType: string;
    // Show the below in the details expanding element
    location: string;
    country: string;
    qualifications: string;
    description: string;
    isApplied: boolean;
    isAvailable?: boolean;
}