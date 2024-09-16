import React from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items && items.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

// Categories.propTypes = {
//   activeCategory: propTypes.number.isRequired,
//   items: propTypes.arrayOf(propTypes.object).isRequired,
//   onClickCategory: propTypes.func,
// };

export default Categories;
