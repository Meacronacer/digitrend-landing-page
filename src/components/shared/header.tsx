import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="mt-[54px] flex h-[60px] w-full max-w-[1140px] items-center justify-between">
      <span className="text-[36px] font-bold tracking-wide">DIGITREND</span>
      <nav>
        <ul className="ml-16 flex items-center gap-x-[30px] text-[22px] font-medium tracking-wide">
          {["Home", "About US", "Services", "Prcing", "Portfolio"].map(
            (item) => (
              <li key={item}>
                <a>{item}</a>
              </li>
            ),
          )}
        </ul>
      </nav>

      <Button className="w-[161px] text-[20px] text-black">Contact US</Button>
    </header>
  );
};

export default Header;
