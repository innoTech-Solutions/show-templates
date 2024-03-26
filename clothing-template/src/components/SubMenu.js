function SubMenu({ items }) {
    return (
      <ul className="absolute bg-gray-800 py-2 px-4 mt-2 w-48">
        {items.map((item, index) => (
          <li key={index} className="hover:bg-gray-700">
            <a href={item.url} className="block py-2">{item.title}</a>
          </li>
        ))}
      </ul>
    );
  }

export default SubMenu;
  