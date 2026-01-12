import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  inject
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, ScrollAnimationDirective, TiltDirective, MagneticDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  themeService = inject(ThemeService); 
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef); 

  // Mouse Spotlight State
  spotlightStyle = {
    background: 'radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)'
  };
  
  // Scroll Progress
  scrollProgress = '0%';

  dynamicText: HTMLSpanElement | null | undefined;
  words: string[] = ['Ravi Parmar', 'Developer', 'Engineer ', 'Programmer'];
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  isServiceVisiable: boolean = false;

  hideNavbar: boolean = false;
  prevScrollPos: number = window.pageYOffset;

  services = [
    {
      header: 'Scalable Web Architecture',
      desc: 'Architecting and building high-performance, scalable web applications using modern stacks (MEAN/MERN). Focusing on component modularity, state management, and optimized rendering.',
      icon: 'bi-window-plus',
    },
    {
      header: 'Enterprise Backend Systems',
      desc: 'Designing robust API ecosystems and microservices with Node.js and Express. ensuring secure authentication (JWT/OAuth), rate limiting, and database integrity.',
      icon: 'bi-server',
    },
    {
      header: 'Cross-Platform Desktop Apps',
      desc: 'Engineering efficient, offline-first desktop solutions using Electron.js and Angular. bridging the gap between web versatility and native performance.',
      icon: 'bi-laptop',
    },
    {
      header: 'API Integration & Strategy',
      desc: 'Seamlessly integrating third-party services (Stripe, Shift4, CRM tools) and designing RESTful/GraphQL APIs that form the backbone of connected business systems.',
      icon: 'bi-diagram-3',
    },
    {
      header: 'Real-Time Data Solutions',
      desc: 'Implementing WebSocket architecture for instant data synchronization, live notifications, and collaborative features in critical business applications.',
      icon: 'bi-broadcast-pin',
    },
    {
      header: 'Database Performance Tuning',
      desc: 'Optimizing schema design and query performance for MongoDB and SQLite. Ensuring data consistency, indexing strategies, and high availability.',
      icon: 'bi-database-gear',
    },
  ];

  works = [
    {
      header: 'HotelPro PMS',
      desc: 'A comprehensive Property Management System streamlining hotel operations. Automated reservations, real-time room inventory, and complex billing logic. Reduced manual check-in time by 40%.',
      img: 'hotelprodash',
      githubLink: '#',
      liveLink: '#',
    },
    {
      header: 'EZY-HR Enterprise',
      desc: 'Full-suite HR management platform handling payroll, attendance, and performance tracking. Features role-based access control (RBAC) and automated compliance reporting.',
      img: 'hr',
      githubLink: '#',
      liveLink: '#'
    },
    {
      header: 'Alfa Desktop Transport',
      desc: 'Offline-capable Electron application for logistics management. syncs data seamlessly when online. Managed large local SQLite datasets with high performance.',
      img: 'alfadash',
      githubLink: '#',
      liveLink: '#'
    },
    {
      header: 'Footmate E-Commerce',
      desc: 'High-conversion B2B/B2C footwear marketplace. Implemented advanced filtering, recommendation algorithms, and secure payment processing.',
      img: 'footmate',
      githubLink: '#',
      liveLink: '#'
    },
    {
      header: 'Crypto Analytics Tracker',
      desc: 'Real-time cryptocurrency visualization dashboard. Consumes multiple websocket streams to provide sub-second price updates and market analysis tools.',
      img: 'cryptoapp',
      githubLink: '#',
      liveLink: '#'
    },
    {
      header: 'AI-Powered Chatbot',
      desc: 'NLP-driven navigational assistant for enterprise dashboards. Context-aware responses reduced support ticket volume by 25%.',
      img: 'chatbot',
      githubLink: '#',
      liveLink: '#'
    },
  ];
  about = {
    details: ` I'm a Software Developer with over 3 years of experience in
              Node.js and Angular, specializing in building and managing both
              frontend and backend systems for web applications. My expertise
              includes payment gateway integrations (Stripe, Shift4 UTG),
              real-time notifications (WebSockets), database optimization
              (MongoDB, SQLite), and enterprise software development for
              industries like property management, HR & payroll, legal tech, and
              construction management. I enjoy solving complex problems,
              optimizing APIs, and creating scalable, industry-level
              architectures. I also share my knowledge with the developer
              community through my projects and insights. Feel free to connect
              with me on LinkedIn—I'm open to collaborations, freelance
              opportunities, and roles where I can contribute, learn, and grow.
              If you have an opportunity that aligns with my skills, don't
              hesitate to reach out! 🚀`,
    skills: [
      {
        name: 'Angular',
        value: '90%',
      },
      {
        name: 'Node Js',
        value: '80%',
      },
      {
        name: 'Python',
        value: '85%',
      },
      {
        name: 'React Js',
        value: '70%',
      },
      {
        name: 'C++',
        value: '65%',
      },
      {
        name: 'HTML',
        value: '90%',
      },
    ],
    experinces: [
      {
        post: 'Frontend Intern',
        time: '(May 2022- Oct 2022)',
        value: `Developed Angular pages with a focus on component-based
                  architecture and responsive design. Improved UI/UX and
                  optimized application performance for better user experience.
                  Continuously learned and enhanced expertise in frontend
                  technologies such as Angular, TypeScript, and JavaScript.`,
      },
      {
        post: 'Mean Stack Developer',
        time: '(Sep 2022- Oct 2023)',
        value: `Designed and developed scalable web applications using
                  MongoDB, Express.js, Angular, and Node.js. Implemented payment
                  gateway integrations like Stripe and Shift4 UTG, ensuring
                  secure transactions. Developed real-time notifications using
                  WebSockets, enhancing system responsiveness. Focused on API
                  development, database optimization, and system efficiency
                  improvements.`,
      },
      {
        post: 'Software Developer',
        time: '(Oct 2023- Present)',
        value: `Oversaw third-party integration (Channex, STAAH) for seamless
                  data synchronization. Led chatbox feature development and
                  managed project timelines to enhance system reliability and
                  scalability. Spearheaded innovative feature development,
                  ensuring timely delivery and improving overall system
                  performance.`,
      },
    ],
    educations: [
      {
        post: 'B.Tech(Electronics)',
        time: '(2018-2022)',
        value: `College - Birla Vishwakarma Mahavidhyalaya`,
      },
    ],
  };
  contactDetails = {
    email: 'Raviparmar@2288.com',
    phone: '+918160176898',
    linkedin: 'https://www.linkedin.com/in/ravi-parmar-706387210',
    instagram: 'https://www.instagram.com/_.ravi.parmar._/',
    whatsapp: 'https://api.whatsapp.com/send?phone=918160176898',
    facebook:
      'https://www.facebook.com/profile.php?id=100041959655163&mibextid=ZbWKwL',
    cv: '/assets/Images/my-cv.pdf',
    name: 'Ravi Parmar',
    github: 'https://github.com/masterravi01',
  };

  ngOnInit(): void {
    this.dynamicText = document.querySelector<HTMLSpanElement>('#dynamic-text');
    this.typeEffect();
    this.setupMouseTrail();

    // Setup Contact Form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwFnbOaZui6s-X1d_UhygyKcnnQE6flw9KJTkGk8Mnu_ixopzqNrGDIRaMd4hzCNS_H/exec';
    const form = document.querySelector('form[name="submit-to-google-sheet"]') as HTMLFormElement;
    const msg = document.getElementById('msg');

    if (msg && form) {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response: Response) => {
            msg.innerHTML = 'Thank you. Your message has been sent securely.';
            setTimeout(() => { msg.innerHTML = ''; }, 5000);
            form.reset();
          })
          .catch((error: Error) => console.error('Error!', error.message));
      });
    }
  }

  setupMouseTrail() {
    // Simple mouse trail using CSS variables for performance
    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        document.body.style.setProperty('--mouse-x', `${x}px`);
        document.body.style.setProperty('--mouse-y', `${y}px`);
    });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos || currentScrollPos < 50) {
      this.hideNavbar = false;
    } else {
      this.hideNavbar = true;
    }
    this.prevScrollPos = currentScrollPos;
  }

  typeEffect(): void {
    const currentWord: string = this.words[this.wordIndex];
    const currentChar: string = currentWord.substring(0, this.charIndex);
    if (this.dynamicText) this.dynamicText.textContent = currentChar;

    if (!this.isDeleting && this.charIndex < currentWord.length) {
      this.charIndex++;
      setTimeout(() => this.typeEffect(), 200);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.charIndex--;
      setTimeout(() => this.typeEffect(), 100);
    } else {
      this.isDeleting = !this.isDeleting;
      this.wordIndex = !this.isDeleting
        ? (this.wordIndex + 1) % this.words.length
        : this.wordIndex;
      setTimeout(() => this.typeEffect(), 1200);
    }
  }

  scrollTo(section: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
  opentab(tabname: string, event: Event) {
    const tablinks = document.querySelectorAll('.links');
    tablinks.forEach((link) => link.classList.remove('link-active'));
    const tabcont = document.querySelectorAll('.tab-contents');
    tabcont.forEach((tab) => tab.classList.remove('active-tab'));
    (event.target as HTMLElement).classList.add('link-active');
    const targetTab = document.getElementById(tabname);
    if (targetTab) {
      targetTab.classList.add('active-tab');
    }
  }

  closeNav() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.right = '-200px';
    }
  }
  openNav() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.right = '0';
    }
  }
}
