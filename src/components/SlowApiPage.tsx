import { useEffect, useState } from "react";

const SlowApiPage = () => {
  const [loadedData, setLoadedData] = useState("...loading");

  const getData = async () => {
    const response = await fetch(
      "https://5rgdpun4qtidue3qwfhoc3vesm0ronor.lambda-url.us-east-2.on.aws/"
    );
    const data = await response.json();
    setLoadedData(data.message);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>Slow API</h1>
      <>{loadedData}</>
    </main>
  );
};
export default SlowApiPage;
