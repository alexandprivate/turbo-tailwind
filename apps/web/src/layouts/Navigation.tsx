import Link from 'next/link';
import { Sidebar } from 'domains';

const list = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'listings', path: '/listings' }
];

export const Navigation: React.FC = ({ children }) => {
  return (
    <div className="h-screen bg-white w-full flex">
      <Sidebar>
        <ul className="flex flex-col gap-2 text-white p-4 w-full">
          {list.map((i) => (
            <li className="w-full" key={i.name}>
              <Link href={i.path}>
                <a className="w-full block bg-white/10 p-3 rounded hover:bg-white/5 transition capitalize">
                  {i.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>
      <div className="w-full min-h-screen p-4">{children}</div>
    </div>
  );
};
