import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import MENUS from 'constants/menus.js';

import ThemeSelect from './theme-select';

const Footer = ({ isDocPage = false, withTopBorder = false, theme = 'white' }) => {
  const isDarkTheme = theme === 'black' || theme === 'black-new' || theme === 'gray-8';

  return (
    <footer
      className={clsx(
        'z-999 safe-paddings relative mt-auto overflow-hidden dark:bg-black dark:text-white',
        !isDarkTheme && withTopBorder && 'border-t border-gray-7 dark:border-gray-2',
        isDarkTheme && withTopBorder && 'border-t border-gray-2',
        { 'border-gray-new-15 bg-black-new text-white': theme === 'black-new' },
        { 'bg-black text-white': theme === 'black' },
        { 'bg-white text-black': theme === 'white' }
      )}
    >
      <Container className="flex justify-between py-10 xl:py-8" size="lg">
        <div className="flex flex-col items-start justify-between md:w-full md:space-y-8 sm:space-y-6">
          <div className="mb-7 flex flex-col xl:mb-5 md:mb-0 md:w-full md:flex-row md:items-center md:justify-between">
            <Link className="block" to="/">
              <span className="sr-only">Neon</span>
              <Logo className="w-auto sm:h-6" isThemeBlack={isDarkTheme} />
            </Link>
            {isDocPage && <ThemeSelect className="mt-10 xl:mt-11 md:mt-0" />}
          </div>
          <div
            className={clsx(
              { 'tracking-tight text-gray-new-80': theme === 'black-new' || theme === 'gray-8' },
              'space-y-[18px] leading-none'
            )}
          >
            <p>Made in SF and the World</p>
            <p>Neon 2023 Ⓒ All rights reserved</p>
          </div>
        </div>
        <div className="flex space-x-[123px] xl:space-x-8 md:hidden">
          {MENUS.footer.map(({ heading, links }, index) => (
            <div className={clsx('flex flex-col xl:w-full')} key={index}>
              <h3
                className={clsx(
                  {
                    'text-[13px] font-semibold text-gray-new-60':
                      theme === 'black-new' || theme === 'gray-8',
                  },
                  'relative text-sm font-bold uppercase leading-none tracking-wider'
                )}
              >
                {heading}
              </h3>
              <ul className="mt-6 flex grow flex-col space-y-[18px]">
                {links.map(({ to, text, icon: Icon }, index) => {
                  const isExternalUrl = to.startsWith('http');
                  return (
                    <li className="flex" key={index}>
                      <Link
                        className="relative flex items-center gap-2 whitespace-nowrap leading-none"
                        to={to}
                        theme={isDarkTheme ? 'white' : 'black'}
                        target={isExternalUrl ? '_blank' : null}
                        rel={isExternalUrl ? 'noopener noreferrer' : null}
                      >
                        {Icon && theme === 'black-new' && <Icon width={16} aria-hidden />}
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  isDocPage: PropTypes.bool,
  withTopBorder: PropTypes.bool,
  theme: PropTypes.oneOf(['white', 'black', 'black-new', 'gray-8']),
};

export default Footer;
