import { FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';

export enum MenuItem {
  MAP = 'MAP',
  DASHBOARD = 'DASHBOARD',
  ABOUT = 'ABOUT',
}

export const parseMenuPath: { [key: string]: MenuItem } = {
  ['/map']: MenuItem.MAP,
  ['/dashboard']: MenuItem.DASHBOARD,
  ['/about']: MenuItem.ABOUT,
};

export const menuColors: { [key in MenuItem]: string } = {
  [MenuItem.MAP]: '#2ECC40',
  [MenuItem.DASHBOARD]: '#FF4136',
  [MenuItem.ABOUT]: '#0074D9',
};

export const menuLabels: { [key in MenuItem]: string } = {
  [MenuItem.MAP]: 'Mapa',
  [MenuItem.DASHBOARD]: 'Painel',
  [MenuItem.ABOUT]: 'Sobre o Sistema',
};

export const menuIcons: { [key in MenuItem]: React.ComponentType } = {
  [MenuItem.MAP]: FaGlobeAmericas,
  [MenuItem.DASHBOARD]: AiOutlineDashboard,
  [MenuItem.ABOUT]: FaInfoCircle,
};

export const menuPaths: { [key in MenuItem]: string } = {
  [MenuItem.MAP]: '/map',
  [MenuItem.DASHBOARD]: '/dashboard',
  [MenuItem.ABOUT]: '/about',
};
