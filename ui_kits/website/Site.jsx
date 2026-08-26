const { Header, Footer, ScrollToTop } = window.VanillaBPDesignSystem_b629c7;

const NAV = [
  { label: "Adapters", href: "/features" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "BPMN", href: "/bpmn" },
  { label: "About", href: "/about" },
];

const SCREENS = {
  "/": HomeScreen,
  "/features": AdaptersScreen,
  "/blueprints": BlueprintsScreen,
  "/bpmn": BpmnScreen,
  "/about": HomeScreen,
};

function Site() {
  const [route, setRoute] = React.useState("/");
  const go = (href) => (e) => { e.preventDefault(); setRoute(href); window.scrollTo({ top: 0 }); };
  const Screen = SCREENS[route] || HomeScreen;
  const links = NAV.map((l) => ({ ...l, onClick: go(l.href) }));

  return (
    <>
      <Header links={links} current={route} logoBase="../../assets/logo" />
      <main style={{ flex: 1 }}><Screen go={go} /></main>
      <Footer
        logoBase="../../assets/logo"
        note="Apache License 2.0 · Camunda is a trademark of Camunda Services GmbH, used nominatively. Phactum logo used with permission."
        columns={[
          { title: "Project", links: [
            { label: "GitHub", href: "https://github.com/vanillabp" },
            { label: "SPI for Java", href: "https://github.com/vanillabp/spi-for-java" },
            { label: "Business Cockpit", href: "https://github.com/vanillabp/business-cockpit" },
          ]},
          { title: "Learn", links: [
            { label: "Adapters", href: "/features" },
            { label: "Blueprints", href: "/blueprints" },
            { label: "About BPMN", href: "/bpmn" },
          ]},
          { title: "Contact", links: [{ label: "Get in touch", href: "/about" }] },
        ]}
      />
      <ScrollToTop iconSrc="../../assets/icons/scroll-top.svg" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Site />);
