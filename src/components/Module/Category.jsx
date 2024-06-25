import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = ({ title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
    //   style={{
    //     backgroundImage: `url(${process.env.PUBLIC_URL}/image/shop-bg.jpg)`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     padding: '20px 0',
    //   }}
    >
      <table>
        <thead>
          <tr>
            <th>Title</th> <br/>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
