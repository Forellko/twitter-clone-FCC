import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark } from 'react-icons/bs';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notification',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: HiEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

export default function Home() {
  return (
    <div className="bg-red-400 w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col h-screen">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.title}
              className="bg-white/50 flex items-center justify-center rounded-3xl p-4 space-x-2"
              href={`/${item.title.toLowerCase()}`}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
}
