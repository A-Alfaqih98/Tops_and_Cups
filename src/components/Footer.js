import { format } from 'date-fns';

function Footer() {
  const copyDate = format(new Date(), 'dd/MM/yyyy');
  return (
    <footer className="footer">
      <p className="copy">Tops&Cups &copy; {copyDate}</p>
    </footer>
  );
}
export default Footer;
