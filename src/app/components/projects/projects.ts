import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
  {
  title: 'Movie Recommendation System',
  position: 'AI agent & Machine Learning',
  description: 'Developed an AI-powered movie recommendation system using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). The application provides personalized movie recommendations through semantic search, natural language queries, and contextual reasoning, delivering an intelligent conversational experience.',
  techStack: [
    'Angular',
    'C#',
    '.NET',
    'SQL Server',
    'REST APIs',
    'Python',
    'AI',
    'LLMs',
    'RAG'
  ],
  github: 'https://github.com/Alitaqvi505/Facial-emotion-MovieRecommendation'
},{
  title: 'Fraud Detection Banking Application',
  position: 'AI & Machine Learning',
  description: 'Designed and developed an intelligent banking fraud detection system using Machine Learning algorithms to identify suspicious transactions and minimize financial risks. The application analyzes transaction patterns, detects anomalies in real time, and assists financial institutions in preventing fraudulent activities through predictive analytics.',
  techStack: [
    'Python',
    'Machine Learning',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Flask',
    'REST APIs',
    'SQL Server',
    'AI'
  ],
  github: 'https://github.com/Alitaqvi505/Fraud-Detection-Banking-App'
},
    {
  title: 'Stock Market Prediction',
  position: 'AI & Machine Learning',
  description: 'Developed an AI-powered stock market prediction system using Machine Learning and time-series forecasting techniques to analyze historical stock data and predict future market trends. The application leverages data preprocessing, feature engineering, and predictive models to generate data-driven investment insights and improve decision-making.',
  techStack: [
    'Python',
    'Machine Learning',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'TensorFlow',
    'Matplotlib',
    'REST APIs',
    'AI'
  ],
  github: 'https://github.com/Alitaqvi505/Stock-Market-Prediction'
},
   {
  title: 'SME Loan Risk Prediction',
  position: 'AI & Machine Learning',
  description: 'Built an AI-powered SME loan risk prediction platform that leverages advanced machine learning models to evaluate applicant credit risk and estimate the probability of loan default. The system automates risk assessment through feature engineering, predictive analytics, and intelligent classification models, helping financial institutions improve lending decisions and reduce financial risk.',
  techStack: [
    'Python',
    'Machine Learning',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'TensorFlow',
    'Flask',
    'SQL',
    'REST APIs',
    'AI'
  ],
  github: 'https://github.com/Alitaqvi505/SME-Loan-Risk-Prediction'
},
    {
  title: 'NLP Solution for Lancaster University',
  position: ' Natural Language Processing',
  description: 'Designed and developed a Natural Language Processing (NLP) solution for Lancaster University to analyze and interpret textual data using advanced AI techniques. The system leverages text preprocessing, sentiment analysis, named entity recognition, and language understanding models to extract meaningful insights and support intelligent decision-making through automated text analysis.',
  techStack: [
    'Python',
    'Natural Language Processing',
    'BERT',
    'Transformers',
    'Hugging Face',
    'Scikit-learn',
    'Pandas',
    'REST APIs',
    'AI'
  ],
  github: 'https://github.com/Alitaqvi505/NLP-solution-for-lancaster-university'
},
   {
  title: 'Personal Chatting Application',
  position: 'Java Spring Boot',
  description: 'Developed a real-time personal chatting application using Java Spring Boot, enabling secure one-to-one messaging with user authentication, real-time communication, and persistent message storage. The application follows a scalable client-server architecture, providing a responsive and seamless messaging experience through RESTful APIs and modern backend technologies.',
  techStack: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'WebSocket',
    'REST APIs',
    'MySQL',
    'Hibernate',
    'JWT Authentication',
    'Maven',
    'Git'
  ],
  github: 'https://github.com/Alitaqvi505/Personal-Chatting-App'
},
  ];
}
