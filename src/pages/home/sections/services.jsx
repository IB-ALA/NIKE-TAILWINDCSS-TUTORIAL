import ServiceCard from "../../../components/serviceCard";
import { services } from "../../../constants";

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services?.length > 0 &&
        services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
    </section>
  );
}

export default Services;
