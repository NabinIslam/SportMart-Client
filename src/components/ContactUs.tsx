import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactUs = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="text-center font-bold text-4xl mb-10">Contact Us</h2>
        
        <form className="space-y-4 max-w-2xl mx-auto" action="">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
              type="text"
              placeholder="First Name"
              required
            />
            <Input
              className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <Input
              className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <Textarea
              className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
              placeholder="Type your message here."
              rows={10}
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              className="bg-transparent border-2 text-slate-500 hover:bg-primary hover:border-primary hover:text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
