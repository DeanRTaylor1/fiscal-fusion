import Link from "next/link";
import styles from './nav-items.module.css';
import { Strings } from "@/core/lib/util/strings";

const navItems = [
  true && { label: 'budget', href: '/budget' },
  true && { label: 'expenses', href: '/expenses' },
  true && { label: 'savings', href: '/savings' },
]
  .filter(Boolean)
  .map(({ label, href }: any) => {
    return (
      <Link key={href} className='nav-link' href={href}>
        {' '}
        <li
          className={styles.navItem}
        >
          {Strings.clientFriendlyString(label)}
        </li>
      </Link>
    );
  });

export default navItems;