import React, { useState } from "react";
import { Button } from "antd";
import axios from "axios";

const Zhihu = (props) => {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <p>{number}</p>
      <Button onClick={() => setNumber(number + 1)}>+</Button>
    </div>
  );
};

export default Zhihu;
