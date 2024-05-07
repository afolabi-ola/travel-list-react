export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent < 100
          ? `💼You have ${numItems} items on your list, and you already packed
        ${packedItems} (${packedPercent}%)`
          : `You've got everything! Ready to go ✈`}
      </em>
    </footer>
  );
}
