const SlowApiPage2 = ({ loadedData }: { loadedData: string }) => {
  return (
    <main>
      <h1>Slow API 2</h1>
      <h2>Receive the data from App by props</h2>
      <>{loadedData}</>
    </main>
  );
};
export default SlowApiPage2;
