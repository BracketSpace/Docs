import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type PluginItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
  features: string[];
  link: string;
};

const PluginList: PluginItem[] = [
  {
    title: 'Notification',
    icon: (
      <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="20" fill="#2e8555"/>
        <g transform="translate(50,50)">
          <path d="M75 20c-13.807 0-25 11.193-25 25v20c0 8.284-6.716 15-15 15-2.761 0-5 2.239-5 5s2.239 5 5 5h80c2.761 0 5-2.239 5-5s-2.239-5-5-5c-8.284 0-15-6.716-15-15V45c0-13.807-11.193-25-25-25z" fill="white"/>
          <circle cx="75" cy="95" r="8" fill="white"/>
          <circle cx="95" cy="25" r="6" fill="#ff4444"/>
          <circle cx="105" cy="35" r="4" fill="#ff6666"/>
          <circle cx="102" cy="45" r="3" fill="#ff8888"/>
        </g>
      </svg>
    ),
    description: (
      <>
        Powerful notification system for WordPress. Send automated emails, SMS, 
        webhooks and more based on various triggers in your WordPress site.
      </>
    ),
    features: ['Email & SMS notifications', 'Webhook integration', 'Custom triggers', 'Template system'],
    link: '/notification',
  },
  {
    title: 'Advanced Cron Manager',
    icon: (
      <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="20" fill="#2e8555"/>
        <g transform="translate(50,50)">
          <circle cx="50" cy="50" r="40" fill="white" stroke="none"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="#2e8555" strokeWidth="2"/>
          <text x="50" y="20" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#2e8555">12</text>
          <text x="80" y="55" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#2e8555">3</text>
          <text x="50" y="85" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#2e8555">6</text>
          <text x="20" y="55" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#2e8555">9</text>
          <line x1="50" y1="50" x2="50" y2="30" stroke="#2e8555" strokeWidth="3" strokeLinecap="round"/>
          <line x1="50" y1="50" x2="65" y2="50" stroke="#2e8555" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="50" cy="50" r="3" fill="#2e8555"/>
          <text x="15" y="15" fontFamily="monospace" fontSize="10" fill="white">* * * * *</text>
          <text x="75" y="85" fontFamily="monospace" fontSize="8" fill="white">cron</text>
        </g>
      </svg>
    ),
    description: (
      <>
        Take complete control of your WordPress cron jobs. View, edit, delete and create 
        custom cron events with an intuitive interface.
      </>
    ),
    features: ['Cron job management', 'Custom schedules', 'Event monitoring', 'Debug tools'],
    link: '/advanced-cron-manager',
  },
  {
    title: 'Pretty Email',
    icon: (
      <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="20" fill="#2e8555"/>
        <g transform="translate(30,50)">
          <rect x="10" y="20" width="120" height="80" rx="5" fill="white" stroke="none"/>
          <rect x="15" y="25" width="110" height="70" rx="3" fill="#f8f9fa" stroke="#dee2e6"/>
          <rect x="25" y="35" width="90" height="3" fill="#2e8555"/>
          <rect x="25" y="45" width="70" height="2" fill="#6c757d"/>
          <rect x="25" y="52" width="85" height="2" fill="#6c757d"/>
          <rect x="25" y="59" width="60" height="2" fill="#6c757d"/>
          <circle cx="25" cy="75" r="3" fill="#ff6b6b"/>
          <circle cx="35" cy="75" r="3" fill="#4ecdc4"/>
          <circle cx="45" cy="75" r="3" fill="#45b7d1"/>
          <path d="M15 25 L70 55 L125 25" stroke="#2e8555" strokeWidth="2" fill="none"/>
          <g fill="white" opacity="0.8">
            <path d="M100 15 L102 20 L107 18 L102 23 L100 28 L98 23 L93 18 L98 20 Z"/>
            <path d="M130 40 L131 43 L134 42 L131 45 L130 48 L129 45 L126 42 L129 43 Z"/>
            <path d="M20 85 L21 87 L23 86 L21 89 L20 91 L19 89 L17 86 L19 87 Z"/>
          </g>
        </g>
      </svg>
    ),
    description: (
      <>
        Transform your WordPress emails with beautiful, professional templates. 
        Customize design, colors, and layout to match your brand.
      </>
    ),
    features: ['Email templates', 'Visual editor', 'Brand customization', 'Mobile responsive'],
    link: '/pretty-email',
  },
  {
    title: 'Easy Watermark',
    icon: (
      <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="20" fill="#2e8555"/>
        <g transform="translate(30,30)">
          <rect x="10" y="10" width="120" height="90" rx="8" fill="white" stroke="none"/>
          <rect x="15" y="15" width="110" height="80" rx="5" fill="#e9ecef" stroke="#dee2e6"/>
          <path d="M15 75 L45 45 L65 60 L85 35 L115 65 L125 55 L125 95 L15 95 Z" fill="#6c757d"/>
          <path d="M15 85 L35 65 L55 75 L75 50 L95 70 L125 60 L125 95 L15 95 Z" fill="#495057"/>
          <circle cx="105" cy="30" r="8" fill="#ffd43b"/>
          <g opacity="0.4">
            <rect x="25" y="25" width="80" height="50" fill="white" opacity="0.2" rx="3"/>
            <text x="65" y="45" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" opacity="0.8">WATERMARK</text>
            <text x="65" y="58" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="white" opacity="0.6">© BracketSpace</text>
          </g>
          <g transform="translate(105, 75)">
            <path d="M12 2 L20 4 L20 12 C20 16 16 20 12 22 C8 20 4 16 4 12 L4 4 Z" fill="white"/>
            <path d="M12 4 L18 5.5 L18 12 C18 15 15 18 12 19.5 C9 18 6 15 6 12 L6 5.5 Z" fill="#28a745"/>
            <path d="M10 10 L11.5 11.5 L15 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </g>
        </g>
      </svg>
    ),
    description: (
      <>
        Protect your images with customizable watermarks. Automatic watermarking 
        for uploads with text, image, and positioning options.
      </>
    ),
    features: ['Auto watermarking', 'Text & image overlays', 'Batch processing', 'Position control'],
    link: '/easy-watermark',
  },
];

function PluginCard({title, icon, description, features, link}: PluginItem) {
  return (
    <div className={clsx('col col--6', styles.pluginCard)}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.pluginIcon}>{icon}</div>
          <div className={styles.cardTitle}>
            <Heading as="h3">{title}</Heading>
          </div>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.description}>{description}</p>
          <ul className={styles.features}>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cardFooter}>
          <Link
            className="button button--primary button--block"
            to={link}>
            View Documentation →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PluginCards(): ReactNode {
  return (
    <section id="plugins" className={styles.pluginCards}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Our WordPress Plugins</Heading>
          <p className="hero__subtitle">
            Professional tools for WordPress developers and site owners
          </p>
        </div>
        <div className="row">
          {PluginList.map((props, idx) => (
            <PluginCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}