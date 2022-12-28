type blogType = {
  id: string;
  title: string;
  description?: string;
  author: string;
  createdAt: string;
};

export default function BlogComponent({
  id,
  title,
  description,
  author,
  createdAt,
}: blogType) {
  return <>{id}</>;
}
