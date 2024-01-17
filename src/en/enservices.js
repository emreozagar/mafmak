const services = [
  {
    title: "Cnc Machining",
    content:
      "CNC machining definition is that it is a subtractive manufacturing process that typically employs computerized controls and machine tools to remove layers of material from a stock piece—known as the blank or workpiece—and produces a custom-designed part. This process is suitable for a wide range of materials, including metals, plastics, wood, glass, foam, and composites, and finds application in a variety of industries, such as large CNC machining, machining of parts and prototypes for telecommunications, and CNC machining aerospace parts, which require tighter tolerances than other industries.",
    link: "cnc-machining",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "CNC Milling",
        description: "3, 4 ve 5 eksen frezeleme kabiliyeti.",
        content:
          "Milling is a machining process which employs rotating multi-point cutting tools to remove material from the workpiece. In CNC milling, the CNC machine typically feeds the workpiece to the cutting tool in the same direction as the cutting tool’s rotation, whereas in manual milling the machine feeds the workpiece in the opposite direction to the cutting tool’s rotation. Operational capabilities of the milling process include face milling—cutting shallow, flat surfaces and flat-bottomed cavities into the workpiece—and peripheral milling—cutting deep cavities, such as slots and threads, into the workpiece.",
        link: "cnc-milling",
      },

      {
        img: "/images/5axis4.jpg",
        title: "CNC Turning",
        description: "Ø1 mm çaptan Ø2100×Z1700 mm çapa kadar 3 ve 2 eksen CNC tornalama kabiliyeti",
        content:
          "Turning is a machining process which employs single-point cutting tools to remove material from the rotating workpiece. In CNC turning, the machine—typically a CNC lathe machine—feeds the cutting tool in a linear motion along the surface of the rotating workpiece, removing material around the circumference until the desired diameter is achieved, to produce cylindrical parts with external and internal features, such as slots, tapers, and threads. Operational capabilities of the turning process include boring, facing, grooving, and thread cutting.",
        link: "cnc-turning",
      },

      {
        img: "/images/flame.jpg",
        title: "CNC Grinding",
        description: "Geleneksel yüzey taşlama.",
        content:
          "CNC grinding involves removing small amounts of materials via a high-speed abrasive wheel as the cutting tool. This wheel rotates in place while the part or workpiece attached to the machine table moves in the X-, Y-, and Z-axis. While this movement depends on the part size, the grinding wheel may likely take multiple passes to achieve the dimensions desired.",
        link: "cnc-grinding",
      },
    ],
  },
  {
    title: "CNC Laser & CNC Plasma Cutting",
    content:
      "Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. While typically used for industrial manufacturing applications, it is now used by schools, small businesses, architecture, and hobbyists. Laser cutting works by directing the output of a high-power laser most commonly through optics. The laser optics and CNC are used to direct the laser beam to the material.",
    link: "laser-plasma-cutting",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "CNC Laser Cutting",
        description: "2000×6000 30 mm'ye kadar lazer kesim kabiliyeti.",
        content:
          "Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. While typically used for industrial manufacturing applications, it is now used by schools, small businesses, architecture, and hobbyists. Laser cutting works by directing the output of a high-power laser most commonly through optics. The laser optics and CNC are used to direct the laser beam to the material.",
        link: "cnc-laser-cutting",
      },
      {
        img: "/images/5axis3.jpg",
        title: "CNC Plasma Arc Cutting",
        description: "3000x12000 Plazma ve oksijen kesim ile 200 mm’ye kadar kesim kabiliyeti.",
        content:
          "Plasma cutting is a process used to cut through electrically conductive materials by using an accelerated jet of hot plasma.  Plasma cutting works by using an electrically conductive gas (such as oxygen, nitrogen, argon, or a mixture of gases) which ionizes to create a plasma arc, which connects to the material being cut, transferring energy and melting the material.",
        link: "cnc-plasma-cutting",
      },
    ],
  },
  {
    title: "Welding Manufacturing",
    content:
      "Welding is a process used to join two or more materials by melting and welding them together. Welding can be used to join metals as well as materials such as plastics, glass and ceramics.Welded production enables the production of high strength and durable parts. In addition, welded production is faster and more cost-effective than other production methods.",
    link: "welding-manufacturing",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "Welding Manufacturing",
        description: "We provide welding services with gas welding machines of various amperes.",
        content:
          "Welding is a process used to join two or more materials by melting and welding them together. Welding can be used to join metals as well as materials such as plastics, glass and ceramics.Welded production enables the production of high strength and durable parts. In addition, welded production is faster and more cost-effective than other production methods.",
        link: "welding-manufacturing",
      },
    ],
  },
  {
    title: "Paint and Surface Processes",
    content:
      "We meet our customers' expectations in terms of grinding, sandblasting, coating, wet and powder coating services for all kinds of surface treatments.",
    link: "paint-surface-processes",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "Paint and Surface Processes",
        description: "We meet our customers' expectations in terms of grinding, sandblasting, coating, wet and powder coating services for all kinds of surface treatments.",
        content:
          "We meet our customers' expectations in terms of grinding, sandblasting, coating, wet and powder coating services for all kinds of surface treatments.",
        link: "paint-surface-processes",
      },
    ],
  },
];

const getServices = (url) => {
  return services.filter((h) => h.link == url);
};

const getServicesDetail = (parentUrl, url) => {
  const servicesData = getServices(parentUrl)[0];
  const json = [servicesData.detail.find((p) => p.link == url), servicesData.detail];
  return json;
};

export { services, getServices, getServicesDetail };
