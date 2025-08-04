declare module "*.svg" {
  /**
   * A path to the SVG file
   */
  const path: `${string}.svg`;
  export = path;
}

declare module "*.jpg" {
  /**
   * A path to the JPG file
  */
 const path: `${string}.jpg`;
 export = path;
}

declare module "*.webp" {
  /**
   * A path to the webp file
   */
  const path: `${string}.webp`;
  export = path;
}
