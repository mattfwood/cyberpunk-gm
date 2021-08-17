import React, { ReactNode, Fragment } from 'react';
import { Head, useRouter } from 'blitz';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const baseNavigation = [
  { name: 'Combat Tracker', href: '/' },
  { name: 'Feedback', href: '/feedback' },
  { name: 'Skill List', href: '/skills' },
];

const Navigation = () => {
  const router = useRouter();

  const navigation = baseNavigation.map((link) => ({
    ...link,
    current: link.href === router.asPath,
  }));

  return (
    <Disclosure as="nav" className="bg-sidebar">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-white">
                  Cyberpunk Red GM Tool
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) =>
                      item.current ? (
                        <Fragment key={item.name}>
                          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                          <a
                            href={item.href}
                            className="bg-primary-low text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.name}
                          </a>
                        </Fragment>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-sidebar inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.current ? (
                  <Fragment key={item.name}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href={item.href}
                      className=" bg-primary-low text-white block px-3 py-2 rounded-md text-base font-medium "
                    >
                      {item.name}
                    </a>
                  </Fragment>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:1-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const Layout = ({ title, children }: LayoutProps) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const navigation = baseNavigation.map((link) => ({
  //   ...link,
  //   current: link.href === router.asPath,
  // }));

  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>{title || 'Cyberpunk GM'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-background">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-6 text-white">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export default Layout;
