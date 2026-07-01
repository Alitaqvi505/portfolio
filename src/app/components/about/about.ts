import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  question: string = '';
  answer: string = '';
  loading: boolean = false;

  ask(): void {

    if (!this.question.trim()) {
      this.answer = 'Please enter a question.';
      return;
    }

    this.loading = true;

    setTimeout(() => {

      const q = this.question.toLowerCase();

      // Experience
      if (q.includes('experience')) {

        this.answer =
          'Ali Imran is a Full Stack .NET Developer and aspiring AI Engineer with over 5 years of professional software development experience. He has worked on enterprise-level applications using ASP.NET Core, Angular, SQL Server, REST APIs, Microservices, and cloud-based solutions.';

      }

      // Skills
      else if (
        q.includes('skills') ||
        q.includes('skill') ||
        q.includes('technology') ||
        q.includes('technologies')
      ) {

        this.answer =
          'Ali Imran specializes in ASP.NET Core, C#, .NET, Angular, SQL Server, REST APIs, Entity Framework Core, JavaScript, TypeScript, HTML, CSS, Microservices, Git, Azure, Python, Artificial Intelligence, Agentic AI, Machine Learning, RAG, and Large Language Models (LLMs).';

      }

      // AI
      else if (
        q.includes('ai') ||
        q.includes('artificial intelligence') ||
        q.includes('agentic')
      ) {

        this.answer =
          'Ali is currently expanding his expertise in Artificial Intelligence, Agentic AI, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), AI Agents, LangChain, LangGraph, FastAPI, and Python. His goal is to build intelligent AI-powered SaaS products.';

      }

      // Projects
      else if (
        q.includes('project') ||
        q.includes('projects')
      ) {

        this.answer =
          'Ali has contributed to enterprise solutions including Telenor Tracker, Magic Box, Apollo, Biometric Verification System (BVS), Employee Management System, and modern Angular/.NET applications. He is currently building AI-powered applications and intelligent software agents.';

      }

      // Company
      else if (
        q.includes('company') ||
        q.includes('companies') ||
        q.includes('systems limited') ||
        q.includes('telenor')
      ) {

        this.answer =
          'Ali has worked at Telenor Pakistan and Systems Limited, contributing to enterprise software development, microservices, third-party integrations, biometric verification systems, and business-critical applications.';

      }

      // .NET
      else if (
        q.includes('.net') ||
        q.includes('asp.net') ||
        q.includes('c#')
      ) {

        this.answer =
          'Ali has extensive experience in ASP.NET Core, C#, Entity Framework Core, Web APIs, SQL Server, Authentication, Authorization, Dependency Injection, Microservices, and enterprise application development.';

      }

      // Angular
      else if (
        q.includes('angular')
      ) {

        this.answer =
          'Ali develops responsive front-end applications using Angular, TypeScript, HTML, CSS, Bootstrap, and REST APIs. He has built enterprise dashboards, business applications, and full-stack solutions.';

      }

      // Education
      else if (
        q.includes('education') ||
        q.includes('degree') ||
        q.includes('study')
      ) {

        this.answer =
          'Ali Imran holds a Bachelor\'s degree in Computer Science. Alongside his academic background, he has published research papers and continues to advance his expertise in Artificial Intelligence and modern software engineering.';

      }

      // Career Goal
      else if (
        q.includes('goal') ||
        q.includes('future') ||
        q.includes('vision')
      ) {

        this.answer =
          'Ali\'s long-term vision is to establish a global software company focused on AI-powered SaaS products, intelligent automation, enterprise software solutions, and Agentic AI applications.';

      }

      // Contact
      else if (
        q.includes('contact') ||
        q.includes('linkedin') ||
        q.includes('email')
      ) {

        this.answer =
          'You can connect with Ali Imran through his LinkedIn profile using the "Connect on LinkedIn" button above or reach out through the Contact section of this portfolio.';

      }

      // Default
      else {

        this.answer =
          'Ali Imran is a passionate Full Stack .NET Developer and aspiring AI Engineer with over 5 years of professional experience. He specializes in enterprise software development, Artificial Intelligence, Agentic AI, Machine Learning, RAG, and Large Language Models, with a vision to build innovative AI-powered SaaS products and establish a global software company.';

      }

      this.loading = false;

    }, 1200);

  }

}