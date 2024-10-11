import Container from "@/components/ui/container";
import api from "@/utils/strapi";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { items } = await api.dpp.search({
    limit: 100,
  });

  return (
    <Container>
      <div className="w-full pb-16">
        <h2 className="font-bold md:text-2xl p-0 m-0">PERIODE 2024-2027</h2>
        <h1 className="font-bold md:text-5xl p-0 m-0">
          Dewan Pastoral Paroki - Harian
        </h1>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-8 lg:gap-24 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col text-center">
            <Image
              src={item.photo?.url ?? "/static/unknown-person.jpg"}
              alt={`foto dari ${item.name}`}
              width={item.photo?.width ?? 256}
              height={item.photo?.height ?? 283}
            />
            <span className="text-2xl font-bold">{item.name}</span>
            <span className="text-1xl font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
