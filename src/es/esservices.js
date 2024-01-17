const services = [
  {
    title: "Mecanizado CNC",
    content:
      "El mecanizado CNC es un proceso de fabricación sustractivo que suele utilizar controles informáticos y máquinas herramienta para eliminar capas de material de una pieza en bruto (o pieza de trabajo) y producir una pieza personalizada.",
    link: "mecanizado-cnc",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "Fresado CNC",
        description: "3, 4 ve 5 eksen frezeleme kabiliyeti.",
        content:
          "El fresado CNC es un proceso de fabricación que utiliza una herramienta de corte montada en un husillo giratorio para eliminar selectivamente material de un bloque de sustrato en bruto. La pieza de trabajo está montada rígidamente en una mesa, y esta mesa se mueve o gira en diferentes planos para que la herramienta pueda trabajar en muchos ángulos. Las fresadoras CNC sofisticadas pueden tener 5 o más ejes de movimiento independiente para realizar formas más complejas o evitar tener que mover la pieza de trabajo a una máquina separada.",
        link: "fresado-cnc",
      },

      {
        img: "/images/5axis4.jpg",
        title: "Torneado CNC",
        description: "Ø1 mm çaptan Ø2100×Z1700 mm çapa kadar 3 ve 2 eksen CNC tornalama kabiliyeti",
        content:
          "En el torneado CNC, la máquina CNC alimenta la herramienta de corte con un movimiento lineal a lo largo de la superficie de la pieza en rotación. De este modo, se elimina el material alrededor de la circunferencia hasta alcanzar el diámetro deseado. Esta técnica permite dar forma a piezas cilíndricas con características externas e internas como ranuras, conos y roscas. Las capacidades operativas del proceso de torneado incluyen el mandrinado, el refrentado, el ranurado y el roscado.",
        link: "torneado-cnc",
      },

      {
        img: "/images/flame.jpg",
        title: "Rectificado CNC",
        description: "Geleneksel yüzey taşlama.",
        content:
          "El rectificado es un proceso de mecanizado que realiza un “corte” muy ligero con medios abrasivos —normalmente, una rueda de rectificado abrasiva—. Las ruedas de rectificado con diferentes tamaños de grano logran pasadas de rectificado más rugosas o finas, de acuerdo con las necesidades de la aplicación. Cuando se requiere alta precisión y, o, un acabado superficial, por lo general se usa el rectificado como un proceso de acabado después de alguna otra operación metalmecánica. El rectificado también es un proceso efectivo para mecanizar materiales de piezas de trabajo demasiado duros para fresar o tornear.",
        link: "rectificado-cnc",
      },
    ],
  },
  {
    title: "Corte por Láser y Plasma",
    content:
      "El corte por plasma y el corte por láser son métodos de corte ampliamente utilizados que se valen del calor para fundir o vaporizar el material que se está cortando. Sin embargo, el principio de funcionamiento es una diferencia clave entre los dos procesos.",
    link: "corte-laser-plasma",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "Corte por Láser",
        description: "2000×6000 30 mm'ye kadar lazer kesim kabiliyeti.",
        content:
          "El corte por láser utiliza un rayo láser de alta potencia para fundir o vaporizar el material que se está cortando. El rayo láser se enfoca a través de una lente a un punto muy pequeño, lo que crea un corte muy estrecho y preciso. El corte por láser se utiliza normalmente para cortar materiales delgados, como chapa metálica, plástico y madera.",
        link: "corte-laser",
      },
      {
        img: "/images/5axis3.jpg",
        title: "Corte por Plasma",
        description: "3000x12000 Plazma ve oksijen kesim ile 200 mm’ye kadar kesim kabiliyeti.",
        content:
          "El corte por plasma utiliza un arco de plasma de alta temperatura para fundir o vaporizar el material que se está cortando. El arco de plasma se crea al pasar una corriente eléctrica a través de un gas, como el argón o el nitrógeno. El corte por plasma se utiliza normalmente para cortar materiales más gruesos, como el acero y el aluminio.",
        link: "corte-plasma",
      },
    ],
  },
  {
    title: "La Soldadura",
    content:
      "La soldadura es un proceso de fabricación en el cual se unen dos materiales distintos, normalmente metales. Esto se logra a través de la coalescencia de varios metales en un cuerpo único, de tal manera que las piezas son soldadas derritiendo los metales y agregando un material de relleno derretido, el cual posee un punto de fusión menor al de la pieza a soldar.",
    link: "soldadura",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "La Soldadura",
        description: "Brindamos servicios de soldadura con máquinas soldadoras a gas de varios amperios.",
        content:
          "La soldadura es un proceso de fabricación en el cual se unen dos materiales distintos, normalmente metales. Esto se logra a través de la coalescencia de varios metales en un cuerpo único, de tal manera que las piezas son soldadas derritiendo los metales y agregando un material de relleno derretido, el cual posee un punto de fusión menor al de la pieza a soldar.",
        link: "soldadura",
      },
    ],
  },
  {
    title: "Procesos de Pintura y Superficies",
    content:
      "Cumplimos con las expectativas de nuestros clientes en cuanto a servicios de esmerilado, arenado, recubrimiento, recubrimiento húmedo y en polvo para todo tipo de tratamientos superficiales.",
    link: "pintura-superficie",
    img: "/images/axis.jpg",
    detail: [
      {
        img: "/images/fiveacis.jpg",
        title: "Procesos de Pintura y Superficies",
        description: "Cumplimos con las expectativas de nuestros clientes en cuanto a servicios de esmerilado, arenado, recubrimiento, recubrimiento húmedo y en polvo para todo tipo de tratamientos superficiales.",
        content:
          "Cumplimos con las expectativas de nuestros clientes en cuanto a servicios de esmerilado, arenado, recubrimiento, recubrimiento húmedo y en polvo para todo tipo de tratamientos superficiales.",
        link: "pintura-superficie",
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
