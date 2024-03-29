import { useState } from 'react';
import Header from './header';
import Form from './form';
import PackingList from './PackingList';
import Info from './Info';

function App()
{
  const [items, setItems] = useState([]);

  function handleAddItems(item)
  {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id)
  {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id)
  {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  } 

  function handleClearList()
  {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Info items={items} />
      </div>
      );
      
}

export default App;
