import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ListMenu = ({ items = [], renderer, onClick }) => {
  const { t } = useTranslation('Buttons');
  const [selectedIndex, setSelectedIndex] = useState(null);
  // const newItems = items.map((item) => {
  //   item.title = t(`${item.title}`)
  // })

  const ListItem = ({ item, index, isSelected }) => {
    const flex = 'flex flex-row justify-between items-center';
    const theme = 'bg-indigo-dark';
    item.title = t(`${item.title}`)

    const onClickHandler = () => {
      setSelectedIndex(index);
      onClick({ item, selectedIndex: index });
      if (item.onClick) item.onClick({ ...item, index, isSelected });
    };

    return (
      <div className={classnames(flex, theme, 'cursor-pointer')} onClick={onClickHandler} data-cy={item.id}>
        {renderer && renderer({ ...item, index, isSelected })}
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded-md bg-secondary-dark pt-2 pb-2">
      {items.map((item, index) => {
        return (
          <ListItem
            key={`ListItem${index}`}
            index={index}
            isSelected={selectedIndex === index}
            item={item}
          />
        );
      })}
    </div>
  );
};

const noop = () => { };

ListMenu.propTypes = {
  items: PropTypes.array.isRequired,
  renderer: PropTypes.func.isRequired,
  onClick: PropTypes.func
};

ListMenu.defaultProps = {
  onClick: noop
};

export default ListMenu;
