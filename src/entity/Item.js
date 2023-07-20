import { useEffect, useState } from "react";
import { getAllItems } from "../service/ItemService";
import ListGroup from 'react-bootstrap/ListGroup';

const Item = () => {
  const [items, setItems] = useState(null);

  const itemRequest = async () => {
    const res = await getAllItems();
    console.log(res);
    await setItems(res);
  };

  useEffect(() => {
    itemRequest();
  }, []);

  return (
    <div>
      <h1>This is Item Page</h1>
      <ListGroup as="ol" numbered>
        <div>
          {items &&
            items.map((item) => {
              return(<ListGroup.Item as="li">{item.name}</ListGroup.Item>);
            })}
        </div>
        </ListGroup>
    </div>
  );
};
export default Item;