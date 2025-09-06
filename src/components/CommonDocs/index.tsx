import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type DocItem = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  category: 'getting-started' | 'support' | 'resources';
};

const DocsList: DocItem[] = [
  {
    title: 'How to Diagnose Errors',
    description: 'Step-by-step guide to troubleshoot common plugin issues',
    icon: '🔍',
    link: '/docs/troubleshooting',
    category: 'support',
  },
  {
    title: 'Contact Support',
    description: 'Get help from our support team and access community forums',
    icon: '💬',
    link: '/docs/support',
    category: 'support',
  },
  {
    title: 'License Management',
    description: 'Understand licensing of our plugins, renewals, and activation process',
    icon: '🔑',
    link: '/docs/licensing',
    category: 'getting-started',
  },
  {
    title: 'Plugin Compatibility',
    description: 'Check compatibility with themes, plugins, and WordPress versions',
    icon: '🔗',
    link: '/docs/compatibility',
    category: 'resources',
  },
  {
    title: 'Security Best Practices',
    description: 'Secure your WordPress site when using our plugins',
    icon: '🛡️',
    link: '/docs/security',
    category: 'resources',
  },
  {
    title: 'Migration & Updates',
    description: 'Safe migration practices and plugin update procedures',
    icon: '📦',
    link: '/docs/migration-updates',
    category: 'resources',
  },
];

function DocCard({title, description, icon, link}: DocItem) {
  return (
    <div className={clsx('col col--4', styles.docCard)}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <span className={styles.icon}>{icon}</span>
          </div>
          <div className={styles.cardContent}>
            <Heading as="h4" className={styles.cardTitle}>{title}</Heading>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function CommonDocs(): ReactNode {
  return (
    <section className={styles.commonDocs}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Common Documentation</Heading>
          <p className="hero__subtitle">
            Essential guides and resources for all BracketSpace plugins
          </p>
        </div>
        <div className="row">
          {DocsList.map((props, idx) => (
            <DocCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}