import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 animate-fade-in-up items-center">
      <section className="text-center flex flex-col items-center">
        <h1 className="hero-heading flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job and get
        </h1>
        <div className="h-16 sm:h-24 lg:h-32 mt-4 w-auto overflow-visible interactive-element drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] filter">
          <Logo />
        </div>
        <p className="text-muted-foreground sm:mt-8 mt-4 text-sm sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"} className="interactive-element">
          <Button variant="blue" size="xl" className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all border border-blue-500/50">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"} className="interactive-element">
          <Button variant="destructive" size="xl" className="bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all border border-red-500/50">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
             <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="company-logo h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img src="/banner.jpeg" className="w-full rounded-2xl shadow-xl border border-border/50 interactive-element" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="glass-card interactive-element">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-lg">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="glass-card interactive-element">
          <CardHeader>
            <CardTitle className="font-bold text-2xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-lg">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-border/50">
            <AccordionTrigger className="text-lg hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
