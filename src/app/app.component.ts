import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-creator';
  countOfanswer = 0;
  answerCount: any = [0];
  questionsAndUsersResponse = [
    {
      type: "summary",
      question: 'Please give a brief summary that highlights your career goals and the value you can bring to a potential employer',
      answer: '',
    },
    {
      type: 'skills',
      question: 'Skills: List relevant skills, both technical (e.g., programming languages, software) and soft skills (e.g., communication, teamwork).',
      answer: '',
    },
    {
      type: 'Experience',
      id: 'exp1',
      question: 'Experience: Detail your work history in reverse chronological order. Include the company name, your job title, dates of employment, and a description of your responsibilities and accomplishments.',
      answer: '',
      fields: [{ name: 'Job Title', key: 'jobTitle', value: '', type: 'text' }, { name: 'Employer', key: 'employer', value: '', type: 'text' }, { name: 'Start Date', key: 'startDate', value: '', type: 'date' }, { name: 'End Date', key: 'endDate', value: '', type: 'date' }]
    },
    {
      type: 'Education',
      question: 'Education: Provide information about your educational background, including degrees earned, institutions attended, and graduation dates.',
      answer: '',
      fields: [{ name: 'School', key: 'school', value: '', type: 'text' }, { name: 'Degree', key: 'degree', value: '', type: 'text' }, { name: 'Start Date', key: 'gradStartDate', value: '', type: 'date' }, { name: 'End Date', key: 'gradEndDate', value: '', type: 'date' }]

    },
    {
      type: 'Projects',
      question: 'Projects: Showcase relevant projects you have worked on, particularly if they demonstrate your skills and experience in the field.',
      answer: '',
      fields: [{ name: 'Project Name', key: 'projectName', value: '', type: 'text' }, { name: 'Start Date', key: 'projectStartDate', value: '', type: 'date' }, { name: 'End Date', key: 'projectEndDate', value: '', type: 'date' }]

    },
    {
      type: 'Certifications',
      question: "Certifications: Include any certifications or training that are relevant to the position you're applying for.",
      answer: '',
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
    },
    {
      type: 'Languages',
      question: "Languages: List any languages you're proficient in, especially if they're relevant to the job.",
      answer: '',
    },
    {
      type: 'contactInfo',
      question: "Contact Information: Include your name, phone number, email address, and location",
      answer: '',
    },

  ]
  showPDF: boolean = false;
  groupedObjects:any;;

  sendResponse(answer: any) {
    console.log(answer);
    const questionType = this.questionsAndUsersResponse[this.countOfanswer].type;
    if (questionType == 'contactInfo' || questionType == 'skills' || questionType=='Hobbies') {
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

  processTheData(){
     this.groupedObjects = this.questionsAndUsersResponse.reduce((grouped:any, item:any) => {
      const { type } = item;
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(item);
      return grouped;
    }, {});
    this.showPDF = true;

  }

}
