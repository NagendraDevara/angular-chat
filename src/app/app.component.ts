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
      question: 'Please give a brief summary that highlights your career goals and the value you can bring to a potential employer',
      answer: '',
    },
    {
      question: 'Skills: List relevant skills, both technical (e.g., programming languages, software) and soft skills (e.g., communication, teamwork).',
      answer: '',
    },
    {
      question: 'Experience: Detail your work history in reverse chronological order. Include the company name, your job title, dates of employment, and a description of your responsibilities and accomplishments.',
      answer: '',
    },
    {
      question: 'Education: Provide information about your educational background, including degrees earned, institutions attended, and graduation dates.',
      answer: '',
    },
    {
      question: 'Projects: Showcase relevant projects you have worked on, particularly if they demonstrate your skills and experience in the field.',
      answer: '',
    },
    {
      question: "Certifications: Include any certifications or training that are relevant to the position you're applying for.",
      answer: '',
    },
    {
      question: "Awards and Achievements: Highlight any honors, awards, or recognition you've received in your career.",
      answer: '',
    },
    {
      question: "Publications or Presentations: If applicable, mention any articles, research papers, or presentations you've contributed to.",
      answer: '',
    },
    {
      question: "Languages: List any languages you're proficient in, especially if they're relevant to the job.",
      answer: '',
    },
    {
      question: "Interests: Include hobbies or interests that showcase your personality and potential cultural fit within the company.",
      answer: '',
    },

  ]
  showPDF: boolean =false;

  sendResponse(answer: string) {
    console.log(answer);
    this.questionsAndUsersResponse[this.countOfanswer].answer = answer;
    this.countOfanswer++;
    this.answerCount.push(this.countOfanswer);
    if(this.countOfanswer == this.questionsAndUsersResponse.length){
      this.showPDF=true;
    }
  }
}
