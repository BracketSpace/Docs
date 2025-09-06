import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type PluginItem = {
  title: string;
  icon: ReactNode;
  description: string;
  link: string;
};

const PluginList: PluginItem[] = [
  {
    title: 'Pretty Email',
    icon: (
      <img 
        src="/img/plugins/pretty-email.svg" 
        alt="Pretty Email Plugin Logo" 
        width="80" 
        height="80" 
        style={{objectFit: 'contain'}} 
      />
    ),
    description: 'Transform WordPress emails with beautiful, professional templates and branding.',
    link: '/pretty-email',
  },
  {
    title: 'Notification',
    icon: (
      <img 
        src="/img/plugins/notification.svg" 
        alt="Notification Plugin Logo" 
        width="80" 
        height="80" 
        style={{objectFit: 'contain'}} 
      />
    ),
    description: 'Powerful notification system for WordPress with automated emails, SMS, and webhooks.',
    link: '/notification',
  },
  {
    title: 'Advanced Cron Manager',
    icon: (
      <img 
        src="/img/plugins/advanced-cron-manager.svg" 
        alt="Advanced Cron Manager Plugin Logo" 
        width="80" 
        height="80" 
        style={{objectFit: 'contain'}} 
      />
    ),
    description: 'Complete control over WordPress cron jobs with an intuitive management interface.',
    link: '/advanced-cron-manager',
  },
  {
    title: 'Easy Watermark',
    icon: (
      <img 
        src="/img/plugins/easy-watermark.svg" 
        alt="Easy Watermark Plugin Logo" 
        width="80" 
        height="80" 
        style={{objectFit: 'contain'}} 
      />
    ),
    description: 'Protect your images with automatic watermarking and customizable overlay options.',
    link: '/easy-watermark',
  },
];

function PluginCard({title, icon, description, link}: PluginItem) {
  const pluginClass = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={clsx('col col--12 col--md--6', styles.pluginCard, `plugin-${pluginClass}`)}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.pluginIcon}>{icon}</div>
          <div className={styles.cardContent}>
            <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Link>
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