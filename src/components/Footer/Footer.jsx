import { Row } from "reactstrap";
import "../../styles/footer.css";
import { Link, Stack } from "@mui/material";
import github from "../../images/github.png";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container" color="secondary">
        <Row className="mt-3 flex-row justify-content-md-between align-items-center">
          <div className="col">Ravindu - Revington Developments'</div>
          <Stack direction={"row"} className="col justify-content-end">
            <Link href="https://github.com/michaelrevington">
              <img src={github} width={30} height={30} alt="Github"></img>
            </Link>
          </Stack>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
