import Header from "./components/shared/header";

const App = () => {
  return (
    <section className="relative mx-auto flex h-screen w-full max-w-[1440px] flex-col border border-black px-[150px]">
      <img
        src="gradient.svg"
        alt="gradient"
        className="absolute left-0 top-0 -z-10"
      />
      <Header />
    </section>
  );
};

export default App;
