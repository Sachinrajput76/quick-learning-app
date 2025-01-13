interface Params {
  params: { id: string };
}

export default function DashboardDetail({ params }: Params) {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Dashboard Item</h1>
      <p className="text-lg">You are viewing details for ID: {params.id}</p>
    </div>
  );
}
