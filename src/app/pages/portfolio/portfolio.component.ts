import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  isDarkMode = false;
  @ViewChild('circle') circleElement!: ElementRef;
  dynamicText: HTMLSpanElement | null | undefined;
  words: string[] = ['Ravi Parmar', 'Developer', 'Engineer ', 'Programmer'];
  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  isServiceVisiable: boolean = false;
  @HostBinding('style.--background-color')
  backgroundColor: string = '#000';
  @HostBinding('style.--text-color')
  textColor: string = '#fff';
  @HostBinding('style.--card-color')
  cardColor: string = '#262626';

  hideNavbar: boolean = false;
  prevScrollPos: number = window.pageYOffset;

  services = [
    {
      header: 'Custom Software Development',
      desc: 'Tailored solutions crafted to meet your unique business needs,leveraging cutting-edge technologies and best practices to drive innovation and efficiency in your operations.',
      icon: 'bi-window-plus',
    },
    {
      header: 'Full-Stack Web Development ',
      desc: 'Expert in building scalable and high-performance web applications using MongoDB, Express.js, Angular, and Node.js, ensuring seamless user experiences and robust backend functionalities.',
      icon: 'bi-phone-flip',
    },
    {
      header: 'Desktop Application Development ',
      desc: 'Building offline and cross-platform desktop applications using Electron.js with Angular, tailored for businesses requiring local software solutions.',
      icon: 'bi-file-earmark-code',
    },
    {
      header: 'API Development & Integration',
      desc: 'Designing and integrating RESTful APIs and third-party services to enhance functionality, optimize workflows, and ensure secure and efficient data exchange.',
      icon: 'bi-file-earmark-code',
    },
    {
      header: 'Payment Gateway Integration',
      desc: 'Seamless payment processing with Stripe, Shift4 UTG, Razorpay, and other payment solutions, ensuring secure and efficient transactions.',
      icon: 'bi-file-earmark-code',
    },
    {
      header: 'Real-Time Features & Notifications',
      desc: 'Implementing WebSockets, chat systems, and instant notifications to enhance user engagement and system responsiveness.',
      icon: 'bi-file-earmark-code',
    },
    {
      header: 'Database Design & Optimization',
      desc: 'Efficient MongoDB and SQLite database design, performance optimization, and data management for high-speed and scalable applications.',
      icon: 'bi-file-earmark-code',
    },

    {
      header: 'CRM & PMS Solutions',
      desc: 'Developing feature-rich Customer Relationship Management (CRM) and Property Management System (PMS) solutions, tailored to enhance business operations and customer interactions.',
      icon: 'bi-file-earmark-code',
    },
  ];
  works = [
    {
      header: 'HotelPro PMS',
      desc: 'Built a comprehensive property management system (PMS) for the hospitality industry, enabling seamless reservations, front desk operations, billing, and real-time availability tracking. Integrated third-party booking platforms for enhanced connectivity and automated workflow management.',
      img: 'hotelprodash',
    },
    {
      header: 'EZY-HR Software',
      desc: 'Designed and implemented a robust HR management system to streamline employee data management, payroll processing, attendance tracking, and performance evaluation. Integrated role-based access control and automated reporting for enhanced efficiency and compliance.',
      img: 'hr',
    },
    {
      header: 'Transport Desktop Software',
      desc: 'Developed offline-capable desktop applications for various business needs, leveraging Electron.js and SQLite. Designed user-friendly interfaces with efficient data handling, ensuring smooth performance and data security across multiple operating system',
      img: 'alfadash',
    },
    {
      header: 'Footmate E-commerce Website',
      desc: 'Crafted a versatile B2B and B2C e-commerce platform specialized for footwear, providing seamless shopping, personalized recommendations, and secure transactions',
      img: 'footmate',
    },
    {
      header: 'Crypto-Tracker Application',
      desc: 'Built a state-of-the-art cryptocurrency tracker for real-time monitoring and analysis, empowering users with valuable insights and investment recommendations.',
      img: 'cryptoapp',
    },
    {
      header: 'Chatbot Development',
      desc: ' Developed an AI-driven chatbot for natural language interactions, offering instant assistance and personalized recommendations, enhancing user experience and efficiency.',
      img: 'chatbot',
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
    name: 'Ravikumar Parmar',
  };
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.dynamicText = document.querySelector<HTMLSpanElement>('h1 span');
    this.typeEffect();
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwFnbOaZui6s-X1d_UhygyKcnnQE6flw9KJTkGk8Mnu_ixopzqNrGDIRaMd4hzCNS_H/exec';
    const form = document.querySelector(
      'form[name="submit-to-google-sheet"]'
    ) as HTMLFormElement;
    const msg = document.getElementById('msg');

    if (msg) {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response: Response) => {
            msg.innerHTML = 'Message Sent Successfully!';
            setTimeout(() => {
              msg.innerHTML = '';
            }, 5000);
            form.reset();
            console.log('Success!', response);
          })
          .catch((error: Error) => console.error('Error!', error.message));
      });
    } else {
      console.error("Element with id 'msg' not found.");
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPos = window.scrollY;
    const rotation = scrollPos / 5;
    this.circleElement.nativeElement.style.transform = `rotate(${rotation}deg)`;
    const box = document.querySelector('.tab-titles');
    const abouttab = document.getElementById('about');
    if (abouttab) {
      const aboutPosition = abouttab.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (aboutPosition + 280 < screenHeight) {
        const targetTab1 = document.querySelector('.about-col-1');
        if (targetTab1) {
          targetTab1.classList.add('about-animation-1');
        }
        const targetTab2 = document.querySelector('.about-col-2');
        if (targetTab2) {
          targetTab2.classList.add('about-animation-2');
        }
      }
    }
    if (box) {
      const boxPosition = box.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (boxPosition + 50 < screenHeight) {
        const activeLink = document.querySelector(
          '.link-active'
        ) as HTMLElement;
        if (activeLink) {
          const targetTab = document.getElementById(
            activeLink.innerText.toLowerCase()
          );
          if (targetTab) {
            targetTab.classList.add('active-tab');
          }
        }
      }
    }

    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos || currentScrollPos === 0) {
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
  changeTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // const hostElement = this.elementRef.nativeElement;
    if (this.isDarkMode) {
      this.backgroundColor = '#fff';
      this.textColor = '#000';
      this.cardColor = '#D3D3D3';
    } else {
      this.backgroundColor = '#000';
      this.textColor = '#fff';
      this.cardColor = '#262626';
    }
  }

  scrollTo(section: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${section}`);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
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
