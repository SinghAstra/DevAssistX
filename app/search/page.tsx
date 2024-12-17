import { Navbar } from "@/components/layout/navbar";
import { SearchHeroSection } from "@/components/search/search-hero-section";
import { SearchRepositoryForm } from "@/components/search/search-repository-form";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background flex items-center relative">
      <Navbar />
      <div className="absolute inset-0 bg-grid-white" />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center space-y-12 mt-20 z-10  ">
        <SearchHeroSection />
        <SearchRepositoryForm />
      </div>
    </main>
  );
}