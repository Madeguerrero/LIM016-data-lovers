import { datasearch, filtroDirector, filtroProductor } from "../src/data.js";

describe("datasearch", () => {
  it("is a function", () => {
    expect(typeof datasearch).toBe("function");
  });

  const testBuscado = [
    { title: "Kiki's Delivery Service" },
    { title: "Grave of the Fireflies" },
  ];

  it("return for title", () => {
    expect(datasearch(testBuscado, `kiki's delivery service`)).toStrictEqual([
      {
        title: "Kiki's Delivery Service",
      },
    ]);
  });
});

describe("filtroDirector", () => {
  it("is a function", () => {
    expect(typeof filtroDirector).toBe("function");
  });

  const dataTest = [{ director: "Hayao Miyazaki", title: "Castle in the Sky" }];

  it("should return the filter for director `Hayao Miyazaki`", () => {
    expect(filtroDirector(dataTest, `Hayao Miyazaki`, `director`)).toEqual([
      {
        director: "Hayao Miyazaki",
        title: "Castle in the Sky",
      },
    ]);
  });
});

describe("filtroProductor", () => {
  it("is a function", () => {
    expect(typeof filtroProductor).toBe("function");
  });

  const testProductor = [
    { producer: "Toshio Suzuki", title: "Only Yesterday" },
  ];

  it("should return the filter for productor `Toshio Suzuki`", () => {
    expect(filtroProductor(testProductor, `Toshio Suzuki`, `producer`)).toEqual(
      [
        {
          producer: "Toshio Suzuki",
          title: "Only Yesterday",
        },
      ]
    );
  });
});
