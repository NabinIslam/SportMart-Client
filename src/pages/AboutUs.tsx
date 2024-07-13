import teamMember1 from '@/assets/images/team-img-1.jpg';
import teamMember2 from '@/assets/images/team-img-2.jpg';
import teamMember3 from '@/assets/images/team-img-3.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Our Company</h2>
        <p>
          SportMart is your one-stop destination for all your sporting goods
          needs. Established in 2023, our mission is to provide high-quality
          sports equipment and apparel to athletes and enthusiasts of all
          levels. Whether you're a professional athlete or just getting started,
          SportMart has everything you need to excel in your sport.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
        <p className="mb-4">
          <strong>Mission:</strong> To empower athletes and sports enthusiasts
          by providing top-notch products and exceptional customer service.
        </p>
        <p>
          <strong>Vision:</strong> To be the leading sports goods retailer,
          recognized for our dedication to quality, innovation, and community
          support.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          <strong>Email:</strong> support@sportmart.com
          <br />
          <strong>Phone:</strong> +1 234 567 890
          <br />
          <strong>Address:</strong> 123 SportMart Lane, Fitness City, ST 12345
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={teamMember1}
              alt="Team Member 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={teamMember2}
              alt="Team Member 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={teamMember3}
              alt="Team Member 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Flora Nyra</h3>
            <p className="text-gray-600">Head of Sales</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Store Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Fitness City Store</h3>
            <p className="text-gray-600">
              123 SportMart Lane
              <br />
              Fitness City, ST 12345
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Wellness Town Store</h3>
            <p className="text-gray-600">
              456 Health Blvd
              <br />
              Wellness Town, ST 67890
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
