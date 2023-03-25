import React from 'react';
import MinuItem from './MenuItem';

const Menu = (props) => {
  const { items } = props;
  return (
    <div className="section-center">
      {items.map((item) => {
        return <MinuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
