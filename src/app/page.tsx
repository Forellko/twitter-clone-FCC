import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
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
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          <Link href={'/'} className="p-2 text-2xl">
            <BsTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.title}
              className="hover:bg-white/10 transition duration-200  flex items-center justify-start w-fit rounded-3xl p-2 space-x-2 text-2xl"
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
