import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.scss']
})
export class ChatComponentComponent {
  title = 'resume-creator';
  countOfanswer = 0;
  answerCount: any = [0];
  questionsAndUsersResponse = [
    {
      type: "summary",
      question: 'Please give a brief summary that highlights your career goals and the value you can bring to a potential employer',
      answer: '',
      skipped: false
    },
    {
      type: 'skills',
      question: 'Skills: List relevant skills, both technical (e.g., programming languages, software) and soft skills (e.g., communication, teamwork).',
      answer: '',
      skipped: false
    },
    {
      type: 'Experience',
      id: 'exp1',
      question: 'Experience: Detail your work history in reverse chronological order. Include the company name, your job title, dates of employment, and a description of your responsibilities and accomplishments.',
      answer: '',
      skipped: false,
      fields: [{ name: 'Job Title', key: 'jobTitle', value: '', type: 'text' }, { name: 'Employer', key: 'employer', value: '', type: 'text' }, { name: 'Start Date', key: 'startDate', value: '', type: 'date' }, { name: 'End Date', key: 'endDate', value: '', type: 'date' }]
    },
    {
      type: 'Education',
      question: 'Education: Provide information about your educational background, including degrees earned, institutions attended, and graduation dates.',
      answer: '',
      skipped: false,
      fields: [{ name: 'School', key: 'school', value: '', type: 'text' }, { name: 'Degree', key: 'degree', value: '', type: 'text' }, { name: 'Start Date', key: 'gradStartDate', value: '', type: 'date' }, { name: 'End Date', key: 'gradEndDate', value: '', type: 'date' }]

    },
    {
      type: 'Projects',
      question: 'Projects: Showcase relevant projects you have worked on, particularly if they demonstrate your skills and experience in the field.',
      answer: '',
      skipped: false,
      fields: [{ name: 'Project Name', key: 'projectName', value: '', type: 'text' }, { name: 'Start Date', key: 'projectStartDate', value: '', type: 'date' }, { name: 'End Date', key: 'projectEndDate', value: '', type: 'date' }]

    },
    {
      type: 'Certifications',
      question: "Certifications: Include any certifications or training that are relevant to the position you're applying for.",
      answer: '',
      skipped: false,
      fields: [{ name: 'Certification Name', key: 'certificationName', value: '', type: 'text' }, { name: 'Start Date', key: 'certificatioStartDate', value: '', type: 'date' }, { name: 'End Date', key: 'certificatioEndDate', value: '', type: 'date' }]

    },
    // {
    //   type: 'Awards',
    //   question: "Awards and Achievements: Highlight any honors, awards, or recognition you've received in your career.",
    //   answer: '',

    // },
    {
      type: 'Hobbies',
      question: "Hobbies: What do you like?",
      answer: '',
      skipped: false,
    },
    {
      type: 'Languages',
      question: "Languages: List any languages you're proficient in, especially if they're relevant to the job.",
      answer: '',
      skipped: false
    },
    {
      type: 'contactInfo',
      question: "Contact Information: Include your name, phone number, email address, and location",
      answer: '',
      skipped: false,
      fields: [{ name: 'Name', key: 'userName', value: '', type: 'text' }, { name: 'Phone number', key: 'phoneNumber', value: '', type: 'text' }, { name: 'Email address', key: 'emailAddress', value: '', type: 'text' }, { name: 'Location', key: 'location', value: '', type: 'text' }]
    }
  ]
  showPDF: boolean = false;
  groupedObjects: any;
  constructor(private router: Router) {

  }
  sendResponse(answer: any) {
    const questionType = this.questionsAndUsersResponse[this.countOfanswer].type;
    if (questionType == 'contactInfo') {
      answer = answer.split(',');
    }
    this.questionsAndUsersResponse[this.countOfanswer].answer = answer;
    this.countOfanswer++;
    this.answerCount.push(this.countOfanswer);
    if (this.countOfanswer == this.questionsAndUsersResponse.length) {
      this.processTheData();

    }
  }
  continueToAddMore(type: any, answer: string) {
    const objectToInsert = structuredClone(this.questionsAndUsersResponse[this.countOfanswer]);
    objectToInsert.question = 'Add one more ' + objectToInsert.type?.toLowerCase();
    this.sendResponse(answer);
    this.questionsAndUsersResponse.splice(this.countOfanswer, 0, objectToInsert);
  }

  processTheData() {
    this.groupedObjects = this.questionsAndUsersResponse.reduce((grouped: any, item: any) => {
      const { type } = item;
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(item);
      return grouped;
    }, {});
    // this.showPDF = true;
    const navigationExtras: NavigationExtras = {
      state: this.groupedObjects
    };
    this.router.navigate(['./resume'], navigationExtras);
  }

  skipQuestion() {
    this.questionsAndUsersResponse[this.countOfanswer].skipped = true;
    this.countOfanswer++;
    this.answerCount.push(this.countOfanswer);
  }
}
