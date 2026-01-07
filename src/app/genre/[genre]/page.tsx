type Props = {
  params: Promise<{
    genre: string;
  }>;
};

export default async function GenrePage({ params }: Props) {
  const { genre } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{genre} Movies</h1>
    </div>
  );
}
