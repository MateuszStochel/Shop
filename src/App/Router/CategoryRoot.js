export class CategoryRoute {
  static ROOT_CATEGORY = "/shop?kategorie={{category}}";
  static BLUZKI = "Bluzki";
  static GARNITURY = "Garnitury";
  static SPODNIE = "Spodnie";
  static SUKIENKI = "Sukienki";
  static KOSZULKI = "Koszulki";
  static BLUZY = "Bluzy";
  static WSZYSTKIE = "Wszystkie";

  static resolveCategoryClothes = (category) => {
    return CategoryRoute.ROOT_CATEGORY.replace("{{category}}", category);
  };
}
