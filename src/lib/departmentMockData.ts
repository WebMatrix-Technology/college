export type DepartmentData = {
  courses: string[];
  stats: {
    totalStudents: number;
    totalFaculty: number;
    avgAttendance: string;
    avgCgpa: string;
  };
  faculty: {
    id: string;
    name: string;
    role: string;
    specialization: string;
    status: string;
    avatar: string;
  }[];
  students: {
    id: string;
    name: string;
    course: string;
    batch: string;
    section: string;
    cgpa: string;
    attendance: string;
    status: string;
  }[];
  subjects: {
    id: string;
    name: string;
    course: string;
    batch: string;
    credits: number;
    type: string;
    lead: string;
    progress: number;
  }[];
};

export const departmentMockData: Record<string, DepartmentData> = {
  "Information Technology": {
    courses: ["B.Tech", "M.Tech", "BCA", "MCA"],
    stats: { totalStudents: 1240, totalFaculty: 45, avgAttendance: "88%", avgCgpa: "7.8" },
    faculty: [
      { id: "FAC-IT-01", name: "Dr. Arvind Ramesh", role: "Senior Professor", specialization: "Machine Learning", status: "Active", avatar: "AR" },
      { id: "FAC-IT-02", name: "Dr. Priya Sharma", role: "Associate Prof", specialization: "Operating Systems", status: "On Leave", avatar: "PS" },
      { id: "FAC-IT-03", name: "Mr. Rahul Verma", role: "Asst. Professor", specialization: "Web Technologies", status: "Active", avatar: "RV" },
      { id: "FAC-IT-04", name: "Ms. Anita Desai", role: "Lecturer", specialization: "Computer Networks", status: "Active", avatar: "AD" },
    ],
    students: [
      { id: "STU-IT-101", name: "Aarav Patel", course: "B.Tech", batch: "Year 2", section: "A", cgpa: "9.2", attendance: "98%", status: "Excellent" },
      { id: "STU-IT-102", name: "Riya Singh", course: "BCA", batch: "Year 3", section: "B", cgpa: "8.5", attendance: "85%", status: "Good" },
      { id: "STU-IT-103", name: "Vikram Sharma", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "6.2", attendance: "68%", status: "Warning" },
      { id: "STU-IT-104", name: "Sneha Reddy", course: "M.Tech", batch: "Year 2", section: "A", cgpa: "9.8", attendance: "100%", status: "Excellent" },
      { id: "STU-IT-105", name: "Aditya Kumar", course: "B.Tech", batch: "Year 2", section: "B", cgpa: "5.8", attendance: "55%", status: "Critical" },
      { id: "STU-IT-2000", name: "Aarav Patel", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "5.5", attendance: "55%", status: "Critical" },
      { id: "STU-IT-2001", name: "Priya Hegde", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "6.9", attendance: "72%", status: "Warning" },
      { id: "STU-IT-2002", name: "Aditya Bose", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "8.2", attendance: "89%", status: "Good" },
      { id: "STU-IT-2003", name: "Pooja Das", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "9.6", attendance: "61%", status: "Warning" },
      { id: "STU-IT-2004", name: "Siddharth Nair", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "6.5", attendance: "78%", status: "Good" },
      { id: "STU-IT-2005", name: "Maya Reddy", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "7.9", attendance: "95%", status: "Good" },
      { id: "STU-IT-2006", name: "Rohan Verma", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "9.2", attendance: "67%", status: "Warning" },
      { id: "STU-IT-2007", name: "Sneha Singh", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "6.1", attendance: "84%", status: "Good" },
      { id: "STU-IT-2008", name: "Karan Iyer", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "7.5", attendance: "56%", status: "Critical" },
      { id: "STU-IT-2009", name: "Kavya Menon", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "8.8", attendance: "73%", status: "Warning" },
      { id: "STU-IT-2010", name: "Rishi Johar", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "5.7", attendance: "90%", status: "Warning" },
      { id: "STU-IT-2011", name: "Neha Rao", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "7.1", attendance: "62%", status: "Warning" },
      { id: "STU-IT-2012", name: "Vikram Kumar", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "8.4", attendance: "79%", status: "Good" },
      { id: "STU-IT-2013", name: "Riya Desai", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "9.8", attendance: "96%", status: "Excellent" },
      { id: "STU-IT-2014", name: "Arjun Sharma", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "6.7", attendance: "68%", status: "Warning" },
      { id: "STU-IT-2015", name: "Tara Khanna", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "8.1", attendance: "85%", status: "Good" },
      { id: "STU-IT-2016", name: "Aarav Patel", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "9.4", attendance: "57%", status: "Critical" },
      { id: "STU-IT-2017", name: "Priya Hegde", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "6.3", attendance: "74%", status: "Warning" },
      { id: "STU-IT-2018", name: "Aditya Bose", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "7.7", attendance: "91%", status: "Good" },
      { id: "STU-IT-2019", name: "Pooja Das", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "9.0", attendance: "63%", status: "Warning" },
      { id: "STU-IT-2020", name: "Siddharth Nair", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "5.9", attendance: "80%", status: "Warning" },
      { id: "STU-IT-2021", name: "Maya Reddy", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "7.3", attendance: "97%", status: "Good" },
      { id: "STU-IT-2022", name: "Rohan Verma", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "8.6", attendance: "69%", status: "Warning" },
      { id: "STU-IT-2023", name: "Sneha Singh", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "5.5", attendance: "86%", status: "Warning" },
      { id: "STU-IT-2024", name: "Karan Iyer", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "6.9", attendance: "58%", status: "Critical" },
      { id: "STU-IT-2025", name: "Kavya Menon", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "8.3", attendance: "75%", status: "Good" },
      { id: "STU-IT-2026", name: "Rishi Johar", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "9.6", attendance: "92%", status: "Excellent" },
      { id: "STU-IT-2027", name: "Neha Rao", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "6.5", attendance: "64%", status: "Warning" },
      { id: "STU-IT-2028", name: "Vikram Kumar", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "7.9", attendance: "81%", status: "Good" },
      { id: "STU-IT-2029", name: "Riya Desai", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "9.2", attendance: "98%", status: "Excellent" },
      { id: "STU-IT-2030", name: "Arjun Sharma", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "6.1", attendance: "70%", status: "Warning" },
      { id: "STU-IT-2031", name: "Tara Khanna", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "7.5", attendance: "87%", status: "Good" },
      { id: "STU-IT-2032", name: "Aarav Patel", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "8.8", attendance: "59%", status: "Critical" },
      { id: "STU-IT-2033", name: "Priya Hegde", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "5.7", attendance: "76%", status: "Warning" },
      { id: "STU-IT-2034", name: "Aditya Bose", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "7.1", attendance: "93%", status: "Good" },
      { id: "STU-IT-2035", name: "Pooja Das", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "8.5", attendance: "65%", status: "Warning" },
      { id: "STU-IT-2036", name: "Siddharth Nair", course: "B.Tech", batch: "Year 1", section: "A", cgpa: "9.8", attendance: "82%", status: "Excellent" },
      { id: "STU-IT-2037", name: "Maya Reddy", course: "B.Tech", batch: "Year 1", section: "B", cgpa: "6.7", attendance: "99%", status: "Good" },
      { id: "STU-IT-2038", name: "Rohan Verma", course: "B.Tech", batch: "Year 1", section: "C", cgpa: "8.1", attendance: "71%", status: "Warning" },
      { id: "STU-IT-2039", name: "Sneha Singh", course: "B.Tech", batch: "Year 1", section: "D", cgpa: "9.4", attendance: "88%", status: "Excellent" }
    ],
    subjects: [
      { id: "CSE3001", name: "Advanced Data Structures", course: "B.Tech", batch: "Year 2", credits: 4, type: "Core", lead: "Dr. Arvind Ramesh", progress: 85 },
      { id: "CSE3002", name: "Operating Systems", course: "B.Tech", batch: "Year 2", credits: 4, type: "Core", lead: "Dr. Priya Sharma", progress: 60 },
      { id: "CSE3005", name: "Machine Learning Foundations", course: "B.Tech", batch: "Year 3", credits: 3, type: "Elective", lead: "Mr. Rahul Verma", progress: 45 },
      { id: "MAT2002", name: "Discrete Mathematics", course: "BCA", batch: "Year 1", credits: 3, type: "Core", lead: "Dr. Arvind Ramesh", progress: 90 },
      { id: "CSE3008", name: "Computer Networks", course: "MCA", batch: "Year 2", credits: 4, type: "Core", lead: "Ms. Anita Desai", progress: 30 },
      { id: "SUB-IT-2000", name: "Applied Mathematics 1", course: "B.Tech", batch: "Year 1", credits: 3, type: "Elective", lead: "Dr. Arvind Ramesh", progress: 20 },
      { id: "SUB-IT-2001", name: "Engineering Physics 2", course: "B.Tech", batch: "Year 1", credits: 4, type: "Core", lead: "Dr. Priya Sharma", progress: 43 },
      { id: "SUB-IT-2002", name: "Basics of Electrical 3", course: "B.Tech", batch: "Year 1", credits: 3, type: "Core", lead: "Mr. Rahul Verma", progress: 66 },
      { id: "SUB-IT-2003", name: "Computer Programming 4", course: "B.Tech", batch: "Year 1", credits: 4, type: "Core", lead: "Ms. Anita Desai", progress: 89 },
      { id: "SUB-IT-2004", name: "Engineering Graphics 5", course: "B.Tech", batch: "Year 1", credits: 3, type: "Elective", lead: "Dr. Meera Iyer", progress: 32 },
      { id: "SUB-IT-2005", name: "Communication Skills 6", course: "B.Tech", batch: "Year 1", credits: 4, type: "Core", lead: "Dr. Suresh Nanda", progress: 55 },
      { id: "SUB-IT-2006", name: "Environmental Studies 7", course: "B.Tech", batch: "Year 1", credits: 3, type: "Core", lead: "Dr. Arvind Ramesh", progress: 78 },
      { id: "SUB-IT-2007", name: "Workshop Practice 8", course: "B.Tech", batch: "Year 1", credits: 4, type: "Core", lead: "Dr. Priya Sharma", progress: 21 }
    ]
  },

  "Law": {
    courses: ["LLB", "LLM", "BA LLB"],
    stats: { totalStudents: 680, totalFaculty: 22, avgAttendance: "92%", avgCgpa: "7.4" },
    faculty: [
      { id: "FAC-LW-01", name: "Dr. Meera Iyer", role: "Dean of Law", specialization: "Constitutional Law", status: "Active", avatar: "MI" },
      { id: "FAC-LW-02", name: "Mr. Rajesh Khanna", role: "Associate Prof", specialization: "Corporate Law", status: "Active", avatar: "RK" },
      { id: "FAC-LW-03", name: "Ms. Kavita Rao", role: "Asst. Professor", specialization: "Criminal Law", status: "Active", avatar: "KR" },
    ],
    students: [
      { id: "STU-LW-201", name: "Karan Johar", course: "LLB", batch: "Year 1", section: "A", cgpa: "8.1", attendance: "90%", status: "Good" },
      { id: "STU-LW-202", name: "Pooja Hegde", course: "BA LLB", batch: "Year 3", section: "B", cgpa: "9.0", attendance: "95%", status: "Excellent" },
      { id: "STU-LW-203", name: "Rohan Das", course: "LLM", batch: "Year 1", section: "A", cgpa: "6.5", attendance: "70%", status: "Warning" },
    ],
    subjects: [
      { id: "LAW1001", name: "Jurisprudence", course: "LLB", batch: "Year 1", credits: 4, type: "Core", lead: "Dr. Meera Iyer", progress: 75 },
      { id: "LAW3005", name: "Company Law", course: "BA LLB", batch: "Year 3", credits: 4, type: "Core", lead: "Mr. Rajesh Khanna", progress: 50 },
      { id: "LAW5002", name: "Advanced Criminal Procedure", course: "LLM", batch: "Year 1", credits: 3, type: "Elective", lead: "Ms. Kavita Rao", progress: 40 },
    ]
  },

  "Commerce": {
    courses: ["B.Com", "M.Com", "BBA"],
    stats: { totalStudents: 1500, totalFaculty: 40, avgAttendance: "85%", avgCgpa: "8.0" },
    faculty: [
      { id: "FAC-CM-01", name: "Dr. Suresh Nanda", role: "Professor", specialization: "Accounting", status: "Active", avatar: "SN" },
      { id: "FAC-CM-02", name: "Dr. Amita Singh", role: "Associate Prof", specialization: "Economics", status: "Active", avatar: "AS" },
      { id: "FAC-CM-03", name: "Mr. Kunal Kapoor", role: "Lecturer", specialization: "Business Studies", status: "On Leave", avatar: "KK" },
    ],
    students: [
      { id: "STU-CM-301", name: "Neha Sharma", course: "B.Com", batch: "Year 2", section: "A", cgpa: "8.8", attendance: "91%", status: "Good" },
      { id: "STU-CM-302", name: "Aman Gupta", course: "BBA", batch: "Year 1", section: "C", cgpa: "5.9", attendance: "65%", status: "Critical" },
      { id: "STU-CM-303", name: "Rashi Khanna", course: "M.Com", batch: "Year 2", section: "A", cgpa: "9.5", attendance: "99%", status: "Excellent" },
    ],
    subjects: [
      { id: "COM2001", name: "Financial Accounting", course: "B.Com", batch: "Year 2", credits: 4, type: "Core", lead: "Dr. Suresh Nanda", progress: 80 },
      { id: "COM1005", name: "Microeconomics", course: "BBA", batch: "Year 1", credits: 3, type: "Core", lead: "Dr. Amita Singh", progress: 65 },
      { id: "COM5001", name: "Strategic Management", course: "M.Com", batch: "Year 2", credits: 4, type: "Elective", lead: "Mr. Kunal Kapoor", progress: 20 },
    ]
  },

  "Science": {
    courses: ["B.Sc", "M.Sc"],
    stats: { totalStudents: 950, totalFaculty: 35, avgAttendance: "89%", avgCgpa: "7.5" },
    faculty: [
      { id: "FAC-SC-01", name: "Dr. CV Raman", role: "HOD Physics", specialization: "Quantum Mechanics", status: "Active", avatar: "CR" },
      { id: "FAC-SC-02", name: "Dr. Homi Bhabha", role: "Professor", specialization: "Nuclear Physics", status: "Active", avatar: "HB" },
      { id: "FAC-SC-03", name: "Dr. APJ Kalam", role: "Visiting Prof", specialization: "Aerospace", status: "Active", avatar: "AK" },
    ],
    students: [
      { id: "STU-SC-401", name: "Srinivas R", course: "B.Sc", batch: "Year 3", section: "A", cgpa: "9.9", attendance: "100%", status: "Excellent" },
      { id: "STU-SC-402", name: "Leelavati M", course: "M.Sc", batch: "Year 1", section: "A", cgpa: "8.4", attendance: "88%", status: "Good" },
    ],
    subjects: [
      { id: "PHY3001", name: "Quantum Physics", course: "B.Sc", batch: "Year 3", credits: 4, type: "Core", lead: "Dr. CV Raman", progress: 95 },
      { id: "PHY5002", name: "Astrophysics", course: "M.Sc", batch: "Year 1", credits: 3, type: "Elective", lead: "Dr. APJ Kalam", progress: 50 },
    ]
  },

  "Social Science": {
    courses: ["BA", "MA", "MSW"],
    stats: { totalStudents: 1100, totalFaculty: 28, avgAttendance: "82%", avgCgpa: "7.1" },
    faculty: [
      { id: "FAC-SS-01", name: "Dr. Amartya Sen", role: "Senior Prof", specialization: "Development Econ", status: "Active", avatar: "AS" },
      { id: "FAC-SS-02", name: "Ms. Arundhati Roy", role: "Lecturer", specialization: "Literature", status: "Active", avatar: "AR" },
    ],
    students: [
      { id: "STU-SS-501", name: "Kiran Desai", course: "BA", batch: "Year 2", section: "B", cgpa: "8.2", attendance: "80%", status: "Good" },
      { id: "STU-SS-502", name: "Amitav Ghosh", course: "MA", batch: "Year 2", section: "A", cgpa: "7.5", attendance: "75%", status: "Warning" },
    ],
    subjects: [
      { id: "SOC2001", name: "Indian Literature", course: "BA", batch: "Year 2", credits: 3, type: "Core", lead: "Ms. Arundhati Roy", progress: 60 },
      { id: "SOC4005", name: "Welfare Economics", course: "MA", batch: "Year 2", credits: 4, type: "Elective", lead: "Dr. Amartya Sen", progress: 40 },
    ]
  },

  "Management": {
    courses: ["MBA", "PGDM"],
    stats: { totalStudents: 500, totalFaculty: 18, avgAttendance: "95%", avgCgpa: "8.2" },
    faculty: [
      { id: "FAC-MG-01", name: "Dr. Raghuram R", role: "Dean", specialization: "Finance", status: "Active", avatar: "RR" },
      { id: "FAC-MG-02", name: "Mr. Ratan T", role: "Guest Lecturer", specialization: "Leadership", status: "Active", avatar: "RT" },
    ],
    students: [
      { id: "STU-MG-601", name: "Mukesh A", course: "MBA", batch: "Year 2", section: "A", cgpa: "8.9", attendance: "96%", status: "Excellent" },
      { id: "STU-MG-602", name: "Gautam A", course: "PGDM", batch: "Year 1", section: "B", cgpa: "7.9", attendance: "90%", status: "Good" },
    ],
    subjects: [
      { id: "MGT6001", name: "Corporate Finance", course: "MBA", batch: "Year 2", credits: 4, type: "Core", lead: "Dr. Raghuram R", progress: 88 },
      { id: "MGT5002", name: "Strategic Leadership", course: "PGDM", batch: "Year 1", credits: 3, type: "Core", lead: "Mr. Ratan T", progress: 100 },
    ]
  }
};
