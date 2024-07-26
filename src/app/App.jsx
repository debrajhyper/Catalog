import Tabs from '../components/Tabs';
import Price from '../components/Price';

// The App component is the main component of the application.
// It renders the Price and Tabs components inside a div with some styling.
function App() {
  return (
    // The div with the class "Desktop font-csb relative container mx-0 w-full py-16 bg-white "
    // is the root element of the application.
    <div className="Desktop font-csb relative container mx-0 w-full py-16 bg-white ">

      {/* The Price component is rendered inside the root element */}
      <Price />

      {/* The Tabs component is rendered inside the root element */}
      <Tabs />
    </div>
  )
}

// Exporting the App component as the default export
export default App
