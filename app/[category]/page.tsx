import Main from "./components/Main";

export default async function Home({ params }: { params: { category: string } }) {
  const { category } = await params;
  
  return (
    <div>
      <Main category={category} />
    </div>
  );
}
