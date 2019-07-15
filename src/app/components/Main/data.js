const en = {
  profile: {
    title: "Profile",
    text:
      "Chupa chups brownie liquorice. Sweet roll jujubes chocolate.Cake lollipop cake brownie brownie liquorice fruitcake jelly beans. Donut fruitcake cake apple pie tootsie roll. Sugar plum chocolate bar apple pie toffee. Gummies carrot cake halvah. Caramels sweet donut marshmallow candy canes jelly beans pie. Cake candy sesame snaps carrot cake lemon drops chupa chups chocolate."
  },
  contacts: {
    title: "Contacts",
    content: [
      [
        { tag: "label", children: "Adress" },
        { tag: "span", children: "Vilnius bla bla bla, Kalvarijų gatvė" }
      ],
      [
        { tag: "label", children: "Phone" },
        { tag: "a", children: "867100000", href: "tel:867100000" }
      ],
      [
        { tag: "label", children: "Email" },
        {
          tag: "a",
          children: "blabla@gmail.com",
          href: "mailto:blabla.gmail.com"
        }
      ],
      [
        { tag: "label", children: "GitHub" },
        {
          tag: "a",
          children: "zygist87",
          href: "https://github.com/zygist87/",
          target: "_blank"
        }
      ],
      [
        { tag: "label", children: "Linkedin" },
        {
          tag: "a",
          children: "Žygimantas Tveraga",
          href: "https://www.linkedin.com/in/žygimantas-tveraga-84633512a",
          target: "_blank"
        }
      ]
    ]
  },
  skills: {
    title: "Skills",
    content: [
      [
        { tag: "span", children: "Eating" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "Sleeping" },
        { tag: "span", children: "Beginner" }
      ],
      [
        { tag: "span", children: "Running" },
        { tag: "span", children: "Intermediate" }
      ],
      [
        { tag: "span", children: "Working" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "Dreaming" },
        { tag: "span", children: "Beginner" }
      ]
    ]
  },
  education: {
    title: "Education",
    content: [
      [
        { tag: "p", children: "kaisiadorys, braz sule 2013" },
        { tag: "p", children: "Software engineering, ka baigiau" }
      ],
      [
        { tag: "p", children: "CodeAcademy, Vilnius 2019" },
        { tag: "p", children: "Software engineering, ka baigiauuu" }
      ],
      [
        { tag: "p", children: "VGTU 2019" },
        { tag: "p", children: "Software engineering, ka baigiauuuuuuuuuu" }
      ]
    ]
  },
  experience: {
    title: "Experience",
    content: [
      [
        { tag: "p", children: "Google • 2019.05 - Present" },
        { tag: "p", children: "data wizard posicija" }
      ],
      [
        { tag: "p", children: "Twiter • 2015.01 - 2019.05" },
        { tag: "p", children: "Valytojas" }
      ],
      [
        { tag: "p", children: "UAB Adform • 2013.01 - 2015.01" },
        { tag: "p", children: "Vyr. Valytojas" }
      ]
    ]
  }
};

const lt = {
  profile: {
    title: "Apie mane",
    text:
      "„Chupa chups“ saldainiai. Saldūs sultiniai jujubes chocolate.Cake lollipop tortas brownie brownie saldymedis vaisių pyragas želė pupelės. Spurga vaisių pyragas tortas obuolių pyragas produktsie roll. Cukraus slyvų šokolado baro obuolių pyragas. Gummies morkų pyragas halva. Karamelės saldžiųjų spurgų žiedinių saldainių cukranendrių želė pupelių pyragas. Tortų saldainiai sezamo snaps morkų pyragas citrina lašai chupa chups šokoladas."
  },
  contacts: {
    title: "Kontaktai",
    content: [
      [
        { tag: "label", children: "Adress" },
        { tag: "span", children: "Vilnius bla bla bla, Kalvarijų gatvė" }
      ],
      [
        { tag: "label", children: "Phone" },
        { tag: "a", children: "867100000", href: "tel:867100000" }
      ],
      [
        { tag: "label", children: "Email" },
        {
          tag: "a",
          children: "blabla@gmail.com",
          href: "mailto:blabla.gmail.com"
        }
      ],
      [
        { tag: "label", children: "GitHub" },
        {
          tag: "a",
          children: "zygist87",
          href: "https://github.com/zygist87/",
          target: "_blank"
        }
      ],
      [
        { tag: "label", children: "Linkedin" },
        {
          tag: "a",
          children: "Žygimantas Tveraga",
          href: "https://www.linkedin.com/in/žygimantas-tveraga-84633512a",
          target: "_blank"
        }
      ]
    ]
  },
  skills: {
    title: "Sugebėjimai",
    content: [
      [
        { tag: "span", children: "Eating" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "Sleeping" },
        { tag: "span", children: "Beginner" }
      ],
      [
        { tag: "span", children: "Running" },
        { tag: "span", children: "Intermediate" }
      ],
      [
        { tag: "span", children: "Working" },
        { tag: "span", children: "Advanced" }
      ],
      [
        { tag: "span", children: "Dreaming" },
        { tag: "span", children: "Beginner" }
      ]
    ]
  },
  education: {
    title: "Išsilavinimas",
    content: [
      [
        { tag: "p", children: "kaisiadorys, braz sule 2013" },
        { tag: "p", children: "Software engineering, ka baigiau" }
      ],
      [
        { tag: "p", children: "CodeAcademy, Vilnius 2019" },
        { tag: "p", children: "Software engineering, ka baigiauuu" }
      ],
      [
        { tag: "p", children: "VGTU 2019" },
        { tag: "p", children: "Software engineering, ka baigiauuuuuuuuuu" }
      ]
    ]
  },
  experience: {
    title: "Patirtis",
    content: [
      [
        { tag: "p", children: "Google • 2019.05 - Present" },
        { tag: "p", children: "data wizard posicija" }
      ],
      [
        { tag: "p", children: "Twiter • 2015.01 - 2019.05" },
        { tag: "p", children: "Valytojas" }
      ],
      [
        { tag: "p", children: "UAB Adform • 2013.01 - 2015.01" },
        { tag: "p", children: "Vyr. Valytojas" }
      ]
    ]
  }
};

export default { en, lt };
