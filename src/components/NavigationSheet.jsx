import Link from 'next/link';
import classNames from 'classnames';

export default function NavigationSheet({ id, menu, theme = '' }) {
  const selectedMenu = menu.find((menuItem) => menuItem.id === id);
  const textColor = theme === 'dark' ? 'text-gray-md' : 'text-gray-xd';
  const hoverColor = theme === 'dark' ? 'hover:text-background' : 'hover:text-foreground';

  if (!selectedMenu) return null;

  return (
    <div className={classNames('flex flex-col lg:flex-row gap-12', textColor)}>
      {selectedMenu.content.map((section, index) => (
        <div key={index}>
          <h4 className='pb-4 font-light text-gray-rg'>{section.name}</h4>
          <div className={classNames('flex flex-col', `${index === 0 ? 'pr-16  space-y-2' : 'pr-0 space-y-2'}`)}>
            {section.collection.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className={classNames(hoverColor, `${index === 0 ? 'font-medium text-2xl' : 'font-semibold text-xs'}`)}
              >
                {item.link}
              </Link>
            ))}
          </div>
          {section.morelink1 !== undefined && <h4 className='font-semibold pt-6'>{section.morelink1}</h4>}
          {section.morelink2 !== undefined && <h4 className='font-semibold pt-2'>{section.morelink2}</h4>}
        </div>
      ))}
    </div>
  );
}