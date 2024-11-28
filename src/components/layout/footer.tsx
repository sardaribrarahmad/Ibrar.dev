import { Copyright } from 'lucide-react';
import Typography from '@/components/general/typography';
const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-6 w-6" />
          {new Date().getFullYear()} |&nbsp;
            coded
          &nbsp;by Sardar Ibrar Ahmad
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;