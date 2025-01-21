import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default async function Home({ params }: { params: { category: string } }) {
  const { category } = await params;

  return (
    <div>
      <Header category={category} />
      <Main category={category} />
      <Footer />
    </div>
  );
}
