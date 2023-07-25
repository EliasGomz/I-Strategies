import { useState, useEffect, useCallback } from "react";
import { Get } from "../Axios/axiosMethod";
import { PathMovies } from "../Const";

const useGetData = () => {
  const [data, setData] = useState([""]);
  const path = PathMovies;

  const getData = useCallback(async () => {
    await Get({ path }).then((rest) => {
      setData(rest.data);
    });
  }, [path]);

  useEffect(() => {
    getData();

    const intervalId = setInterval(getData, 120000);

    return () => clearInterval(intervalId);
  }, [getData]);

  return {
    data,
  };
};
export default useGetData;
