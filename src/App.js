import * as s from '../src/App.styles'


// Components
import Sidebar from '../src/Components/Sidebar/Sidebar'
import MainView from '../src/Components/MainView/MainView'
import menuItems from '../src/utils/menuItems'
import Header from '../src/Components/Header/Header'

const App = () => {
  const backgroundImage = 'images/background.jpg'
  const sidebarHeader = 
  {
    fullName: 'Amparando Tu Salud',
    shortName: 'ATS'
  };
  const fonts = 
  {
    header: 'Poppins',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        />
      <MainView />
    </s.App>
  );
}

export default App;
