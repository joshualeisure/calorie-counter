import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import InputItem from "./InputItem";
import ListItems from "./ListItems";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [items, setItems] = useState(getInitialItems());

  const handleChange = (id) => {
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const delItem = (id) => {
    setItems([
      ...items.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };
  const addItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setItems([...items, newItem]);
  };
  const setUpdate = (updatedTitle, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.title = updatedTitle;
        }
        return item;
      })
    );
  };

  function getInitialItems() {
    const temp = localStorage.getItem("items");
    const savedItems = JSON.parse(temp);
    return savedItems || [];
  }
  useEffect(() => {
    const temp = JSON.stringify(items);
    localStorage.setItem("items", temp);
  }, [items]);

  return (
    <>
      <NavBar />
      <Header />
      <InputItem addItemProps={addItem} />
      <ListItems
        items={items}
        handleChangeProps={handleChange}
        deleteItemProps={delItem}
        setUpdate={setUpdate}
      />
    </>
  );
};

export default App;
