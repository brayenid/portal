import Container from "@/components/ui/container";
import { addPrefix } from "@/utils/prefix";
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
          <span className="block font-bold lg:text-xl p-0 m-0 tracking-widest text-primary-600">
            PERIODE 2024-2027
          </span>
          <span className="font-extrabold md:text-4xl p-0 m-0 uppercase">
            Dewan Pastoral Paroki - Harian
          </span>
        </div>
        <div className="grid gap-12 items-start sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={
                  item.photo?.url
                    ? addPrefix(item.photo.url)
                    : "/static/unknown-person.jpg"
                }
                alt={`foto dari ${item.name}`}
                width={item.photo?.width ?? 256}
                height={item.photo?.height ?? 283}
                style={{
                  height: 240,
                  width: 200,
                  objectFit: "cover",
                }}
                className="rounded-lg w-full overflow-hidden"
              />
              <div className="my-2 flex flex-col items-center w-full lg:text-center">
                <span className="lg:text-2xl font-bold text-primary-600">
                  {item.name}
                </span>
                <span className="lg:text-1xl font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
