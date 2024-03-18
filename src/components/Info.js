export default function Info({ items })
{
  if (!items.length) return (
    <em><p className='info'>Add some items to your packing list.</p></em>
  );

  const totalItems = items.length;
  const totalPackedItems = items.filter(item => item.packed).length;
  const percentage = totalItems === 0 ? 0 : Math.round((totalPackedItems / totalItems) * 100);
  return (
    <footer className='info'>
      <p>
        {percentage === 100 ? "🎉 🍹 Ready to go! 🍹 🎉" : `😍 You have ${totalItems} items to pack. You have already packed ${totalPackedItems} items. (${percentage}%) of your list.`}
      </p>
    </footer>
  );
}
