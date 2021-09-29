import React from "react";
import Item from "./Item";

const ListItems = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleChangeProps={props.handleChangeProps}
          deleteItemProps={props.deleteItemProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};
export default ListItems;
