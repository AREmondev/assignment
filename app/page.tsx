import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListItems from "@/components/ListItems";
import Search from "@/components/Search";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Search />
      <Filter />
      <ListItems />
    </section>
  );
}
