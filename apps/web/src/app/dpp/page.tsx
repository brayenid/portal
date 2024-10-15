import Container from "@/components/ui/container";
import api from "@/utils/strapi";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { items } = await api.dpp.search({
    sort: ["id:asc"],
    limit: 100,
  });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full pb-8">
          <h2 className="font-bold md:text-xl p-0 m-0 tracking-widest text-primary-600">
            PERIODE 2024-2027
          </h2>
          <h1 className="font-extrabold md:text-4xl p-0 m-0 uppercase">
            Dewan Pastoral Paroki - Harian
          </h1>
        </div>
        <div className="grid gap-12 items-start sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="rounded-lg w-full overflow-hidden">
                <Image
                  src={item.photo?.url ?? "/static/unknown-person.jpg"}
                  alt={`foto dari ${item.name}`}
                  width={item.photo?.width ?? 256}
                  height={item.photo?.height ?? 283}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="my-2 flex flex-col items-center">
                <span className="text-2xl font-bold text-primary-600">
                  {item.name}
                </span>
                <span className="text-1xl font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
