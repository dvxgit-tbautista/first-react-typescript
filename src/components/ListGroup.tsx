// import { Fragment } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; ///onClick
}

import { MouseEvent, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   items = [];
  //Hook - State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // "event: MouseEvent - type annotation - specify the type of variables, parameters, etc.."
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(item, index)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
