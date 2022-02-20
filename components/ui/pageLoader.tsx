const PageLoader: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-blue-200">
      <main className="h-8 w-20 flex flex-row justify-between items-end gap-2">
        <section className="w-5 h-5 transition ease-in-out duration-500  bg-blue-700 animate-bounce" style={{"borderRadius": "100%"}}></section>
        <section className="w-5 h-5 transition ease-in-out duration-500  bg-blue-700 animate-bounce" style={{"borderRadius": "100%","animationDelay": "0.7s"}}></section>
        <section className="w-5 h-5 transition ease-in-out duration-500  bg-blue-700 animate-bounce" style={{"borderRadius": "100%","animationDelay": "0.3s"}}></section>
      </main>
    </div>
  );
};

export default PageLoader;
