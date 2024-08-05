import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/Product-card";
import { ProductsGroupList } from "@/components/shared/Products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 16,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 17,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 18,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 19,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтрак"
                categoryId={2}
                items={[
                  {
                    id: 112,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 123,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 143,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 118,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1193,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 102,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 103,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 104,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 107,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
