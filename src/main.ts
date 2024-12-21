import { Map, NavigationControl, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

// Create the map
const map = new Map({
  container: 'map', // ID of the HTML element to attach the map to
  style: 'https://demotiles.maplibre.org/style.json', // Example style
  center: [-47.9292, -15.7801], // [longitude, latitude]
  zoom: 4
});

const marker = new Marker().setLngLat([-47.9292, -15.7801]).addTo(map);

map.addControl(new NavigationControl(), 'top-right');

map.on('load', () => {
  // For a real scenario, you'd load or define your own layers, e.g.:
  // map.addSource('counties', {...});
  // map.addLayer({ id: 'counties-layer', source: 'counties', ... });

  // For demonstration, let's assume the style.json already has some named layers
  // or we've manually added them. We'll just store them in an array:
  const layersInfo = [
    { id: 'county-boundaries', name: 'County Boundaries', visible: true },
    { id: 'road-network', name: 'Road Network', visible: true },
    { id: 'parks', name: 'Parks', visible: true },
  ];

  // Attach to the window or store globally if you need it:
  (window as any).map = map;
  (window as any).layersInfo = layersInfo;

  // Initialize your UI
  initSidebar(layersInfo, map);
});

function initSidebar(layersInfo: { id: string; name: string; visible: boolean }[], map: Map) {
  const container = document.getElementById('layers-container');
  if (!container) return;

  // Clear if needed
  container.innerHTML = '';

  layersInfo.forEach((layer) => {
    // Create a wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center mb-2';

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = layer.visible;
    checkbox.className = 'mr-2';
    checkbox.addEventListener('change', () => {
      // On toggle
      layer.visible = !layer.visible;
      map.setLayoutProperty(
        layer.id,
        'visibility',
        layer.visible ? 'visible' : 'none'
      );
    });

    // Create a label
    const label = document.createElement('label');
    label.textContent = layer.name;
    label.className = 'cursor-pointer select-none';

    // Append checkbox + label to the wrapper
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');

  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // If the sidebar is already hidden, show it
      if (sidebar.classList.contains('-translate-x-64')) {
        sidebar.classList.remove('-translate-x-64');
      } else {
        // If the sidebar is currently shown, hide it
        sidebar.classList.add('-translate-x-64');
      }
    });
  }
});
