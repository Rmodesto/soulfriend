import Primary from '../components/Layouts/Primary/Primary';

export default function Home({ page }) {
  return (
    <div className="min-h-screen flex flex-col p-0 m-0 box-border items-center overflow-hidden">
      <Primary>{page}</Primary>
    </div>
  );
}
