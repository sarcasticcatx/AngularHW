import { JobApplication, WorkType } from './job.model';

export const JobsMock: JobApplication[] = [
  {
    id: 1,
    company: 'Tech Innovators Inc.',
    expires: '2024-09-30',
    position: 'Software Engineer',
    startingSalary: 2500,
    workType: WorkType.ON_SITE,
    location: 'San Francisco, CA',
    country: 'USA',
    qualifications:
      "Bachelor's in Computer Science, 2+ years experience in software development",
    description:
      'Develop and maintain high-performance software applications. Collaborate with cross-functional teams to deliver innovative solutions.',
    isApplied: false,

  },
  {
    id: 2,
    company: 'Creative Solutions Ltd.',
    expires: '2024-10-15',
    position: 'Graphic Designer',
    startingSalary: 2000,
    workType: WorkType.REMOTE,
    location: 'New York, NY',
    country: 'USA',
    qualifications:
      "Bachelor's in Graphic Design, proficiency in Adobe Creative Suite",
    description:
      'Create visual concepts for branding and marketing materials. Work with clients to understand their design needs and deliver compelling visuals.',
    isApplied: false,
   
  },
  {
    id: 3,
    company: 'GreenTech Solutions',
    expires: '2024-11-01',
    position: 'Environmental Scientist',
    startingSalary: 2000,
    workType: WorkType.HYBRID,
    location: 'Seattle, WA',
    country: 'USA',
    qualifications:
      "Master's in Environmental Science, experience in environmental impact assessments",
    description:
      'Conduct research on environmental issues, analyze data, and develop strategies to mitigate environmental impact.',
    isApplied: false,
  },
  {
    id: 4,
    company: 'Global Finance Group',
    expires: '2024-10-20',
    position: 'Financial Analyst',
    startingSalary: 2500,
    workType: WorkType.HYBRID,
    location: 'London',
    country: 'UK',
    qualifications: "Bachelor's in Finance, strong analytical skills",
    description:
      'Analyze financial data, prepare reports, and provide recommendations for investment decisions.',
    isApplied: false,
  },
  {
    id: 5,
    company: 'HealthCare Dynamics',
    expires: '2024-09-25',
    position: 'Registered Nurse',
    startingSalary: 3000,
    workType: WorkType.ON_SITE,
    location: 'Toronto',
    country: 'Canada',
    qualifications: 'RN license, 3+ years of clinical experience',
    description:
      'Provide patient care, administer medications, and collaborate with doctors to develop treatment plans.',
    isApplied: false,
 
  },
  {
    id: 6,
    company: 'Innovate Marketing',
    expires: '2024-12-01',
    position: 'Digital Marketing Specialist',
    startingSalary: 1500,
    workType: WorkType.ON_SITE,
    location: 'Berlin',
    country: 'Germany',
    qualifications: "Bachelor's in Marketing, experience with SEO and PPC",
    description:
      'Develop and implement digital marketing campaigns, analyze performance metrics, and optimize strategies for better results.',
    isApplied: false,
  },
  {
    id: 7,
    company: 'Elite Consulting',
    expires: '2024-11-30',
    position: 'Management Consultant',
    startingSalary: 1100,
    workType: WorkType.HYBRID,
    location: 'Sydney',
    country: 'Australia',
    qualifications: 'MBA, 5+ years experience in consulting',
    description:
      'Advise clients on business strategies, perform market research, and develop actionable recommendations to improve business performance.',
    isApplied: false,
  },
  {
    id: 8,
    company: 'NextGen Robotics',
    expires: '2024-10-05',
    position: 'Robotics Engineer',
    startingSalary: 3500,
    workType: WorkType.HYBRID,
    location: 'Tokyo',
    country: 'Japan',
    qualifications:
      "Master's in Robotics Engineering, experience with robotic systems design",
    description:
      'Design and develop robotic systems, test prototypes, and troubleshoot technical issues.',
    isApplied: false,
  },
  {
    id: 9,
    company: 'Horizon Pharmaceuticals',
    expires: '2024-11-15',
    position: 'Research Scientist',
    startingSalary: 4000,
    workType: WorkType.REMOTE,
    location: 'Boston, MA',
    country: 'USA',
    qualifications: 'PhD in Pharmacology, experience in drug development',
    description:
      'Conduct research on new pharmaceuticals, analyze clinical data, and collaborate with development teams.',
    isApplied: false,
  },
  {
    id: 10,
    company: 'Future Technologies',
    expires: '2024-10-10',
    position: 'Data Scientist',
    startingSalary: 3200,
    workType: WorkType.ON_SITE,
    location: 'Vancouver',
    country: 'Canada',
    qualifications:
      "Master's in Data Science, experience with machine learning algorithms",
    description:
      'Analyze complex data sets, develop predictive models, and provide actionable insights to support business decisions.',
    isApplied: false,
  },
  {
    id: 11,
    company: 'SmartBuild Construction',
    expires: '2024-12-20',
    position: 'Civil Engineer',
    startingSalary: 3500,
    workType: WorkType.REMOTE,
    location: 'Dubai',
    country: 'UAE',
    qualifications:
      "Bachelor's in Civil Engineering, experience with construction project management",
    description:
      'Oversee construction projects, ensure compliance with safety regulations, and manage project budgets and schedules.',
    isApplied: false,
  },
];
