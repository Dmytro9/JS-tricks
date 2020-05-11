// JavaScript for side panel is loaded
const sidePanel = await import("components/SidePanel");
sidePanel.open();

async function openSidePanel(type = "desktop") {
  // JavaScript for desktop side panel is loaded
  const sidePanel = await import(`components/${type}/SidePanel`);
  sidePanel.open();
}
