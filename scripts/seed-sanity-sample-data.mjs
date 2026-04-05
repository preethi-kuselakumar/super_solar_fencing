import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in environment.",
  );
  process.exit(1);
}

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in environment.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-04-01",
  token,
  useCdn: false,
});

const imageAssetRefCache = new Map();

async function ensureImageAssetRef(url, filename) {
  const cacheKey = `${filename}:${url}`;
  const cached = imageAssetRefCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const existingAssetId = await client.fetch(
    '*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id',
    { filename },
  );

  if (existingAssetId) {
    imageAssetRefCache.set(cacheKey, existingAssetId);
    return existingAssetId;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image ${url}: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "image/jpeg";
  const arrayBuffer = await response.arrayBuffer();
  const asset = await client.assets.upload("image", Buffer.from(arrayBuffer), {
    filename,
    contentType,
  });

  imageAssetRefCache.set(cacheKey, asset._id);
  return asset._id;
}

const categories = [
  {
    _id: "sample-category-solar-fencing",
    _type: "category",
    title: "Solar Fencing",
    slug: { _type: "slug", current: "solar-fencing" },
    shortDescription:
      "Reliable perimeter protection systems built for farms, estates, and industrial boundaries.",
  },
  {
    _id: "sample-category-energy-storage",
    _type: "category",
    title: "Energy Storage",
    slug: { _type: "slug", current: "energy-storage" },
    shortDescription:
      "High-capacity battery and power-backup options for uninterrupted renewable energy usage.",
  },
  {
    _id: "sample-category-monitoring-controls",
    _type: "category",
    title: "Monitoring & Controls",
    slug: { _type: "slug", current: "monitoring-controls" },
    shortDescription:
      "Smart controllers and remote monitoring tools to optimize security and energy performance.",
  },
];

const products = [
  {
    _id: "sample-product-fence-energizer-pro",
    _type: "product",
    name: "Fence Energizer Pro 12V",
    slug: { _type: "slug", current: "fence-energizer-pro-12v" },
    shortDescription:
      "High-output 12V fence energizer engineered for long-distance perimeter coverage.",
    description:
      "Fence Energizer Pro 12V provides stable pulse output, weather-resistant housing, and low-maintenance operation for demanding outdoor security installations. It is designed for agricultural and industrial perimeter setups requiring consistent deterrence performance.",
    features: [
      "Supports extended perimeter line lengths",
      "Weather-resistant enclosure for harsh outdoor use",
      "Low-power consumption with stable pulse output",
    ],
    specifications: [
      { _type: "specification", key: "Input Voltage", value: "12V DC" },
      { _type: "specification", key: "Coverage", value: "Up to 25 km" },
      { _type: "specification", key: "Warranty", value: "24 months" },
    ],
    category: { _type: "reference", _ref: "sample-category-solar-fencing" },
    isFeatured: true,
    featuredOrder: 1,
  },
  {
    _id: "sample-product-lithium-pack-5kwh",
    _type: "product",
    name: "Lithium Backup Pack 5kWh",
    slug: { _type: "slug", current: "lithium-backup-pack-5kwh" },
    shortDescription:
      "Compact lithium energy storage unit with smart BMS and rapid recharge capability.",
    description:
      "Lithium Backup Pack 5kWh ensures dependable power continuity during low-sun periods and grid interruptions. It integrates with solar systems and includes battery management safeguards for thermal, voltage, and cycle health protection.",
    features: [
      "Integrated smart battery management system",
      "High cycle life for long-term performance",
      "Fast recharge support with inverter integration",
    ],
    specifications: [
      { _type: "specification", key: "Usable Capacity", value: "5 kWh" },
      { _type: "specification", key: "Chemistry", value: "LiFePO4" },
      { _type: "specification", key: "Nominal Voltage", value: "51.2V" },
    ],
    category: { _type: "reference", _ref: "sample-category-energy-storage" },
    isFeatured: false,
  },
  {
    _id: "sample-product-smart-controller-x",
    _type: "product",
    name: "Smart Controller X",
    slug: { _type: "slug", current: "smart-controller-x" },
    shortDescription:
      "Remote control hub for fence performance monitoring, alerts, and scheduling.",
    description:
      "Smart Controller X gives operators full visibility into fence activity and system health through cloud-connected telemetry. It supports alerting workflows, rule-based controls, and usage analytics to improve site reliability.",
    features: [
      "Cloud dashboard with real-time alerts",
      "Rule-based automation and schedules",
      "Works with multi-zone fence layouts",
    ],
    specifications: [
      { _type: "specification", key: "Connectivity", value: "Wi-Fi / 4G" },
      { _type: "specification", key: "Zones", value: "Up to 16" },
      { _type: "specification", key: "Alert Channels", value: "SMS / Email / App" },
    ],
    category: { _type: "reference", _ref: "sample-category-monitoring-controls" },
    isFeatured: false,
  },
];

const services = [
  {
    _id: "sample-service-solar-fencing-installation",
    _type: "service",
    title: "Solar Fencing Installation",
    slug: { _type: "slug", current: "solar-fencing-installation" },
    shortDescription:
      "End-to-end setup of secure solar fencing systems for agricultural and industrial sites.",
    description:
      "Our team handles site survey, post layout, energizer setup, and commissioning for long-run reliability. We design each installation for terrain, perimeter length, and power profile requirements.",
    displayOrder: 1,
    isActive: true,
  },
  {
    _id: "sample-service-preventive-maintenance",
    _type: "service",
    title: "Preventive Maintenance",
    slug: { _type: "slug", current: "preventive-maintenance" },
    shortDescription:
      "Routine checks and servicing that keep fence performance stable across seasons.",
    description:
      "Includes pulse diagnostics, grounding health checks, battery review, and line integrity inspections. Preventive maintenance reduces downtime and extends the life of installed components.",
    displayOrder: 2,
    isActive: true,
  },
  {
    _id: "sample-service-remote-monitoring-support",
    _type: "service",
    title: "Remote Monitoring Support",
    slug: { _type: "slug", current: "remote-monitoring-support" },
    shortDescription:
      "Operational monitoring, alert workflows, and troubleshooting support for connected systems.",
    description:
      "We configure dashboard visibility, incident alerting, and response guidance so teams can act quickly. This service improves uptime by identifying anomalies before they impact site security.",
    displayOrder: 3,
    isActive: true,
  },
];

async function run() {
  const productImageSources = {
    energizerMain: "https://picsum.photos/id/1039/1600/900",
    energizerGallery1: "https://picsum.photos/id/1040/1600/900",
    energizerGallery2: "https://picsum.photos/id/1041/1600/900",
    batteryMain: "https://picsum.photos/id/1042/1600/900",
    batteryGallery1: "https://picsum.photos/id/1043/1600/900",
    batteryGallery2: "https://picsum.photos/id/1044/1600/900",
    controllerMain: "https://picsum.photos/id/1045/1600/900",
    controllerGallery1: "https://picsum.photos/id/1047/1600/900",
    controllerGallery2: "https://picsum.photos/id/1048/1600/900",
  };

  const serviceImageSources = {
    install: "https://picsum.photos/id/1050/1600/900",
    maintenance: "https://picsum.photos/id/1051/1600/900",
    monitoring: "https://picsum.photos/id/1052/1600/900",
  };

  const imageRefs = {
    energizerMain: await ensureImageAssetRef(productImageSources.energizerMain, "sample-energizer-main.jpg"),
    energizerGallery1: await ensureImageAssetRef(productImageSources.energizerGallery1, "sample-energizer-gallery-1.jpg"),
    energizerGallery2: await ensureImageAssetRef(productImageSources.energizerGallery2, "sample-energizer-gallery-2.jpg"),
    batteryMain: await ensureImageAssetRef(productImageSources.batteryMain, "sample-battery-main.jpg"),
    batteryGallery1: await ensureImageAssetRef(productImageSources.batteryGallery1, "sample-battery-gallery-1.jpg"),
    batteryGallery2: await ensureImageAssetRef(productImageSources.batteryGallery2, "sample-battery-gallery-2.jpg"),
    controllerMain: await ensureImageAssetRef(productImageSources.controllerMain, "sample-controller-main.jpg"),
    controllerGallery1: await ensureImageAssetRef(productImageSources.controllerGallery1, "sample-controller-gallery-1.jpg"),
    controllerGallery2: await ensureImageAssetRef(productImageSources.controllerGallery2, "sample-controller-gallery-2.jpg"),
    serviceInstall: await ensureImageAssetRef(serviceImageSources.install, "sample-service-install.jpg"),
    serviceMaintenance: await ensureImageAssetRef(serviceImageSources.maintenance, "sample-service-maintenance.jpg"),
    serviceMonitoring: await ensureImageAssetRef(serviceImageSources.monitoring, "sample-service-monitoring.jpg"),
  };

  const productsWithImages = [
    {
      ...products[0],
      mainImage: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.energizerMain },
        alt: "Fence Energizer Pro 12V main product image",
      },
      gallery: [
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.energizerGallery1 },
          alt: "Fence Energizer Pro close view",
        },
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.energizerGallery2 },
          alt: "Fence Energizer Pro installation context",
        },
      ],
    },
    {
      ...products[1],
      mainImage: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.batteryMain },
        alt: "Lithium Backup Pack 5kWh main product image",
      },
      gallery: [
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.batteryGallery1 },
          alt: "Lithium backup battery cabinet",
        },
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.batteryGallery2 },
          alt: "Battery system integrated with solar",
        },
      ],
    },
    {
      ...products[2],
      mainImage: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.controllerMain },
        alt: "Smart Controller X main product image",
      },
      gallery: [
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.controllerGallery1 },
          alt: "Controller monitoring panel",
        },
        {
          _type: "image",
          asset: { _type: "reference", _ref: imageRefs.controllerGallery2 },
          alt: "Controller analytics dashboard",
        },
      ],
    },
  ];

  const servicesWithImages = [
    {
      ...services[0],
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.serviceInstall },
        alt: "Solar fencing installation in field",
      },
    },
    {
      ...services[1],
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.serviceMaintenance },
        alt: "Technician performing preventive maintenance",
      },
    },
    {
      ...services[2],
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: imageRefs.serviceMonitoring },
        alt: "Remote monitoring support dashboard",
      },
    },
  ];

  for (const category of categories) {
    await client.createOrReplace(category);
  }

  for (const product of productsWithImages) {
    await client.createOrReplace(product);
  }

  for (const service of servicesWithImages) {
    await client.createOrReplace(service);
  }

  const categoryCount = await client.fetch(
    'count(*[_type == "category" && _id match "sample-category-*"])',
  );
  const productCount = await client.fetch(
    'count(*[_type == "product" && _id match "sample-product-*"])',
  );
  const serviceCount = await client.fetch(
    'count(*[_type == "service" && _id match "sample-service-*"])',
  );

  console.log(
    `Seed complete: ${categoryCount} sample categories, ${productCount} sample products, and ${serviceCount} sample services in ${dataset}.`,
  );
}

run().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
