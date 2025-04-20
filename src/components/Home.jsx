import DineOption from './DineOption';
import FoodOption from './FoodOption';
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Responsive Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="px-4 sm:px-6 lg:px-8">
          <FoodOption />
          <DineOption />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
