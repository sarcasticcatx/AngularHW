import { UserModel } from './user.model';

export const UserMock: UserModel[] = [
  {
    personalInfo: {
      fullName: 'John Snow',
      age: 25,
      emailAdress: 'john.snow@hotmail.com',
      phoneNumber: 789567333,
      location: 'Bahamas',
    },
    workExp: '+ 5 years',
    currentWorkStatus: 'Unemployed',
  },
];
