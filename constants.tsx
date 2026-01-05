
import { Content, Project } from './types.ts';
import { 
  HtmlIcon, CssIcon, JsIcon, ReactIcon, TailwindIcon, 
  NodeIcon, BootstrapIcon, FlaskIcon 
} from './components/BrandIcons';
import { 
  Github, Figma, FileSpreadsheet, Terminal, Chrome,
  Database, Server, Layout
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 6,
    title: "Heimdall Power",
    description: "Digitizing the power grid to increase capacity and reliability using advanced sensors and software.",
    tech: ["Next.js", "WebGL", "TypeScript", "AWS"],
    repoUrl: "#",
    demoUrl: "https://www.heimdallpower.com/",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 7,
    title: "Oakley x Axiom Space",
    description: "A futuristic digital experience showcasing the partnership between Oakley and Axiom Space for space-grade eyewear.",
    tech: ["Vue.js", "Three.js", "GSAP", "WebGL"],
    repoUrl: "#",
    demoUrl: "https://www.oakley.com/en-us/l/axiom-space",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Galaxy vs iPhone Experience",
    description: "An interactive 3D product showcase comparing flagship devices with immersive WebGL visuals.",
    tech: ["React", "Three.js", "WebGL", "GSAP"],
    repoUrl: "#",
    demoUrl: "http://galaxy-versus-iphone.s3-website.eu-west-2.amazonaws.com/",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILLS_DATA = [
  { name: "HTML", icon: HtmlIcon, color: "text-orange-600" },
  { name: "CSS", icon: CssIcon, color: "text-blue-600" },
  { name: "JavaScript", icon: JsIcon, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: TailwindIcon, color: "text-cyan-500" },
  { name: "React", icon: ReactIcon, color: "text-blue-400" },
  { name: "Bootstrap", icon: BootstrapIcon, color: "text-purple-600" },
  { name: "Node.js", icon: NodeIcon, color: "text-green-600" },
  { name: "Flask", icon: FlaskIcon, color: "text-gray-700 dark:text-gray-300" },
];

export const TOOLS_DATA = [
  { name: "GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "VS Code", icon: Terminal },
  { name: "DevTools", icon: Chrome },
];

export const CONTENT: Record<'en' | 'ar', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      tools: "Tools",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Mohamed — Software Engineer & Product Builder",
      headline: "Crafting Digital Products with Purpose",
      subheadline: "I don’t just write code—I engineer solutions. Bridging the gap between technical complexity and user-centric design.",
      cta: "More About Me",
    },
    about: {
      title: "About Me",
      text: "I am a passionate builder who sees code as a tool to solve real-world problems. With a background in full-stack development and a product-first mindset, I focus on creating scalable, efficient, and intuitive applications. My journey isn't just about learning syntaxes; it's about understanding the 'why' behind every feature I build.\n\nI thrive at the intersection of engineering and design, believing that technical excellence must be matched by superior user experience. Whether optimizing backend architecture or refining frontend interactions, I bring a holistic, detail-oriented approach to every product I craft.",
      stats: [
        { label: "Years Exp", value: "5+" },
        { label: "Projects", value: "30+" },
        { label: "Clients", value: "15+" },
      ]
    },
    skills: {
      title: "Technical Arsenal",
      subtitle: "Languages and frameworks I use to bring ideas to life.",
    },
    tools: {
      title: "Workflow & Tools",
      subtitle: "The environment where efficient development happens.",
    },
    projects: {
      title: "Featured Work",
      subtitle: "A selection of products built with precision and passion.",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      items: PROJECTS 
    },
    contact: {
      title: "Let's Build Together",
      subtitle: "Have a project in mind? Let's discuss how we can create value.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "How can I help you?",
      sendButton: "Send Message",
      successMessage: "Message sent successfully!",
    },
    book: {
      close: "Close Book",
      next: "Next Page",
      prev: "Previous Page",
      pages: [
        {
          title: "Introduction",
          content: "Hi, I'm Mohamed.\n\nI am not just a developer; I am a creator at heart. My passion lies in transforming abstract ideas into tangible, high-performance digital products. I believe that software is the modern-day craftsmanship, where every line of code contributes to a larger narrative of utility and beauty."
        },
        {
          title: "My Journey",
          content: "My path wasn't linear. It started with a simple curiosity: 'How does this work?'\n\nThat curiosity led me down the rabbit hole of computer science. From my first 'Hello World' to architecting complex distributed systems, I have always pushed myself to learn more. I treat every bug as a lesson and every project as a milestone in my continuous growth."
        },
        {
          title: "Vision & Goals",
          content: "I aim to bridge the gap between human intent and machine execution.\n\nMy goal is to build products that are not only functional but delightful. I aspire to lead teams that challenge the status quo, innovating in ways that make technology more accessible, intuitive, and impactful for everyone."
        }
      ]
    },
    footer: {
      copyright: "© 2025 Developed by Mohamed Ayman",
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      tools: "الأدوات",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    hero: {
      role: "محمد — مهندس برمجيات ومطور منتجات",
      headline: "أصنع منتجات رقمية ذات قيمة",
      subheadline: "أنا لا أكتب الأكواد فحسب، بل أبني حلولاً متكاملة. أربط بين التعقيد التقني وتجربة المستخدم المتميزة.",
      cta: "المزيد عني",
    },
    about: {
      title: "نبذة عني",
      text: "أنا مطور شغوف أرى البرمجة كأداة لحل مشاكل العالم الحقيقي. بفضل خبرتي في تطوير الويب الشامل وعقليتي التي تركز على المنتج، أركز على إنشاء تطبيقات قابلة للتطوير وفعالة وسهلة الاستخدام. رحلتي لا تتعلق فقط بتعلم لغات البرمجة، بل بفهم 'السبب' وراء كل ميزة أقوم ببنائها.\n\nأزدهر في نقطة الالتقاء بين الهندسة والتصميم، مؤمناً بأن التميز التقني يجب أن يقترن بتجربة مستخدم فائقة. سواء كان الأمر يتعلق بتحسين هيكلية الخلفية البرمجية أو صقل واجهات المستخدم، فإنني أقدم نهجاً شمولياً يهتم بأدق التفاصيل في كل منتج أصنعه.",
      stats: [
        { label: "سنوات خبرة", value: "+5" },
        { label: "مشاريع", value: "+30" },
        { label: "عملاء", value: "+15" },
      ]
    },
    skills: {
      title: "الترسانة التقنية",
      subtitle: "اللغات وأطر العمل التي أستخدمها لتحويل الأفكار إلى واقع.",
    },
    tools: {
      title: "أدوات العمل",
      subtitle: "البيئة التي يتم فيها التطوير بكفاءة.",
    },
    projects: {
      title: "أعمال مميزة",
      subtitle: "مختارات من المنتجات التي تم بناؤها بدقة وشغف.",
      viewCode: "الكود المصدري",
      liveDemo: "عاين المشروع",
      items: PROJECTS 
    },
    contact: {
      title: "لنعمل معاً",
      subtitle: "لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا خلق قيمة مضافة.",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "كيف يمكنني مساعدتك؟",
      sendButton: "إرسال الرسالة",
      successMessage: "تم إرسال الرسالة بنجاح!",
    },
    book: {
      close: "إغلاق الكتاب",
      next: "الصفحة التالية",
      prev: "الصفحة السابقة",
      pages: [
        {
          title: "مقدمة",
          content: "أهلاً، أنا محمد.\n\nلست مجرد مطور؛ أنا مبدع في جوهري. يكمن شغفي في تحويل الأفكار المجردة إلى منتجات رقمية ملموسة وعالية الأداء. أؤمن أن البرمجة هي الحرفة الحديثة، حيث تساهم كل سطر من التعليمات البرمجية في قصة أكبر من الفائدة والجمال."
        },
        {
          title: "رحلتي",
          content: "لم يكن طريقي خطياً. بدأ الأمر بفضول بسيط: 'كيف يعمل هذا؟'\n\nقادني هذا الفضول إلى عالم علوم الكمبيوتر. من أول برنامج 'Hello World' إلى هندسة الأنظمة الموزعة المعقدة، كنت أدفع نفسي دائماً لتعلم المزيد. أتعامل مع كل خطأ كدرس وكل مشروع كإنجاز في نموي المستمر."
        },
        {
          title: "الرؤية والأهداف",
          content: "أهدف إلى سد الفجوة بين النية البشرية والتنفيذ الآلي.\n\nهدفي هو بناء منتجات ليست وظيفية فحسب، بل مبهجة. أطمح لقيادة فرق تتحدى الوضع الراهن، وتبتكر بطرق تجعل التكنولوجيا أكثر سهولة وبديهية وتأثيراً للجميع."
        }
      ]
    },
    footer: {
      copyright: "© 2025 تم التطوير بواسطة محمد أيمن",
    }
  }
};
