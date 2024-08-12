export enum TODOStatus {
    NEW = "new",
    IN_PROGRESS = 'in-progress',
    DONE = 'done',
}

export interface TODOList {
    id: number;
    description: string;
    assignedTo: string;
    status: TODOStatus;

}
