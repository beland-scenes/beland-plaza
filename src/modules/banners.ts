type Banner = {
  url: string;
  position: number;
  image: string;
};

const bannerPositions: Array<Transform> = [
  new Transform({
    position: new Vector3(145.2, 7.5, 175.3),
    rotation: new Quaternion(0, -0.23, 0, 1),
    scale: new Vector3(4.5, 8.3, 0.2),
  }),
  new Transform({
    position: new Vector3(153.7, 7.5, 177.3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(4.5, 8.3, 0.2),
  }),
  new Transform({
    position: new Vector3(162.4, 7.5, 175.2),
    rotation: new Quaternion(0, 0.24, 0, 1),
    scale: new Vector3(4.5, 8.3, 0.2),
  }),
];

function buildBanner(banner: Banner) {
  //Create entity and assign shape
  const myEntity = new Entity();
  myEntity.addComponent(new BoxShape());

  myEntity.addComponent(
    new OnPointerDown(
      (e) => {
        openExternalURL(banner.url);
      },
      { button: ActionButton.PRIMARY }
    )
  );

  //Create texture
  const myTexture = new Texture(banner.image);

  //Create a material
  const myMaterial = new Material();
  myMaterial.albedoTexture = myTexture;
  myEntity.addComponentOrReplace(bannerPositions[banner.position]);
  //Assign the material to the entity
  myEntity.addComponent(myMaterial);

  engine.addEntity(myEntity);
}

export function buildBanners() {
  executeTask(async () => {
    try {
      let response = await fetch(
        "https://beland-plaza.sgp1.digitaloceanspaces.com/ads/ads.json"
      );
      let banners: Banner[] = await response.json();
      banners.map(buildBanner);
    } catch {
      log("failed to reach URL");
    }
  });
}
