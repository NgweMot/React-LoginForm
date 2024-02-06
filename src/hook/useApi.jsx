import React, { useState } from "react";

const useApi = (func, argu) => {
  const [data, setData] = useState({
    loading: "",
    error: "",
    data: "",
  });
  return <div>useApi</div>;
};

export default useApi;
